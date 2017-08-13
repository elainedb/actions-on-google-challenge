'use strict';

exports.INTENT_ID = 'intent.auntie.game.story';

exports.ARGS = {
    story: 'story',
    afterStoryChoice: 'choice'
};

exports.LIST_STORIES_SENTENCES = [
    'Great! Here are the available stories: ',
    'Awesome! I know the following stories: ',
    'Story time! Which story do you want to hear? '
];

exports.LIST_STORIES_END_SENTENCES = [
    "Wasn't that a great story? Do you want to hear it again, or hear another one?",
    'What a nice story! Do you want to hear it again, or hear another one?',
    'I really like that one! Do you want to hear it again, or hear another one?'
];

// attribute:
// https://freesound.org/people/InspectorJ/sounds/352099/
// http://soundbible.com/1417-Balloon-Blowing-Up.html
// http://soundbible.com/1410-Inflating-Balloon.html
// https://freesound.org/people/wjtaylor/sounds/268500/
// http://soundbible.com/1627-Female-Scream-Horror.html
// https://freesound.org/people/XxBirdoxX/sounds/52293/
// https://freesound.org/people/AlbertTrepat/sounds/219646/
// https://freesound.org/people/xtrgamr/sounds/243648/
// https://freesound.org/people/rhodesmas/sounds/320775/

// more stories: http://shortstoriesshort.com/

