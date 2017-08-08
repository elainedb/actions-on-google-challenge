'use strict';

exports.SENTENCES_ANIMAL_SOUNDS = [
    "Do you know which animal makes this sound?",
    "Do you recognize this animal?",
    "Can you guess which animal makes this sound?"
];

const ENTITY_DOG = "dog";
const ENTITY_CAT = "cat";
const ENTITY_MONKEY = "monkey";
const ENTITY_ELEPHANT = "elephant";
const ENTITY_PIGEON = "pigeon";
const ENTITY_BEAR = "bear";
const ENTITY_CAMEL = "camel";
const ENTITY_CHICKEN = "chicken";
const ENTITY_CICADA = "cicada";
const ENTITY_COW = "cow";
const ENTITY_COYOTE = "coyote";
const ENTITY_CRICKET = "cricket";
const ENTITY_CROW = "crow";
const ENTITY_CUCKOO = "cuckoo";
const ENTITY_DEER = "deer";
const ENTITY_DOLPHIN = "dolphin";
const ENTITY_DONKEY = "donkey";
const ENTITY_DUCK = "duck";
const ENTITY_EAGLE = "eagle";
const ENTITY_FALCON = "falcon";
const ENTITY_FROG = "frog";
const ENTITY_GOAT = "goat";
const ENTITY_GOOSE = "goose";
const ENTITY_GUINEAPIG = "guineapig";
const ENTITY_HORSE = "horse";
const ENTITY_HYENA = "hyena";
const ENTITY_JAGUAR = "jaguar";
const ENTITY_LEOPARD = "leopard";
const ENTITY_LION = "lion";
const ENTITY_MOOSE = "moose";
const ENTITY_ORCA = "orca";
const ENTITY_OWL = "owl";
const ENTITY_PARROT = "parrot";
const ENTITY_PEACOCK = "peacock";
const ENTITY_PIG = "pig";
const ENTITY_PENGUIN = "penguin";
const ENTITY_PUMA = "puma";
const ENTITY_ROOSTER = "rooster";
const ENTITY_SEAGULL = "seagull";
const ENTITY_SEAL = "seal";
const ENTITY_SHEEP = "sheep";
const ENTITY_TIGER = "tiger";
const ENTITY_TURKEY = "turkey";
const ENTITY_WHALE = "whale";
const ENTITY_WOLF = "wolf";

const STORAGE_PREFIX = 'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/animals/';
const STORAGE_PREFIX_IMG = 'https://storage.googleapis.com/project-2252662783422070807.appspot.com/images/';
const WIKI_URL = 'https://en.wikipedia.org/wiki/';

exports.ANIMALS = new Set([ENTITY_DOG, ENTITY_CAT, ENTITY_MONKEY, ENTITY_ELEPHANT, ENTITY_PIGEON,
    ENTITY_BEAR, ENTITY_CAMEL, ENTITY_CHICKEN, ENTITY_CICADA, ENTITY_COYOTE,
    ENTITY_CRICKET, ENTITY_CROW, ENTITY_CUCKOO, ENTITY_DEER, ENTITY_DOLPHIN,
    ENTITY_DONKEY, ENTITY_DUCK, ENTITY_EAGLE, ENTITY_FALCON, ENTITY_FROG,
    ENTITY_GOOSE, ENTITY_GUINEAPIG, ENTITY_HORSE, ENTITY_HYENA, ENTITY_JAGUAR,
    ENTITY_LEOPARD, ENTITY_LION, ENTITY_MOOSE, ENTITY_ORCA, ENTITY_OWL,
    ENTITY_PARROT, ENTITY_PEACOCK, ENTITY_PIG, ENTITY_PENGUIN, ENTITY_PUMA,
    ENTITY_ROOSTER, ENTITY_SEAGULL, ENTITY_SEAL, ENTITY_SHEEP, ENTITY_TIGER,
    ENTITY_TURKEY, ENTITY_WHALE, ENTITY_WOLF]);

/**
 * name: string,
 * src: {
 *  imgs: string[],
 *  sounds: string[]
 * }
 * hints: [string, string, string]
 */
