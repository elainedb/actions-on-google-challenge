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

/**
 * name: string,
 * src: {
 *  img: string,
 *  sound: string
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
        sound = name !== ENTITY_PENGUIN ? STORAGE_PREFIX + name + '/' + sound : STORAGE_PREFIX + 'pinguin' + '/' + sound;
        img = img || '001.jpg';
        info = info || name.charAt(0) + name.slice(1);

        this.name = name;
        this.src = {
            img: STORAGE_PREFIX_IMG + name + '/' + name + '001.png',
            sound:  sound
        };
        this.hints = hints;
        this.info = WIKI_URL + info;
    }

    toString() {
        return this.name;
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
    new AnimalModel(ENTITY_CUCKOO, null, 'cuckoo1.mp3', []),
    new AnimalModel(ENTITY_DEER, null, 'deer1.mp3', []),
    new AnimalModel(ENTITY_DOLPHIN, null, 'dolphin1.mp3', []),
    new AnimalModel(ENTITY_DONKEY, null, 'donkey1.mp3', []),
    new AnimalModel(ENTITY_DUCK, null, 'duck1.mp3', []),
    new AnimalModel(ENTITY_EAGLE, null, 'eagle1.mp3', []),
    new AnimalModel(ENTITY_FALCON, null, 'falcon1.mp3', []),
    new AnimalModel(ENTITY_FROG, null, 'frog1.mp3', []),
    new AnimalModel(ENTITY_GOOSE, null, 'goose1.mp3', []),
    new AnimalModel(ENTITY_GUINEAPIG, null, 'guineapig1.mp3', []),
    new AnimalModel(ENTITY_HORSE, null, 'horse1.mp3', []),
    new AnimalModel(ENTITY_HYENA, null, 'hyena1.mp3', []),
    new AnimalModel(ENTITY_JAGUAR, null, 'jaguar1.mp3', []),
    new AnimalModel(ENTITY_LEOPARD, null, 'leopard1.mp3', []),
    new AnimalModel(ENTITY_LION, null, 'lion1.mp3', []),
    new AnimalModel(ENTITY_MOOSE, null, 'moose1.mp3', []),
    new AnimalModel(ENTITY_ORCA, null, 'orca1.mp3', []),
    new AnimalModel(ENTITY_OWL, null, 'owl1.mp3', []),
    new AnimalModel(ENTITY_PARROT, null, 'parrot1.mp3', []),
    new AnimalModel(ENTITY_PEACOCK, null, 'peacock1.mp3', []),
    new AnimalModel(ENTITY_PIG, null, 'pig1.mp3', []),
    new AnimalModel(ENTITY_PENGUIN, null, 'penguin1.mp3', []),
    new AnimalModel(ENTITY_PUMA, null, 'puma1.mp3', [], 'Puma_(genus)'),
    new AnimalModel(ENTITY_ROOSTER, null, 'rooster1.mp3', []),
    new AnimalModel(ENTITY_SEAGULL, null, 'seagull1.mp3', []),
    new AnimalModel(ENTITY_SEAL, null, 'seal1.mp3', [], 'Pinniped'),
    new AnimalModel(ENTITY_SHEEP, null, 'sheep1.mp3', []),
    new AnimalModel(ENTITY_TIGER, null, 'tiger1.mp3', []),
    new AnimalModel(ENTITY_TURKEY, null, 'turkey1.mp3', [], 'Turkey_(bird)'),
    new AnimalModel(ENTITY_WHALE, null, 'whale1.mp3', []),
    new AnimalModel(ENTITY_WOLF, null, 'wolf1.mp3', []),
];