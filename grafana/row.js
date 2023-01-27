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

var xtend = require('xtend');

function Row(opts) {
    opts = opts || {};
    var self = this;

    var state = {
      title: 'New row',
      id: 2,
      editable: true,
      collapse: false,
      panels: [],
      showTitle: true,
      type: "row",
      collapsed: false,
      gridPos: {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 0
      },
    };

    this.state = xtend(state, opts);
    this.panels = [];

    if (opts.panels) {
        opts.panels.forEach(function addP(panel) {
            self.addPanel(panel);
        })
    }
}

Row.prototype.generate = function generate() {
    var generatedJson = [this.state];
    this.panels.forEach(function generatePanelJson(panel) {
        generatedJson.push(panel.generate());
    });

    return generatedJson;
};

Row.prototype.addPanel = function addPanel(panel) {
    this.panels.push(panel);
};

module.exports = Row;