class AnimalModel {
    /**
     * @param {string} name 
     * @param {string} img 
     * @param {string} sound 
     * @param {[string, string, string]} hints
     * @param {string} info
     */
    constructor(name, img, sound, hints, info) {
        sound = name === ENTITY_PENGUIN ? STORAGE_PREFIX + name + '/' + sound : STORAGE_PREFIX + 'pinguin' + '/' + sound;
        img = img || '001.jpg';
        info = info || name.charAt(0).toUpperCase() + name.slice(1);

        this.name = name;
        this.src = {
            imgs: STORAGE_PREFIX_IMG + name + '/' + name + '001.png',
            sound:  sound
        };
        this.hints = hints;
        this.info = WIKI_URL + info;
    }
}

exports.ANIMALS_OBJECTS = [
    new AnimalModel(ENTITY_DOG, null, 'bark.mp3', []),
    new AnimalModel(ENTITY_CAT, null, 'cat1.mp3', []),
    new AnimalModel(ENTITY_MONKEY, null, 'monkey1.mp3', []),
    new AnimalModel(ENTITY_ELEPHANT, null, 'elephant1.mp3', []),
    new AnimalModel(ENTITY_PIGEON, null, 'pigeon1.mp3', []),
    new AnimalModel(ENTITY_BEAR, null, 'bear1.mp3', []),
    new AnimalModel(ENTITY_CAMEL, null, 'camel1.mp3', []),
    new AnimalModel(ENTITY_CHICKEN, null, 'chicken1.mp3', []),
    new AnimalModel(ENTITY_CICADA, null, 'cicada1.mp3', []),
    new AnimalModel(ENTITY_COYOTE, null, 'coyote1.mp3', []),
    new AnimalModel(ENTITY_CRICKET, null, 'cricket1.mp3', []),
    new AnimalModel(ENTITY_CROW, null, 'crow1.mp3', []),
    new AnimalModel(ENTITY_CUCKOO, null, '/cuckoo1.mp3', []),
    new AnimalModel(ENTITY_DEER, null, '/deer1.mp3', []),
    new AnimalModel(ENTITY_DOLPHIN, null, '/dolphin1.mp3', []),
    new AnimalModel(ENTITY_DONKEY, null, '/donkey1.mp3', []),
    new AnimalModel(ENTITY_DUCK, null, '/duck1.mp3', []),
    new AnimalModel(ENTITY_EAGLE, null, '/eagle1.mp3', []),
    new AnimalModel(ENTITY_FALCON, null, '/falcon1.mp3', []),
    new AnimalModel(ENTITY_FROG, null, '/frog1.mp3', []),
    new AnimalModel(ENTITY_GOOSE, null, '/goose1.mp3', []),
    new AnimalModel(ENTITY_GUINEAPIG, null, '/guineapig1.mp3', []),
    new AnimalModel(ENTITY_HORSE, null, '/horse1.mp3', []),
    new AnimalModel(ENTITY_HYENA, null, '/hyena1.mp3', []),
    new AnimalModel(ENTITY_JAGUAR, null, '/jaguar1.mp3', []),
    new AnimalModel(ENTITY_LEOPARD, null, '/leopard1.mp3', []),
    new AnimalModel(ENTITY_LION, null, '/lion1.mp3', []),
    new AnimalModel(ENTITY_MOOSE, null, '/moose1.mp3', []),
    new AnimalModel(ENTITY_ORCA, null, '/orca1.mp3', []),
    new AnimalModel(ENTITY_OWL, null, '/owl1.mp3', []),
    new AnimalModel(ENTITY_PARROT, null, '/parrot1.mp3', []),
    new AnimalModel(ENTITY_PEACOCK, null, '/peacock1.mp3', []),
    new AnimalModel(ENTITY_PIG, null, '/pig1.mp3', []),
    new AnimalModel(ENTITY_PENGUIN, null, + '/penguin1.mp3', []),
    new AnimalModel(ENTITY_PUMA, null, '/puma1.mp3', [], 'Puma_(genus)'),
    new AnimalModel(ENTITY_ROOSTER, null, '/rooster1.mp3', []),
    new AnimalModel(ENTITY_SEAGULL, null, '/seagull1.mp3', []),
    new AnimalModel(ENTITY_SEAL, null, '/seal1.mp3', []),
    new AnimalModel(ENTITY_SHEEP, null, '/sheep1.mp3', []),
    new AnimalModel(ENTITY_TIGER, null, '/tiger1.mp3', []),
    new AnimalModel(ENTITY_TURKEY, null, '/turkey1.mp3', [], 'Turkey_(bird)'),
    new AnimalModel(ENTITY_WHALE, null, '/whale1.mp3', []),
    new AnimalModel(ENTITY_WOLF, null, '/wolf1.mp3' []),
],

