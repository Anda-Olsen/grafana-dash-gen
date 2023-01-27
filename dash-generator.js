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

target1 = dataSource.getTarget("pbat1", ["pbat1_string1_voltage"]);

target2 = dataSource.getTarget("pbat1", ["pbat1_string1_amp"]);

target3 = dataSource.getTarget("pbat1", ["pbat1_string1_status"]);

target4 = dataSource.getTarget("pbat1", ["pbat1_string2_voltage"]);

target5 = dataSource.getTarget("pbat1", ["pbat1_string2_amp"]);

target6 = dataSource.getTarget("pbat1", ["pbat1_string2_status"]);

/**
target1 =
{
  "datasource": {
    "type": "influxdb",
    "uid": "P3CAD03FA1CCF7906"
  },
  "groupBy": [
    {
      "params": [
        "10s"
      ],
      "type": "time"
    },
    {
      "params": [
        "null"
      ],
      "type": "fill"
    }
  ],
  "measurement": "pbat1",
  "orderByTime": "ASC",
  "policy": "default",
  "refId": "A",
  "resultFormat": "time_series",
  "select": [
    [
      {
        "params": [
          "pbat1_string1_voltage"
        ],
        "type": "field"
      },
      {
        "params": [],
        "type": "distinct"
      }
    ]
  ],
  "tags": []
}


target2 =
{
  "datasource": {
    "type": "influxdb",
    "uid": "P3CAD03FA1CCF7906"
  },
  "groupBy": [
    {
      "params": [
        "10s"
      ],
      "type": "time"
    },
    {
      "params": [
        "null"
      ],
      "type": "fill"
    }
  ],
  "measurement": "pbat1",
  "orderByTime": "ASC",
  "policy": "default",
  "refId": "A",
  "resultFormat": "time_series",
  "select": [
    [
      {
        "params": [
          "pbat1_string1_amp"
        ],
        "type": "field"
      },
      {
        "params": [],
        "type": "distinct"
      }
    ]
  ],
  "tags": []
}
*/


const panel1 = new Panels.SingleStat({
  title: 'Voltage',
  span: 5,
  datasource: dataSource.getDataSource(),
  targets: [target1],
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
  }
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
      "unit": "ampere"
    },
    "overrides": []
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
  fieldConfig: {
    "defaults": {
      "color": {
        "fixedColor": "rgb(31, 193, 58)",
        "mode": "fixed"
      },
      "mappings": [
        {
          "options": {
            "1": {
              "text": "Equalizing charge"
            },
            "2": {
              "text": "Discharge"
            },
            "4": {
              "text": "Abnormal"
            }
          },
          "type": "value"
        },
        {
          "options": {
            "from": 3,
            "result": {
              "text": "Standing"
            },
            "to": 3
          },
          "type": "range"
        },
        {
          "options": {
            "from": 0,
            "result": {
              "text": "Floating charge"
            },
            "to": 0
          },
          "type": "range"
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
      "unit": ""
    },
    "overrides": []
  }
});

const panel4 = new Panels.SingleStat({
  title: 'Voltage',
  span: 5,
  datasource: dataSource.getDataSource(),
  targets: [target4],
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
  }
});

const panel5 = new Panels.SingleStat({
  title: 'Current',
  span: 5,
  datasource: {
    "type": "influxdb",
    "uid": "P3CAD03FA1CCF7906"
  },
  targets: [target5],
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
      "unit": "ampere"
    },
    "overrides": []
  }
});

const panel6 = new Panels.SingleStat({
  title: 'Status',
  span: 5,
  datasource: {
    "type": "influxdb",
    "uid": "P3CAD03FA1CCF7906"
  },
  targets: [target6],
  fieldConfig: {
    "defaults": {
      "color": {
        "fixedColor": "rgb(31, 193, 58)",
        "mode": "fixed"
      },
      "mappings": [
        {
          "options": {
            "1": {
              "text": "Equalizing charge"
            },
            "2": {
              "text": "Discharge"
            },
            "4": {
              "text": "Abnormal"
            }
          },
          "type": "value"
        },
        {
          "options": {
            "from": 3,
            "result": {
              "text": "Standing"
            },
            "to": 3
          },
          "type": "range"
        },
        {
          "options": {
            "from": 0,
            "result": {
              "text": "Floating charge"
            },
            "to": 0
          },
          "type": "range"
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
      "unit": ""
    },
    "overrides": []
  }
});

//panel1.state.targets = [target1];

//panel2.state.targets = [target2];

//row.addPanel(panel);


const dashboard = new Dashboard({
  title: 'Battery Monitoring',
  schemaVersion: 36,
  panels: [panel1, panel2, panel3]
});

const row1 = new Row({
    title: "String 1"
  }
);

row1.addPanel(panel1);
row1.addPanel(panel2);
row1.addPanel(panel3);

dashboard.addRow(row1);

const row2 = new Row({
  title: "String 2",
  id: 556
}
);

row2.addPanel(panel4);
row2.addPanel(panel5);
row2.addPanel(panel6);

dashboard.addRow(row2);

/**
// eyJrIjoiV0dxZnZHZVZOclVocXQwbm1Gd1Z0Z0FUdmIxbkp4amgiLCJuIjoidGVzdCIsImlkIjoxfQ==
grafana.configure({
	url: 'https://192.168.1.175:3000/api/dashboards/db',
  user: "admin",
  headers : {
    Authorization: `Bearer eyJrIjoiV0dxZnZHZVZOclVocXQwbm1Gd1Z0Z0FUdmIxbkp4amgiLCJuIjoidGVzdCIsImlkIjoxfQ==`,
    Accept: "application/json",
    "Content-Type": "application/json"
  }
	//cookie: 'auth-openid=someidhere'
});
grafana.publish(dashboard);

 */

json = JSON.stringify(dashboard.generate(), null, 1)

var fs = require('fs');

fs.writeFile("dashboard.json", json, function (err) {
  if (err) {
    console.log(err);
  }
});