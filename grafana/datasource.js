// Copyright (c) 2015 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

'use strict';

var generateGraphId = require('./id');
var Target = require('./target');

function DataSource(opts) {
    opts = opts || {};
    var self = this;

    var defaults = {
        id: generateGraphId(),
        type: "influxdb",
        uid: ""

    };
    this.state = defaults;

    // Overwrite defaults with custom values
    Object.keys(opts).forEach(function eachOpt(opt) {
        self.state[opt] = opts[opt];
    });


}


DataSource.prototype.getDataSource = function getDataSource() {
    return {
        type: this.state.type,
        uid: this.state.uid
    }
}

DataSource.prototype.getTarget = function getTarget(measurement, params) {
    return {
        datasource: this.getDataSource(),
        groupBy: [
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
        measurement: measurement,
        orderByTime: "ASC",
        policy: "default",
        refId: "A",
        resultFormat: "time_series",
        select: [
            [
                {
                    "params": params,
                    "type": "field"
                },
                {
                    "params": [],
                    "type": "distinct"
                }
            ]
        ],
        tags: []
    }
};


module.exports = DataSource;
