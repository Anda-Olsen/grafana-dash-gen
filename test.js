{
  "annotations": {
    "enable": true,
    "list": [
      {
        "builtIn": 1,
        "datasource": {
          "type": "grafana",
          "uid": "-- Grafana --"
        },
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "target": {
          "limit": 100,
          "matchAny": false,
          "tags": [],
          "type": "dashboard"
        },
        "type": "dashboard"
      }
    ]
  },
  "editable": true,
  "fiscalYearStartMonth": 0,
  "graphTooltip": 0,
  "id": 81,
  "links": [],
  "liveNow": false,
  "panels": [
    {
      "collapse": false,
      "collapsed": false,
      "editable": true,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 0
      },
      "id": 2,
      "panels": [],
      "showTitle": true,
      "title": "String 1",
      "type": "row"
    },
    {
      "colorBackground": false,
      "colorValue": false,
      "colors": [
        "rgba(71, 212, 59, 0.4)",
        "rgba(245, 150, 40, 0.73)",
        "rgba(225, 40, 40, 0.59)"
      ],
      "datasource": {
        "type": "influxdb",
        "uid": "P3CAD03FA1CCF7906"
      },
      "editable": true,
      "error": false,
      "fieldConfig": {
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
      "format": "none",
      "gridPos": {
        "h": 5,
        "w": 3,
        "x": 0,
        "y": 1
      },
      "id": 18,
      "links": [],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "options": {
        "colorMode": "value",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.0.8",
      "postfix": "",
      "postfixFontSize": "50%",
      "prefix": "",
      "prefixFontSize": "50%",
      "span": 5,
      "sparkline": {
        "fillColor": "rgba(134, 178, 214, 0.41)",
        "full": true,
        "lineColor": "rgb(31, 193, 58)",
        "show": true
      },
      "targets": [
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
          "id": 2,
          "measurement": "pbat1",
          "orderByTime": "ASC",
          "params": [
            "pbat1_string1_voltage"
          ],
          "policy": "default",
          "refId": "A1",
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
      ],
      "thresholds": "",
      "title": "Voltage",
      "type": "stat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": "null"
        }
      ],
      "valueName": "current"
    },
    {
      "colorBackground": false,
      "colorValue": false,
      "colors": [
        "rgba(71, 212, 59, 0.4)",
        "rgba(245, 150, 40, 0.73)",
        "rgba(225, 40, 40, 0.59)"
      ],
      "datasource": {
        "type": "influxdb",
        "uid": "P3CAD03FA1CCF7906"
      },
      "editable": true,
      "error": false,
      "fieldConfig": {
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
      "format": "none",
      "gridPos": {
        "h": 5,
        "w": 3,
        "x": 3,
        "y": 1
      },
      "id": 19,
      "links": [],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "options": {
        "colorMode": "value",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.0.8",
      "postfix": "",
      "postfixFontSize": "50%",
      "prefix": "",
      "prefixFontSize": "50%",
      "span": 5,
      "sparkline": {
        "fillColor": "rgba(134, 178, 214, 0.41)",
        "full": true,
        "lineColor": "rgb(31, 193, 58)",
        "show": true
      },
      "targets": [
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
          "id": 3,
          "measurement": "pbat1",
          "orderByTime": "ASC",
          "params": [
            "pbat1_string1_amp"
          ],
          "policy": "default",
          "refId": "A2",
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
      ],
      "thresholds": "",
      "title": "Current",
      "type": "stat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": "null"
        }
      ],
      "valueName": "current"
    },
    {
      "colorBackground": false,
      "colorValue": false,
      "colors": [
        "rgba(71, 212, 59, 0.4)",
        "rgba(245, 150, 40, 0.73)",
        "rgba(225, 40, 40, 0.59)"
      ],
      "datasource": {
        "type": "influxdb",
        "uid": "P3CAD03FA1CCF7906"
      },
      "editable": true,
      "error": false,
      "fieldConfig": {
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
            }
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
      "format": "none",
      "gridPos": {
        "h": 5,
        "w": 3,
        "x": 6,
        "y": 1
      },
      "id": 20,
      "links": [],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "options": {
        "colorMode": "value",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "9.0.8",
      "postfix": "",
      "postfixFontSize": "50%",
      "prefix": "",
      "prefixFontSize": "50%",
      "span": 5,
      "sparkline": {
        "fillColor": "rgba(134, 178, 214, 0.41)",
        "full": true,
        "lineColor": "rgb(31, 193, 58)",
        "show": true
      },
      "targets": [
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
          "id": 4,
          "measurement": "pbat1",
          "orderByTime": "ASC",
          "params": [
            "pbat1_string1_status"
          ],
          "policy": "default",
          "refId": "A3",
          "resultFormat": "time_series",
          "select": [
            [
              {
                "params": [
                  "pbat1_string1_status"
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
      ],
      "thresholds": "",
      "title": "Status",
      "type": "stat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": "null"
        }
      ],
      "valueName": "current"
    },
    {
      "colorBackground": false,
      "colorValue": false,
      "colors": [
        "rgba(71, 212, 59, 0.4)",
        "rgba(245, 150, 40, 0.73)",
        "rgba(225, 40, 40, 0.59)"
      ],
      "datasource": {
        "type": "influxdb",
        "uid": "P3CAD03FA1CCF7906"
      },
      "editable": true,
      "error": false,
      "fieldConfig": {
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
      "format": "none",
      "gridPos": {
        "h": 5,
        "w": 3,
        "x": 0,
        "y": 6
      },
      "id": 24,
      "links": [],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "options": {
        "colorMode": "value",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "value_and_name"
      },
      "pluginVersion": "9.0.8",
      "postfix": "",
      "postfixFontSize": "50%",
      "prefix": "",
      "prefixFontSize": "50%",
      "span": 5,
      "sparkline": {
        "fillColor": "rgba(134, 178, 214, 0.41)",
        "full": true,
        "lineColor": "rgb(31, 193, 58)",
        "show": true
      },
      "targets": [
        {
          "alias": "Maximum",
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
          "id": 9,
          "measurement": "pbat1",
          "orderByTime": "ASC",
          "params": [
            "pbat1_string1_maxVoltage"
          ],
          "policy": "default",
          "refId": "A8",
          "resultFormat": "time_series",
          "select": [
            [
              {
                "params": [
                  "pbat1_string1_maxVoltage"
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
        },
        {
          "alias": "Minimum",
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
          "id": 8,
          "measurement": "pbat1",
          "orderByTime": "ASC",
          "params": [
            "pbat1_string1_minVoltage"
          ],
          "policy": "default",
          "refId": "A7",
          "resultFormat": "time_series",
          "select": [
            [
              {
                "params": [
                  "pbat1_string1_minVoltage"
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
        },
        {
          "alias": "Average",
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
          "id": 10,
          "measurement": "pbat1",
          "orderByTime": "ASC",
          "params": [
            "pbat1_string1_averageVoltage"
          ],
          "policy": "default",
          "refId": "A9",
          "resultFormat": "time_series",
          "select": [
            [
              {
                "params": [
                  "pbat1_string1_averageVoltage"
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
      ],
      "thresholds": "",
      "title": "Battery Voltage",
      "type": "stat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": "null"
        }
      ],
      "valueName": "current"
    },
    {
      "colorBackground": false,
      "colorValue": false,
      "colors": [
        "rgba(71, 212, 59, 0.4)",
        "rgba(245, 150, 40, 0.73)",
        "rgba(225, 40, 40, 0.59)"
      ],
      "datasource": {
        "type": "influxdb",
        "uid": "P3CAD03FA1CCF7906"
      },
      "editable": true,
      "error": false,
      "fieldConfig": {
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
      "format": "none",
      "gridPos": {
        "h": 5,
        "w": 3,
        "x": 3,
        "y": 6
      },
      "id": 25,
      "links": [],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "options": {
        "colorMode": "value",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "value_and_name"
      },
      "pluginVersion": "9.0.8",
      "postfix": "",
      "postfixFontSize": "50%",
      "prefix": "",
      "prefixFontSize": "50%",
      "span": 5,
      "sparkline": {
        "fillColor": "rgba(134, 178, 214, 0.41)",
        "full": true,
        "lineColor": "rgb(31, 193, 58)",
        "show": true
      },
      "targets": [
        {
          "alias": "Maximum",
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
          "id": 12,
          "measurement": "pbat1",
          "orderByTime": "ASC",
          "params": [
            "pbat1_string1_maxResistance"
          ],
          "policy": "default",
          "refId": "A11",
          "resultFormat": "time_series",
          "select": [
            [
              {
                "params": [
                  "pbat1_string1_maxResistance"
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
        },
        {
          "alias": "Minimum",
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
          "id": 11,
          "measurement": "pbat1",
          "orderByTime": "ASC",
          "params": [
            "pbat1_string1_minResistance"
          ],
          "policy": "default",
          "refId": "A10",
          "resultFormat": "time_series",
          "select": [
            [
              {
                "params": [
                  "pbat1_string1_minResistance"
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
        },
        {
          "alias": "Average",
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
          "id": 13,
          "measurement": "pbat1",
          "orderByTime": "ASC",
          "params": [
            "pbat1_string1_averageResistance"
          ],
          "policy": "default",
          "refId": "A12",
          "resultFormat": "time_series",
          "select": [
            [
              {
                "params": [
                  "pbat1_string1_averageResistance"
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
      ],
      "thresholds": "",
      "title": "Battery Resistance",
      "type": "stat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": "null"
        }
      ],
      "valueName": "current"
    },
    {
      "colorBackground": false,
      "colorValue": false,
      "colors": [
        "rgba(71, 212, 59, 0.4)",
        "rgba(245, 150, 40, 0.73)",
        "rgba(225, 40, 40, 0.59)"
      ],
      "datasource": {
        "type": "influxdb",
        "uid": "P3CAD03FA1CCF7906"
      },
      "editable": true,
      "error": false,
      "fieldConfig": {
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
      "format": "none",
      "gridPos": {
        "h": 5,
        "w": 3,
        "x": 6,
        "y": 6
      },
      "id": 26,
      "links": [],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "options": {
        "colorMode": "value",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "value_and_name"
      },
      "pluginVersion": "9.0.8",
      "postfix": "",
      "postfixFontSize": "50%",
      "prefix": "",
      "prefixFontSize": "50%",
      "span": 5,
      "sparkline": {
        "fillColor": "rgba(134, 178, 214, 0.41)",
        "full": true,
        "lineColor": "rgb(31, 193, 58)",
        "show": true
      },
      "targets": [
        {
          "alias": "Maximum",
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
          "id": 15,
          "measurement": "pbat1",
          "orderByTime": "ASC",
          "params": [
            "pbat1_string1_maxBatteryTemp"
          ],
          "policy": "default",
          "refId": "A14",
          "resultFormat": "time_series",
          "select": [
            [
              {
                "params": [
                  "pbat1_string1_maxBatteryTemp"
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
        },
        {
          "alias": "Minimum",
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
          "id": 14,
          "measurement": "pbat1",
          "orderByTime": "ASC",
          "params": [
            "pbat1_string1_minBatteryTemp"
          ],
          "policy": "default",
          "refId": "A13",
          "resultFormat": "time_series",
          "select": [
            [
              {
                "params": [
                  "pbat1_string1_minBatteryTemp"
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
        },
        {
          "alias": "Average",
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
          "id": 16,
          "measurement": "pbat1",
          "orderByTime": "ASC",
          "params": [
            "pbat1_string1_averageTemperature"
          ],
          "policy": "default",
          "refId": "A15",
          "resultFormat": "time_series",
          "select": [
            [
              {
                "params": [
                  "pbat1_string1_averageTemperature"
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
      ],
      "thresholds": "",
      "title": "Battery Temperature",
      "type": "stat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": "null"
        }
      ],
      "valueName": "current"
    }
  ],
  "refresh": false,
  "schemaVersion": 36,
  "style": "dark",
  "tags": [],
  "templating": {
    "list": []
  },
  "time": {
    "from": "now-6h",
    "to": "now"
  },
  "timepicker": {},
  "timezone": "browser",
  "title": "Battery Monitoring",
  "uid": "B9-zsZRRk",
  "version": 4,
  "weekStart": ""
}