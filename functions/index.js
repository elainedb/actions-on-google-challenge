'use strict';

process.env.DEBUG = 'actions-on-google:error';
const App = require('actions-on-google').ApiAiApp;
const functions = require('firebase-functions');

require('./hooks/shared/object.ext');

const Welcome = require('./hooks/welcome');
const ChooseGame = require('./hooks/chooseGame/chooseGame');
const SwitchGame = require('./hooks/chooseGame/switchGame');

const SoundsAnswerIntent = require('./hooks/animals/game/soundsAnswerIntent');
const Repeat = require('./hooks/animals/repeat');
const DontKnow = require('./hooks/animals/dontKnow');
const AgainYes = require('./hooks/animals/againYes');
const AgainNo = require('./hooks/animals/againNo');
const HintIntent = require('./hooks/animals/hint/hintIntent');
const Pokemon = require('./hooks/easteregg/pokemon');
const StoriesGame = require('./hooks/stories/storiesGame');

const ChooseSong = require('./hooks/song/chooseSong');
const ListSongs = require('./hooks/song/listSongs');
const SameSong = require('./hooks/song/sameSong');
const OtherSong = require('./hooks/song/otherSong');

exports.babysitter = functions.https.onRequest((request, response) => {

    const app = new App({request, response});
    console.log('### index : Request headers: ' + JSON.stringify(request.headers));
    console.log('### index : Request body: ' + JSON.stringify(request.body));

    let actionMap = new Map();
    [
        new Welcome(),
        new ChooseGame(),
        new SwitchGame(),
        new SoundsAnswerIntent(),
        new Pokemon(),
        new Repeat(),
        new DontKnow(),
        new AgainYes(),
        new AgainNo(),
        new HintIntent(),
        new ChooseSong(),
        new ListSongs(),
        new SameSong(),
        new OtherSong(),
        new StoriesGame()
    ].forEach(i => i.register(actionMap));

    app.handleRequest(actionMap);
});
