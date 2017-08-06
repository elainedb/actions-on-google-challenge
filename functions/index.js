'use strict';
const utils = require('./hooks/shared/_utils');

process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').ApiAiApp;
const functions = require('firebase-functions');

const Welcome = require('./hooks/welcome');
const ChooseGame = require('./hooks/chooseGame');

const SoundsAnswer = require('./hooks/animals/soundsAnswer');
const Repeat = require('./hooks/animals/repeat');
const Pokemon = require('./hooks/easteregg/pokemon');

const ChooseSong = require('./hooks/song/chooseSong');

exports.babysitter = functions.https.onRequest((request, response) => {

    const app = new App({request, response});
    console.log('Request headers: ' + JSON.stringify(request.headers));
    console.log('Request body: ' + JSON.stringify(request.body));

    let actionMap = new Map();
    [
        new Welcome(),
        new ChooseGame(),
        new SoundsAnswer(),
        new Pokemon(),
        new Repeat(),
        new ChooseSong()
    ].forEach(i => i.register(actionMap));

    app.handleRequest(actionMap);
});