exports.STORIES = {
    pigs: {
        title: 'Three Little Pigs',
        content: `Once upon a time there were three little pigs. <break time="1s"/>
        One pig built a house of straw while the second pig built his house with sticks. <break time="1s"/>
        They built their houses very quickly and then sang and danced all day because they were lazy.
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/243648__xtrgamr__sing-along-large-crowd-party.wav"></audio> <break time="1s"/>
        The third little pig worked hard all day and built his house with bricks. <break time="2s"/>
        A big bad wolf saw the two little pigs while they danced and played and thought, 
        <voice gender="male" variant="2">“Yum... What juicy tender meals they will make!”</voice> <break time="1s"/>
        He chased the two pigs and they ran and hid in their houses.
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/316924__rudmer-rotteveel__footsteps-running-away-fading.wav"></audio>
        The big bad wolf went to the first house and huffed <break time="500ms"/> and puffed <break time="500ms"/> and blew the house down in minutes.
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/Inflating%20Balloon-SoundBible.com-893635129.mp3"></audio> <break time="1s"/>
        The frightened little pig ran to the second pig’s house that was made of sticks.
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/316924__rudmer-rotteveel__footsteps-running-away-fading.wav"></audio>
        The big bad wolf now came to this house and huffed <break time="500ms"/> and puffed <break time="500ms"/> and blew the house down in hardly any time.
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/Balloon%20Blowing%20Up-SoundBible.com-1989230335.mp3"></audio>
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/Inflating%20Balloon-SoundBible.com-893635129.mp3"></audio>
        Now, the two little pigs were terrified and ran to the third pig’s house that was made of bricks.
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/316924__rudmer-rotteveel__footsteps-running-away-fading.wav"></audio>
        The big bad wolf tried to huff and puff and blow the house down, <break time="500ms"/> but he could not.
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/Balloon%20Blowing%20Up-SoundBible.com-1989230335.mp3"></audio>
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/Inflating%20Balloon-SoundBible.com-893635129.mp3"></audio>
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/Balloon%20Blowing%20Up-SoundBible.com-1989230335.mp3"></audio>
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/Inflating%20Balloon-SoundBible.com-893635129.mp3"></audio> <break time="1s"/>
        He kept trying for hours, but the house was very strong and the little pigs were safe inside. <break time="1s"/>
        He tried to enter through the chimney, but the third little pig boiled a big pot of water and kept it below the chimney. <break time="1s"/>
        The wolf fell into it and died.
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/352099__inspectorj__splash-jumping-c.wav"></audio> <break time="1s"/>
        The two little pigs now felt sorry for having been so lazy. They too built their houses with bricks and lived happily ever after. <break time="1s"/>
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/320775__rhodesmas__win-02.wav"></audio> <break time="1s"/>`
    },
    hood: {
        title: 'Little Red Riding Hood',
        content: `
        One day, Little Red Riding Hood’s mother said to her, <break time="500ms"/>
        <voice gender="female" variant="1">“Take this basket of goodies to your grandma’s cottage, but don’t talk to strangers on the way!”.</voice> <break time="1s"/>
        Promising not to, Little Red Riding Hood skipped off. <break time="500ms"/>
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/18056__zippi1__sound-lalala2.wav"></audio> <break time="1s"/>
        On her way she met the Big Bad Wolf who asked,
        <voice gender="male" variant="1">“Where are you going, little girl?”</voice> <break time="1s"/>
        “To my grandma’s, Mr. Wolf!” <break time="500ms"/> she answered. <break time="1s"/>
        The Big Bad Wolf then ran to her grandmother’s cottage much before Little Red Riding Hood, and knocked on the door.
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/268500__wjtaylor__door-knock.mp3"></audio> <break time="1s"/>
        When Grandma opened the door, he locked her up in the cupboard. <break time="1s"/>
        The wicked wolf then wore Grandma’s clothes and lay on her bed, waiting for Little Red Riding Hood. <break time="2s"/>
        
        When Little Red Riding Hood reached the cottage, she entered and went to Grandma’s bedside. <break time="1s"/>
        “My! What big eyes you have, Grandma!” <break time="500ms"/> she said in surprise. <break time="1s"/>
        <voice gender="female" variant="1">“All the better to see you with, my dear!”</voice> <break time="500ms"/> replied the wolf. <break time="1s"/>
        “My! What big ears you have, Grandma!” <break time="500ms"/> said Little Red Riding Hood. <break time="1s"/>
        <voice gender="female" variant="1">“All the better to hear you with, my dear!”</voice> <break time="500ms"/> said the wolf. <break time="1s"/>
        “What big teeth you have, Grandma!” <break time="500ms"/> said Little Red Riding Hood. <break time="1s"/>
        <voice gender="male" variant="1">“All the better to eat you with!”</voice> <break time="500ms"/> growled the wolf pouncing on her. <break time="1s"/>
        Little Red Riding Hood screamed and the woodcutters in the forest came running to the cottage.
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/316924__rudmer-rotteveel__footsteps-running-away-fading.wav"></audio>

        They beat the Big Bad Wolf and rescued Grandma from the cupboard. <break time="1s"/>
        Grandma hugged Little Red Riding Hood with joy. <break time="1s"/>
        The Big Bad Wolf ran away never to be seen again. <break time="1s"/>
        Little Red Riding Hood had learnt her lesson and never spoke to strangers ever again. <break time="1s"/>
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/320775__rhodesmas__win-02.wav"></audio> <break time="1s"/>`
    },
    hansel: {
        title: 'Hansel and Gretel',
        content: `A poor woodcutter and his wife had two children named Hansel and Gretel. <break time="1s"/>
        Their mother died when they were young. Hansel and Gretel were very sad. <break time="1s"/>
        Soon their father remarried but their stepmother was very cruel. One day, she took the children deep into the forest and left them there. <break time="1s"/>
        Clever Hansel had some breadcrumbs in his pocket and had dropped them on the way so that they could find their way back home. Alas! <break time="1s"/>
        The birds ate all the crumbs and they couldn’t find the path that led back home. <break time="1s"/>
        Hansel and Gretel went deeper and deeper into the forest. They were hungry and tired.
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/52293__xxbirdoxx__stomach-growl-pish-01.wav"></audio> <break time="1s"/>
        Finally, after walking for a long time, they saw a cottage made of chocolate, candies, and cake. <break time="1s"/>
        <voice gender="female" variant="1">“Look, Hansel! A chocolate brick!”</voice> shouted Gretel in delight and both ate it hungrily. <break time="1s"/>
        Now, a wicked witch lived there. When she saw Hansel and Gretel, she wanted to eat them. <break time="1s"/>
        She grabbed the chil­dren and locked them in a cage. <break time="1s"/>
        The witch decided to make a soup out of Hansel and eat him first. <break time="1s"/>
        She began boiling a huge pot of water for the soup. Just then, Gretel crept out of her cage. <break time="1s"/>
        She gave the wicked witch a mighty push from behind and the witch fell into the boiling water.
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/352099__inspectorj__splash-jumping-c.wav"></audio> <break time="1s"/>
        She howled in pain and died instantly.
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/219646__alberttrepat__female-scared-scream.mp3"></audio> <break time="1s"/>
        Hansel and Gretel found treasure lying around the cottage. They carried it home with them. <break time="1s"/>
        Their stepmother had died and their father wel­comed them back with tears of joy. <break time="1s"/>
        They never went hungry again! <break time="1s"/>
        <audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/320775__rhodesmas__win-02.wav"></audio> <break time="1s"/>`
    }
};

/** @type {string[]} */
const STORIES_SUGGESTIONS = Object.values(exports.STORIES).map(s => s.title);
exports.STORIES_SUGGESTIONS = STORIES_SUGGESTIONS;

exports.NO_INPUT_SUGGESTIONS = [
    "I did not get that, you can choose between " + STORIES_SUGGESTIONS.toString(),
    "Please choose a story: " + STORIES_SUGGESTIONS.toString()
];

exports.NO_INPUT_SUGGESTIONS_END = [
    "I did not get that, Do you want to hear the story again, or hear another one?"
];

exports.AFTER_STORY_SUGGESTIONS = ['Again!', 'Another', 'Play another game'];

exports.CHOICES = {
    yes: 'yes',
    again: 'again',
    no: 'no'
};
