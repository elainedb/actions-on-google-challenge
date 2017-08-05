'use strict';

exports.SENTENCES_ANIMAL_SOUNDS = [
    "OK, here we go! Do you know which animal makes this sound?",
    "OK, let's play! Do you recognize this animal?",
    "Yeah! Can you guess which animal makes this sound?"
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