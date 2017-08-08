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

exports.ANIMALS = new Set([ENTITY_DOG, ENTITY_CAT, ENTITY_MONKEY, ENTITY_ELEPHANT, ENTITY_PIGEON,
    ENTITY_BEAR, ENTITY_CAMEL, ENTITY_CHICKEN, ENTITY_CICADA, ENTITY_COYOTE,
    ENTITY_CRICKET, ENTITY_CROW, ENTITY_CUCKOO, ENTITY_DEER, ENTITY_DOLPHIN,
    ENTITY_DONKEY, ENTITY_DUCK, ENTITY_EAGLE, ENTITY_FALCON, ENTITY_FROG,
    ENTITY_GOOSE, ENTITY_GUINEAPIG, ENTITY_HORSE, ENTITY_HYENA, ENTITY_JAGUAR,
    ENTITY_LEOPARD, ENTITY_LION, ENTITY_MOOSE, ENTITY_ORCA, ENTITY_OWL,
    ENTITY_PARROT, ENTITY_PEACOCK, ENTITY_PIG, ENTITY_PENGUIN, ENTITY_PUMA,
    ENTITY_ROOSTER, ENTITY_SEAGULL, ENTITY_SEAL, ENTITY_SHEEP, ENTITY_TIGER,
    ENTITY_TURKEY, ENTITY_WHALE, ENTITY_WOLF]);

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

exports.ANIMAL_IMG_SRC = new Set([
    STORAGE_PREFIX_IMG + ENTITY_DOG + '/' + ENTITY_DOG + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_CAT + '/' + ENTITY_CAT + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_MONKEY + '/' + ENTITY_MONKEY + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_ELEPHANT + '/' + ENTITY_ELEPHANT + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_PIGEON + '/' + ENTITY_PIGEON + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_BEAR + '/' + ENTITY_BEAR + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_CAMEL + '/' + ENTITY_CAMEL + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_CHICKEN + '/' + ENTITY_CHICKEN + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_CICADA + '/' + ENTITY_CICADA + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_COYOTE + '/' + ENTITY_COYOTE + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_CRICKET + '/' + ENTITY_CRICKET + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_CROW + '/' + ENTITY_CROW + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_CUCKOO + '/' + ENTITY_CUCKOO + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_DEER + '/' + ENTITY_DEER + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_DOLPHIN + '/' + ENTITY_DOLPHIN + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_DONKEY + '/' + ENTITY_DONKEY + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_DUCK + '/' + ENTITY_DUCK + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_EAGLE + '/' + ENTITY_EAGLE + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_FALCON + '/' + ENTITY_FALCON + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_FROG + '/' + ENTITY_FROG + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_GOOSE + '/' + ENTITY_GOOSE + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_GUINEAPIG + '/' + ENTITY_GUINEAPIG + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_HORSE + '/' + ENTITY_HORSE + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_HYENA + '/' + ENTITY_HYENA + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_JAGUAR + '/' + ENTITY_JAGUAR + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_LEOPARD + '/' + ENTITY_LEOPARD + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_LION + '/' + ENTITY_LION + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_MOOSE + '/' + ENTITY_MOOSE + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_ORCA + '/' + ENTITY_ORCA + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_OWL + '/' + ENTITY_OWL + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_PARROT + '/' + ENTITY_PARROT + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_PEACOCK + '/' + ENTITY_PEACOCK + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_PIG + '/' + ENTITY_PIG + '001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_PENGUIN + '/' + ENTITY_PENGUIN + '/001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_PUMA + '/' + ENTITY_PUMA + '/001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_ROOSTER + '/' + ENTITY_ROOSTER + '/001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_SEAGULL + '/' + ENTITY_SEAGULL + '/001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_SEAL + '/' + ENTITY_SEAL + '/001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_SHEEP + '/' + ENTITY_SHEEP + '/001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_TIGER + '/' + ENTITY_TIGER + '/001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_TURKEY + '/' + ENTITY_TURKEY + '/001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_WHALE + '/' + ENTITY_WHALE + '/001.jpg',
    STORAGE_PREFIX_IMG + ENTITY_WOLF + '/' + ENTITY_WOLF + '/001.jpg'
]);

exports.ANIMAL_INFO_URL = new Set([
    'https://en.wikipedia.org/wiki/Dog',
    'https://en.wikipedia.org/wiki/Cat',
    'https://en.wikipedia.org/wiki/Monkey',
    'https://en.wikipedia.org/wiki/Elephant',
    'https://en.wikipedia.org/wiki/Pigeon',
    'https://en.wikipedia.org/wiki/Bear',
    'https://en.wikipedia.org/wiki/Camel',
    'https://en.wikipedia.org/wiki/Chicken',
    'https://en.wikipedia.org/wiki/Cicada',
    'https://en.wikipedia.org/wiki/Coyote',
    'https://en.wikipedia.org/wiki/Cricket',
    'https://en.wikipedia.org/wiki/Crow',
    'https://en.wikipedia.org/wiki/Cuckoo',
    'https://en.wikipedia.org/wiki/Deer',
    'https://en.wikipedia.org/wiki/Dolphin',
    'https://en.wikipedia.org/wiki/Donkey',
    'https://en.wikipedia.org/wiki/Duck',
    'https://en.wikipedia.org/wiki/Eagle',
    'https://en.wikipedia.org/wiki/Falcon',
    'https://en.wikipedia.org/wiki/Frog',
    'https://en.wikipedia.org/wiki/Goose',
    'https://en.wikipedia.org/wiki/Guineapig',
    'https://en.wikipedia.org/wiki/Horse',
    'https://en.wikipedia.org/wiki/Hyena',
    'https://en.wikipedia.org/wiki/Jaguar',
    'https://en.wikipedia.org/wiki/Leopard',
    'https://en.wikipedia.org/wiki/Lion',
    'https://en.wikipedia.org/wiki/Monkey',
    'https://en.wikipedia.org/wiki/Moose',
    'https://en.wikipedia.org/wiki/Orca',
    'https://en.wikipedia.org/wiki/Owl',
    'https://en.wikipedia.org/wiki/Parrot',
    'https://en.wikipedia.org/wiki/Peacock',
    'https://en.wikipedia.org/wiki/Penguin',
    'https://en.wikipedia.org/wiki/Pig',
    'https://en.wikipedia.org/wiki/Pigeon',
    'https://en.wikipedia.org/wiki/Puma_(genus)',
    'https://en.wikipedia.org/wiki/Rooster',
    'https://en.wikipedia.org/wiki/Seagull',
    'https://en.wikipedia.org/wiki/Pinniped',
    'https://en.wikipedia.org/wiki/Sheep',
    'https://en.wikipedia.org/wiki/Tiger',
    'https://en.wikipedia.org/wiki/Turkey_(bird)',
    'https://en.wikipedia.org/wiki/Whale',
    'https://en.wikipedia.org/wiki/Wolf'
]);