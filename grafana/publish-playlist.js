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
const errors = require("./errors");

/* eslint-disable max-statements, max-len, no-console, no-undef */
function publishPlaylist(dashboards, opts) {
    opts = opts || {};
    const cfg = config.getConfig();

    const headers = cfg.headers || {};

    
    const j = request.jar();
    const cookie = request.cookie(cfg.cookie);
    j.setCookie(cookie, cfg.url);
    return request({
        url: cfg.playlists_url,
        method: "GET",
        headers: headers,
        jar: j,
        timeout: opts.timeout || 1000,
        followAllRedirects: true,
        accept: "json"
    })
        .then(resp => {
            let playlists = JSON.parse(resp);
            if (playlists.length === 0) {
                privatePublishPlaylist("POST",dashboards,opts, cfg,cfg.playlists_url);
            } else {
                let playlist = playlists.find(list => list.name === opts.title);
                if (playlist === undefined) {
                    privatePublishPlaylist("POST",dashboards,opts,cfg,cfg.playlists_url);
                } else {
                    privatePublishPlaylist("PUT",dashboards,opts,cfg,`${cfg.playlists_url}/${playlist.uid}`);
                }
                        

            }
            return resp;
        })
        .catch(e => {
            console.log("Could not read playlists");
        });
}

function privatePublishPlaylist(method, dashboards, opts, cfg,url) {

    let i = 1;
    let items = []
    for (let dashboard of dashboards) {
        items.push({
            title: dashboard.state.title,
            type: "dashboard_by_tag",
            value: dashboard.state.tags[0],
            order: i
        })
        i++;
    }

    let playlist = {
        "name": opts.title || "Dashboard Playlist",
        "interval": "5m",
        "items": items
    }

    const headers = cfg.headers || {};

    console.log(playlist);

    return request({
        url: url,
        method: method,
        headers: headers,
        json: playlist,
        timeout: opts.timeout || 1000,
        followAllRedirects: true
    })
        .then(resp => {
            console.log("Published playlist");
            return resp;
        })
        .catch(e => {
            console.log("Could not read playlists");
        });
}

/* eslint-enable */

module.exports = publishPlaylist;
