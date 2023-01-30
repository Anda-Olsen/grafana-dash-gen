const grafana = require('./index');
const Row = grafana.Row;
const Dashboard = grafana.Dashboard;
const Panels = grafana.Panels;
const Target = grafana.Target;
const Templates = grafana.Templates;
const Alert = grafana.Alert;
const Condition = grafana.Condition;
const DataSource = grafana.DataSource

const dataSource = new DataSource({
  type: "influxdb",
  uid: "P3CAD03FA1CCF7906"
});

//target1 = dataSource.getTarget("pbat1", ["pbat1_string1_voltage"], {});

target1 = new Target({
  datasource: dataSource.getDataSource(),
  measurement: "pbat1",
  params: ["pbat1_string1_voltage"],
}).generate();

target2 = new Target({
  datasource: dataSource.getDataSource(),
  measurement: "pbat1",
  params: ["pbat1_string1_amp"],
}).generate();

target3 = new Target({
  datasource: dataSource.getDataSource(),
  measurement: "pbat1",
  params: ["pbat1_string1_status"],
}).generate();

target4 = new Target({
  datasource: dataSource.getDataSource(),
  measurement: "pbat1",
  params: ["pbat1_string2_voltage"],
}).generate();

target5 = new Target({
  datasource: dataSource.getDataSource(),
  measurement: "pbat1",
  params: ["pbat1_string2_amp"],
}).generate();

target6 = new Target({
  datasource: dataSource.getDataSource(),
  measurement: "pbat1",
  params: ["pbat1_string2_status"],
}).generate();

minVoltage = new Target({
  datasource: dataSource.getDataSource(),
  measurement: "pbat1",
  params: ["pbat1_string1_minVoltage"],
  alias: "Minimum"
}).generate();

maxVoltage = new Target({
  datasource: dataSource.getDataSource(),
  measurement: "pbat1",
  params: ["pbat1_string1_maxVoltage"],
  alias: "Maximum"
}).generate();

avgVoltage = new Target({
  datasource: dataSource.getDataSource(),
  measurement: "pbat1",
  params: ["pbat1_string1_averageVoltage"],
  alias: "Average"
}).generate();

minResistance = new Target({
  datasource: dataSource.getDataSource(),
  measurement: "pbat1",
  params: ["pbat1_string1_minResistance"],
  alias: "Minimum"
}).generate();

maxResistance = new Target({
  datasource: dataSource.getDataSource(),
  measurement: "pbat1",
  params: ["pbat1_string1_maxResistance"],
  alias: "Maximum"
}).generate();

avgResistance = new Target({
  datasource: dataSource.getDataSource(),
  measurement: "pbat1",
  params: ["pbat1_string1_averageResistance"],
  alias: "Average"
}).generate();

minTemperature = new Target({
  datasource: dataSource.getDataSource(),
  measurement: "pbat1",
  params: ["pbat1_string1_minBatteryTemp"],
  alias: "Minimum"
}).generate();

maxTemperature = new Target({
  datasource: dataSource.getDataSource(),
  measurement: "pbat1",
  params: ["pbat1_string1_maxBatteryTemp"],
  alias: "Maximum"
}).generate();

avgTemperature = new Target({
  datasource: dataSource.getDataSource(),
  measurement: "pbat1",
  params: ["pbat1_string1_averageTemperature"],
  alias: "Average"
}).generate();

resistanceTags = [];
for (let i=1; i<2; i++) {
  resistanceTags.push(new Target({
    datasource: dataSource.getDataSource(),
    measurement: "pbat1",
    params: [`pbat1_string1_resistance${i}`],
    alias: `Cell ${i}`
  }).generate());
}


const panel1 = new Panels.SingleStat({
  title: 'Voltage',
  span: 5,
  datasource: dataSource.getDataSource(),
  targets: [target1],
  fieldConfig: {
    "defaults": {
      "color": {
        "fixedColor": "rgb(31, 193, 58)",
        "mode": "thresholds"
      },
      "mappings": [
        {
          "options": {
            "match": "null",
            "result": {
              "text": "N/A"
            }
          },
          "type": "special"
        }
      ],
      "thresholds": {
        "mode": "absolute",
        "steps": [
          {
            "color": "red",
            "value": null
          },
          {
            "color": "rgb(234, 184, 57)",
            "value": 200
          },
          {
            "color": "rgb(31, 193, 58)",
            "value": 210
          }
        ]
      },
      "unit": "volt"
    },
    "overrides": []
  },
  "gridPos": {
    "h": 5,
    "w": 3,
    "x": 0,
    "y": 1
  },
});

