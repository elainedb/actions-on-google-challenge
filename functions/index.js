// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
const utils = require('./hooks/_utils');
const welcome = require('./hooks/welcome');

process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').ApiAiApp;
const functions = require('firebase-functions');

// API.AI actions
const WELCOME = 'input.welcome';

exports.babysitter = functions.https.onRequest((request, response) => {
    const app = new App({request, response});
    console.log('Request headers: ' + JSON.stringify(request.headers));
    console.log('Request body: ' + JSON.stringify(request.body));

    let actionMap = new Map();
    actionMap.set(WELCOME, welcome.welcome);

    app.handleRequest(actionMap);
});