exports.ANIMAL_SOUNDS_SRC = new Set([
    STORAGE_PREFIX + ENTITY_DOG + '/bark.mp3',
    STORAGE_PREFIX + ENTITY_CAT + '/cat1.mp3',
    STORAGE_PREFIX + ENTITY_MONKEY + '/monkey1.mp3',
    STORAGE_PREFIX + ENTITY_ELEPHANT + '/elephant1.mp3',
    STORAGE_PREFIX + ENTITY_PIGEON + '/pigeon1.mp3',
    STORAGE_PREFIX + ENTITY_BEAR + '/bear1.mp3',
    STORAGE_PREFIX + ENTITY_CAMEL + '/camel1.mp3',
    STORAGE_PREFIX + ENTITY_CHICKEN + '/chicken1.mp3',
    STORAGE_PREFIX + ENTITY_CICADA + '/cicada1.mp3',
    STORAGE_PREFIX + ENTITY_COYOTE + '/coyote1.mp3',
    STORAGE_PREFIX + ENTITY_CRICKET + '/cricket1.mp3',
    STORAGE_PREFIX + ENTITY_CROW + '/crow1.mp3',
    STORAGE_PREFIX + ENTITY_CUCKOO + '/cuckoo1.mp3',
    STORAGE_PREFIX + ENTITY_DEER + '/deer1.mp3',
    STORAGE_PREFIX + ENTITY_DOLPHIN + '/dolphin1.mp3',
    STORAGE_PREFIX + ENTITY_DONKEY + '/donkey1.mp3',
    STORAGE_PREFIX + ENTITY_DUCK + '/duck1.mp3',
    STORAGE_PREFIX + ENTITY_EAGLE + '/eagle1.mp3',
    STORAGE_PREFIX + ENTITY_FALCON + '/falcon1.mp3',
    STORAGE_PREFIX + ENTITY_FROG + '/frog1.mp3',
    STORAGE_PREFIX + ENTITY_GOOSE + '/goose1.mp3',
    STORAGE_PREFIX + ENTITY_GUINEAPIG + '/guineapig1.mp3',
    STORAGE_PREFIX + ENTITY_HORSE + '/horse1.mp3',
    STORAGE_PREFIX + ENTITY_HYENA + '/hyena1.mp3',
    STORAGE_PREFIX + ENTITY_JAGUAR + '/jaguar1.mp3',
    STORAGE_PREFIX + ENTITY_LEOPARD + '/leopard1.mp3',
    STORAGE_PREFIX + ENTITY_LION + '/lion1.mp3',
    STORAGE_PREFIX + ENTITY_MOOSE + '/moose1.mp3',
    STORAGE_PREFIX + ENTITY_ORCA + '/orca1.mp3',
    STORAGE_PREFIX + ENTITY_OWL + '/owl1.mp3',
    STORAGE_PREFIX + ENTITY_PARROT + '/parrot1.mp3',
    STORAGE_PREFIX + ENTITY_PEACOCK + '/peacock1.mp3',
    STORAGE_PREFIX + ENTITY_PIG + '/pig1.mp3',
    STORAGE_PREFIX + 'pinguin' + '/penguin1.mp3',
    STORAGE_PREFIX + ENTITY_PUMA + '/puma1.mp3',
    STORAGE_PREFIX + ENTITY_ROOSTER + '/rooster1.mp3',
    STORAGE_PREFIX + ENTITY_SEAGULL + '/seagull1.mp3',
    STORAGE_PREFIX + ENTITY_SEAL + '/seal1.mp3',
    STORAGE_PREFIX + ENTITY_SHEEP + '/sheep1.mp3',
    STORAGE_PREFIX + ENTITY_TIGER + '/tiger1.mp3',
    STORAGE_PREFIX + ENTITY_TURKEY + '/turkey1.mp3',
    STORAGE_PREFIX + ENTITY_WHALE + '/whale1.mp3',
    STORAGE_PREFIX + ENTITY_WOLF + '/wolf1.mp3'
]);