const panel2 = new Panels.SingleStat({
  title: 'Current',
  span: 5,
  datasource: {
    "type": "influxdb",
    "uid": "P3CAD03FA1CCF7906"
  },
  targets: [target2],
  fieldConfig: {
    "defaults": {
      "color": {
        "fixedColor": "rgb(31, 193, 58)",
        "mode": "fixed"
      },
      "mappings": [
        {
          "options": {
            "match": "null",
            "result": {
              "text": "N/A"
            }
          },
          "type": "special"
        }
      ],
      "thresholds": {
        "mode": "absolute",
        "steps": [
          {
            "color": "green",
            "value": null
          },
          {
            "color": "red",
            "value": 80
          }
        ]
      },
      "unit": "amp"
    },
    "overrides": []
  },
  "gridPos": {
    "h": 5,
        "w": 3,
        "x": 3,
        "y": 1
  }
});

const panel3 = new Panels.SingleStat({
  title: 'Status',
  span: 5,
  datasource: {
    "type": "influxdb",
    "uid": "P3CAD03FA1CCF7906"
  },
  targets: [target3],
  options: {
    "graphMode": "none",
  },
  fieldConfig: {
    "defaults": {
      "color": {
        "fixedColor": "rgb(31, 193, 58)",
        "mode": "thresholds"
      },
      "mappings": [
        {
          "options": {
            "0": {
              "text": "Floating charge"
            },
            "1": {
              "text": "Equalizing charge"
            },
            "2": {
              "text": "Discharge"
            },
            "3": {
              "text": "Standing"
            },
            "4": {
              "text": "Abnormal"
            }
          },
          "type": "value"
        },
      ],
      "thresholds": {
        "mode": "absolute",
        "steps": [
          {
            "color": "rgb(31, 193, 58)",
            "value": null
          },
          {
            "color": "rgb(55, 135, 45)",
            "value": 0
          },
          {
            "color": "rgb(31, 96, 196)",
            "value": 1
          },
          {
            "color": "rgb(224, 180, 0)",
            "value": 2
          },
          {
            "color": "rgb(250, 100, 0)",
            "value": 3
          },
          {
            "color": "rgb(196, 22, 42)",
            "value": 4
          }
        ]
      },
      "unit": ""
    },
    "overrides": []
  },
  "gridPos": {
    "h": 5,
    "w": 3,
    "x": 6,
    "y": 1
  }
});


const voltagePanel = new Panels.SingleStat({
  title: 'Battery Voltage',
  span: 5,
  datasource: {
    "type": "influxdb",
    "uid": "P3CAD03FA1CCF7906"
  },
  targets: [maxVoltage, minVoltage, avgVoltage],
  options: {
    "orientation": "horizontal",
    "textMode": "value_and_name",
    "graphMode": "none",
  },
  fieldConfig: {
    "defaults": {
      "color": {
        "fixedColor": "rgb(31, 193, 58)",
        "mode": "fixed"
      },
      "mappings": [
        {
          "options": {
            "match": "null",
            "result": {
              "text": "N/A"
            }
          },
          "type": "special"
        }
      ],
      "thresholds": {
        "mode": "absolute",
        "steps": [
          {
            "color": "green",
            "value": null
          },
          {
            "color": "red",
            "value": 80
          }
        ]
      },
      "unit": "volt"
    },
    "overrides": []
  },
  "gridPos": {
    "h": 5,
        "w": 3,
        "x": 0,
        "y": 6
  }
});

const resistancePanel = new Panels.SingleStat({
  title: 'Battery Resistance',
  span: 5,
  datasource: {
    "type": "influxdb",
    "uid": "P3CAD03FA1CCF7906"
  },
  targets: [maxResistance, minResistance, avgResistance],
  options: {
    "orientation": "horizontal",
    "textMode": "value_and_name",
    "graphMode": "none",
  },
  fieldConfig: {
    "defaults": {
      "color": {
        "fixedColor": "rgb(31, 193, 58)",
        "mode": "fixed"
      },
      "mappings": [
        {
          "options": {
            "match": "null",
            "result": {
              "text": "N/A"
            }
          },
          "type": "special"
        }
      ],
      "thresholds": {
        "mode": "absolute",
        "steps": [
          {
            "color": "green",
            "value": null
          },
          {
            "color": "red",
            "value": 80
          }
        ]
      },
      "unit": "ohm"
    },
    "overrides": []
  },
  "gridPos": {
    "h": 5,
    "w": 3,
    "x": 3,
    "y": 6
  }
});

