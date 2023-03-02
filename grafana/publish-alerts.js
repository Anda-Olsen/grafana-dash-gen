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

"use strict";
const request = require("request-promise-native");
const config = require("./config");


/* eslint-disable max-statements, max-len, no-console, no-undef */
function publishAlerts(folderName, alerts) {
  const cfg = config.getConfig();
  const headers = cfg.headers || {};
  request({
    url: "http://127.0.0.1:3000/api/folders",
    method: "GET",
    headers: headers,
    json: true,
    timeout: 1000,
    followAllRedirects: true
  })
    .then(response => {
      console.log(response);
      let folderObj = {title: folderName}
      if (response.length === 0) {
        createFolder(folderObj, alerts);
      } else {
        for (let folder of response) {
          if (folder.title === folderName) {
            folderObj.uid = folder.uid;
            createAlerts(folderObj, alerts);
          } else {
            createFolder(folderObj, alerts);
          }
        }
    }
    })
    .catch(err => {
      console.error(err);
    }); 
}
/* eslint-enable */

function createFolder(folderObj, alerts) {
  const cfg = config.getConfig();
  const headers = cfg.headers || {};
  request({
    url: "http://127.0.0.1:3000/api/folders",
    method: "POST",
    headers: headers,
    json: folderObj,
    timeout: 1000,
    followAllRedirects: true
  })
    .then(response => {
      console.log(response);
      for (let folder in response) {
        if (folder.title === folderObj.title) {
          folderObj.uid = folder.uid;
        }
      }
      createAlerts(folderObj, alerts);
    })
    .catch(err => {
      console.error(err);
    });
}

async function createAlerts(folderObj, alerts) {
  console.log("create alerts");
  const cfg = config.getConfig();
  const headers = cfg.headers || {};
  const promises = [];
  for (let alert of alerts) {
    alert.state['folderUID'] = folderObj.uid;
    const j = request.jar();
    const cookie = request.cookie(cfg.cookie);
    j.setCookie(cookie, cfg.url);
    console.log(alert);
    await request({
      url: cfg.alerts_url,
      method: "POST",
      headers: headers,
      json: alert.generate(),
      jar: j,
      timeout: 1000,
      followAllRedirects: true
    }).then(resp => {
      //console.log(resp);
      //console.log(resp);
      return resp;
    }).catch(e => {
      //console.log(
      //  "grafana-dash-gen: publish: caught error: ",
      //  e.name,
      //  e.message
      //);
      console.log("Unable to publish alerts ");
      //console.log("response headers: ", e.response && e.response.headers);
      console.log("response body: ", e.response && e.response.body);
      //console.log("response statusCode:", e.response && e.response.statusCode);
      throw e; // rethrow for downstream consumers
    });
  }
}


module.exports = publishAlerts;