const temperaturePanel = new Panels.SingleStat({
  title: 'Battery Temperature',
  span: 5,
  datasource: {
    "type": "influxdb",
    "uid": "P3CAD03FA1CCF7906"
  },
  targets: [maxTemperature, minTemperature, avgTemperature],
  options: {
    "orientation": "horizontal",
    "textMode": "value_and_name",
    "graphMode": "none",
  },
  fieldConfig: {
    "defaults": {
      "color": {
        "fixedColor": "rgb(31, 193, 58)",
        "mode": "fixed"
      },
      "mappings": [
        {
          "options": {
            "match": "null",
            "result": {
              "text": "N/A"
            }
          },
          "type": "special"
        }
      ],
      "thresholds": {
        "mode": "absolute",
        "steps": [
          {
            "color": "green",
            "value": null
          },
          {
            "color": "red",
            "value": 80
          }
        ]
      },
      "unit": "celsius"
    },
    "overrides": []
  },
  "gridPos": {
    "h": 5,
    "w": 3,
    "x": 6,
    "y": 6
  }
});
const resistancePanelGraph = new Panels.TimeSeries({
  title: 'Battery Resistance',
  span: 5,
  datasource: {
    "type": "influxdb",
    "uid": "P3CAD03FA1CCF7906"
  },
  targets: resistanceTags,
  fieldConfig: {
    "defaults": {
      "color": {
        "fixedColor": "rgb(31, 193, 58)",
        "mode": "fixed"
      },
      "mappings": [
        {
          "options": {
            "match": "null",
            "result": {
              "text": "N/A"
            }
          },
          "type": "special"
        }
      ],
      "thresholds": {
        "mode": "absolute",
        "steps": [
          {
            "color": "green",
            "value": null
          },
          {
            "color": "red",
            "value": 80
          }
        ]
      },
      "unit": "ohm"
    },
    "overrides": []
  }
});


const dashboard = new Dashboard({
  title: 'Battery Monitoring',
  schemaVersion: 36,
});

const row1 = new Row({
    title: "String 1"
  }
);

row1.addPanel(panel1);
row1.addPanel(panel2);
row1.addPanel(panel3);
row1.addPanel(voltagePanel);
row1.addPanel(resistancePanel);
row1.addPanel(temperaturePanel);

dashboard.addRow(row1);


const dashboard2 = new Dashboard({
  title: 'Graphs',
  schemaVersion: 36,
});

const resistanceRow = new Row({
    title: "String 1"
  }
);

resistanceRow.addPanel(resistancePanelGraph);

dashboard2.addRow(resistanceRow);


//const conditionDischarging = new Condition().onQuery('A').withEvaluator(1, 'lt').withReducer('max');

//const alert = new Alert({ name: 'Discharging' });
//alert.addCondition(conditionDischarging);

//panel2.addAlert(alert);


// eyJrIjoiV0dxZnZHZVZOclVocXQwbm1Gd1Z0Z0FUdmIxbkp4amgiLCJuIjoidGVzdCIsImlkIjoxfQ==
grafana.configure({
	url: 'http://127.0.0.1:3000/api/dashboards/db',
  user: "admin",
  headers : {
    Authorization: `Bearer eyJrIjoiV0dxZnZHZVZOclVocXQwbm1Gd1Z0Z0FUdmIxbkp4amgiLCJuIjoidGVzdCIsImlkIjoxfQ==`,
    Accept: "application/json",
    "Content-Type": "application/json"
  },
	cookie: 'auth-openid=someidhere'
});
grafana.publish(dashboard);
grafana.publish(dashboard2);



json = JSON.stringify(dashboard.generate(), null, 1)

var fs = require('fs');

fs.writeFile("dashboard.json", json, function (err) {
  if (err) {
    console.log(err);
  }
});