'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');

const INTENT_ID = 'auntie.easteregg.pokemon';
const CONTEXT_CHOOSE_GAME = "context_choose_game";
const DEFAULT_LIFESPAN = 5;

// pokemon entity
const ENTITY_POKEMON = "pokemon";

const ENTITY_PIKACHU = "pikachu";
const ENTITY_PICHU = "pichu";
const ENTITY_RAICHU = "raichu";
const ENTITY_RATTATA = "rattata";
const ENTITY_RRATICATE = "raticate";
const ENTITY_MARILL = "marill";
const ENTITY_AZUMARILL = "azumarill";

const ENTITY_MAGIKARP = "magikarp";

const ENTITY_BULBASAUR = "bulbasaur";
const ENTITY_SQUIRTLE = "squirtle";
const ENTITY_CHARMANDER = "charmander";
const ENTITY_CHARIZARD = "charizard";

const ENTITY_PIDGEY = "pidgey";
const ENTITY_PIDGEOTTO = "pidgetto";
const ENTITY_PIDGEOT = "pidgeot";
const ENTITY_PSYDUCK = "psyduck";
const ENTITY_GOLDUCK = "golduck";
const ENTITY_MURKROW = "murkrow";
const ENTITY_HOOTHOOT = "hoothoot";
const ENTITY_NOCTOWL = "noctowl";

const ENTITY_ARTICUNO = "articuno";
const ENTITY_MOLTRES = "articuno";
const ENTITY_ZAPDOS = "articuno";

const ENTITY_MEOWTH = "meowth";
const ENTITY_PERSIAN = "persian";
const ENTITY_MEW = "mew";
const ENTITY_MEWTWO = "mewtwo";

const ENTITY_GROWLITHE = "growlithe"
const ENTITY_ARCANINE = "arcanine";
const ENTITY_SNUBULL = "snubull";
const ENTITY_HOUNDOUR = "houndour";
const ENTITY_HOUNDOOM = "houndoom";

const ENTITY_PONYTA = "ponyta";
const ENTITY_RAPIDASH = "rapidash";

const ENTITY_EEVEE = "eevee";
const ENTITY_VULPIX = "vulpix";

const ENTITY_MAREEP = "mareep";
const ENTITY_FLAAFY = "flaafy";
const ENTITY_AMPHAROS = "ampharos";

const ENTITY_AIPOM = "aipom";
const ENTITY_MANKEY = "mankey";
const ENTITY_PRIMEAPE = "primeape";

const ENTITY_EKANS = "ekans";
const ENTITY_ARBOK = "arbok";

const ENTITY_TAUROS = "tauros";

const ENTITY_POLITOED = "politoed";

const ENTITY_GIRAFARIG = "giafarig";

const ENTITY_TEDDIURSA = "teddiursa";
const ENTITY_URSARING = "ursaring";

const ENTITY_SWINUB = "swinhub";

const ENTITY_PHANPY = "phanpy";
const ENTITY_DONPHAN = "donphan";

// pokemon answers

const SENTENCE_PIKACHU = "pikachu is the most famous pokemon in the world and is sacha's best loyal friend ! pika pika forever !";
const SENTENCE_PICHU = "Pichu is a social Pokémon known for its playful and mischievous demeanor. It is usually found in groups and often touch tails with other Pichu as a show of courage, creating a shower of sparks that can make them cry.";
const SENTENCE_RAICHU = "raichu is the third evolution of pichu. he evolves when he is exposed to a thunder stone. By collecting its psychic power in its tail, it is able to ride it like a surfboard and float in the air. While its cheek sacs are still used to store electricity, rubbing them releases a sweet aroma.";
const SENTENCE_RATTATA = "rattata is the most common pokemon on earth with his wingman. It is the only possible starter Pokémon in Pokémon Rumble.";
const SENTENCE_RATICATE = "Raticate is selective in what it eats, however, only eating fresh, high quality foods. Rumor has it that a certain high-class restaurant even exploits this selectivity, bringing Raticate along to buy ingredients and letting it taste test new dishes.";
const SENTENCE_MARILL = "marill is a kind of little water mouse with a blue bubble-like ball at the tip of its zigzagging black tail full of oil. The oil is lighter than water, and keeps Marill afloat in the water.";
const SENTENCE_AZUMARILL = "Azumarill has highly developed hearing that allows it to hear distances, even when it is underwater. By keeping still and listening closely, it can identity prey even in wild, fast-moving rivers. If Azumarill spots a drowning Pokémon, it will make a balloon out of air.";

const SENTENCE_MAGIKARP = "Magikarp is the utmost lovely and useless pokemon of the game, chocking that he become so powerfull after his transformation into Gyarados starting at level 20. !";

const SENTENCE_BULBASAUR = "Bulbasaur is one of three starter Pokémon of Kanto. He is a dual-type Grass/Poison Pokémon introduced in Generation one. Many Bulbasaur gather every year in a hidden garden in Kanto to evolve into Ivysaur in a ceremony led by a Venusaur.";
const SENTENCE_SQUIRTLE = "Squirtle is one of three starter Pokémon of Kanto. Some of them joined the Squirle Squad after being abandoned by their trainers.";
const SENTENCE_CHARMANDER = "Charmander is a Fire-type Pokémon, he is one of three starter Pokémon of Kanto. A fire burns at the tip of his slender tail. The flame can be used as an indication of Charmander's health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged.";
const SENTENCE_CHARIZARD = "Charizard is a dual-type Fire/Flying Pokémon. It is the final form of Charmander. It can Mega Evolve into two forms with specials items. Its fiery breath is capable of melting boulders, massive glaciers, and has been known to accidentally cause forest fires.";

const SENTENCE_PIDGEY = "Pidgey is the most common pokemon on earth with his large teeth friend. It is a docile Pokémon, and generally prefers to flee from its enemies rather than fight them.";
const SENTENCE_PIDGEOTTO = "pidgetto is pidgey evolution and start at level 18. He is a powerful flier capable of carrying prey several miles to its nest. It has amazing vision,";
const SENTENCE_PIDGEOT = "pidgeot is the third evolution of pidgey and start at level 36. This Pokémon is capable of flying faster than the speed of sound. Its plumage is often described as beautiful.";
const SENTENCE_PSYDUCK = "psyduck is a water type poekmon. This poor one is constantly stunned by its headache and is unable to think very clearly.";
const SENTENCE_GOLDUCK = "golduck evolves from Psyduck starting at level 33 and has the ability to give knowledge to its Trainer and fellow Pokémon through telepathy.";
const SENTENCE_MURKROW = "Murkrow has a fondness for anything sparkly, and it will steal things such as jewelry to bring it back to its nest. Its fondness for shiny objects go as far as fighting with other Pokémon that enjoy shiny objects to gain their stashes.";
const SENTENCE_HOOTHOOT = "Inside Hoothoot's body lies a special organ that senses Earth's rotation, allowing it to keep track of time. Every day at exactly the same time, a Hoothoot will begin hooting.";
const SENTENCE_NOCTOWL = "Noctowl is a nocturnal Pokémon. It has exceptional hearing and eyesight, can fly silently, and can turn its heads at a 180° angle to increase its intellect.";

const SENTENCE_ARTICUNO = "articuno is a dual-type Ice/Flying Legendary Pokémon, one of the three Legendary birds of Kanto. according to legend, it appears before doomed travelers lost in icy regions";
const SENTENCE_MOLTRES = "moltres is a dual-type Fire/Flying Legendary Pokémon, one of the three Legendary birds of Kanto. By dipping itself into the magma of an active volcano, this Pokémon can heal itself. It migrates to the south with the coming of spring, and is said to bring an early springtime to cold lands.";
const SENTENCE_ZAPDOS = "zapdos is a dual-type Electric/Flying Legendary Pokémon, one of the three Legendary birds of Kanto. When stricken by lightning, it gains power. Zapdos reportedly appears only during thunderstorms, and is said to live among thunderclouds.";

const SENTENCE_MEOWTH = "Meowth is one of the two main Pokémon in the series. He is one part of the team rocket with jesse and james";
const SENTENCE_PERSIAN = "persian is a feline normal type pokemon evolves from meowth at level 28. He is popular for its elegance, it is extremely difficult to raise as a pet due to its fickle and temperamental personality.";
const SENTENCE_MEW = "mew is a Psychic-type Mythical Pokémon incredibly adaptable, able to travel freely in the air or underwater.";
const SENTENCE_MEWTWO = "mewtwo is a Psychic-type Legendary Pokémon and was created after years of horrific gene splicing and DNA engineering experiments based on Mew. It is said to have the most savage heart among all Pokémon but it was later shown to be caring, protective, and even altruistic.";

const SENTENCE_GROWLITHE = "growlithe is a friendly and loyal Pokémon that will fearlessly defend its Trainer and territory from harm, even against larger, stronger enemies";
const SENTENCE_ARCANINE = "Arcanine is a fiercely brave and loyal Pokémon. It is capable of running 6,200 miles in 24 hours with a speed and grace reminiscent of flight.";
const SENTENCE_SNUBULL = "Snubbull possesses the ability to use keen sense of smell to track things down. Despite his fierce looking face, it is very playful and affectionate making it a popular companion among women.";
const SENTENCE_HOUNDOUR = "Houndour is an intelligent Pokémon that forms packs to hunt for prey, and shows unparalleled teamwork. it will not abandon a sick pack member. ";
const SENTENCE_HOUNDOOM = "In a Houndoom pack, the one with its horns raked sharply towards the back serves a leadership role. Its gut is full of toxins, which are used to create fire. This gives Houndoom's fire a foul odor and the wounds it inflicts will never heal.";

const SENTENCE_PONYTA = "Ponyta can control its flames so that its rider is not burned by them. Ponyta runs in fields and mountains all day";
const SENTENCE_RAPIDASH = "rapidash runs at about 150 mph, chasing everything that moves in hopes of racing it.";

const SENTENCE_EEVEE = "Eevee is said to have an irregularly shaped genetic structure that allows it to adapt to many different kinds of environments. Eventually, Eevee may evolve to better suit its surroundings.";
const SENTENCE_VULPIX = "Vulpix has a flame inside its body that never goes out, and is capable of manipulating fire to such precision as to create floating wisps of flame.";

const SENTENCE_MAREEP = "Mareep's wool, which grows continuously, stores electricity, rubbing together and building a static charge. Touching the wool when it is charged will result in a static shock.";
const SENTENCE_FLAAFY = "flaafy evolves from Mareep starting at level 15, Storing too much electricity caused Flaaffy to lose the wool over most of its body, but the bare, rubbery skin protects it from the electricity stored in its fleece.";
const SENTENCE_AMPHAROS = "ampharos is the final form of Mareep. The orb on its tail can shine so bright, that it can be seen from space. People have used the light as a beacon, or to send signals across the ocean.";

const SENTENCE_AIPOM = "Aipom is a monkey-like Pokémon with a three-fingered hand at the end of its tail. The tail is strong enough to anchor Aipom to a branch and suspend the rest of its body in the air, but also delicate enough to pick fruit and manipulate objects";
const SENTENCE_MANKEY = "Mankey's preferred food is chestnuts, although Mankey usually lacks the dexterity to peel them. Mankey will get agitated and rage after attempting to peel a chestnut's spiky shell. Additionally, it also appears to be fond of bananas.";
const SENTENCE_PRIMEAPE = "When Primeape is furious, its blood circulation is boosted. This makes its muscles stronger, but at the cost of some of its intelligence. It has shown some fondness for bananas.";

const SENTENCE_EKANS = "ekans is jesse companion received as a chūgen gift, By flicking its tongue out, it is able to detect danger and the scent of prey. Its jaw can detach to swallow large prey, but such a meal can make Ekans too heavy to move.";
const SENTENCE_ARBOK = "Arbok is territorial. It lashes out at intruders with long fangs tipped with deadly venom. With a vengeful nature, it will not give up a chase once it targets its prey or an opponent, no matter how far.";

const SENTENCE_TAUROS = "Tauros is a violent, rowdy Pokémon that whips itself into a frenzy using its three tails. Once it starts charging, it is unable to stop or change course until it hits something.";

const SENTENCE_POLITOED = "politoed evolves from Poliwhirl when traded holding a King's Rock. Politoed likes to expand its throat and sing. When three or more assemble, they sing in a chorus with a loud, bellowing voice.";

const SENTENCE_GIRAFARIG = "Girafarig's tail possesses a head of its own incapable of independent thinking and relies on outside stimuli. However it is quite usefell because the head is able to warn the Pokémon of danger if it is sleeping.";

const SENTENCE_TEDDIURSA = "Teddiursa uses Beedrill pollen and fruit to create its own honey. It will hide food stores throughout its territory before food becomes scarce in winter.";
const SENTENCE_URSARING = "Ursaring's sense of smell can distinguish any aroma, and as such it can find food buried deep underground or in streams.";

const SENTENCE_SWINUB = "Swinub favorite food is a type of mushroom that grows beneath dead grass, though it also eats Berries. When a Swinub finds an attractive smell, it will run desperately to find out the source of the aroma.";

const SENTENCE_PHANPY = "phanpy looks like a Dumbo's pokemon world ! To make its nest, it digs a vertical pit near the edge of a river.";
const SENTENCE_DONPHAN = "donphan is the evolution of phanpy, chocking that the little one became so big and strong ! Donphan has the ability to curl up into a ball and violently roll around like a wheel. These rolling tackles are strong enough to knock down a house. ";

// ??? maybe at end
const SENTENCE_ALMOST = "it's not the correct answer but you are right, they are from an animal reign !"

class Pokemon extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        // app.setContext(CONTEXT_CHOOSE_GAME, DEFAULT_LIFESPAN, {});
        app.tell(app.getArgument(ENTITY_POKEMON));

        switch (ENTITY_POKEMON) {

            // mouse
            case ENTITY_PIKACHU:
                app.tell(SENTENCE_PIKACHU);
                break;
            case ENTITY_PICHU:
                app.tell(SENTENCE_PICHU);
                break;
            case ENTITY_RAICHU:
                app.tell(SENTENCE_RAICHU);
                break;
            case ENTITY_RATTATA:
                app.tell(SENTENCE_RATTATA)
                break
            case ENTITY_RATTATAC:
                app.tell(SENTENCE_RATTATAC)
                break;
            case ENTITY_MARILL:
                app.tell(SENTENCE_MARILL)
                break;
            case ENTITY_AZUMARILL:
                app.tell(SENTENCE_AZUMARILL)
                break;

                // magikarp magikarp magikarp karp karp
            case ENTITY_MAGIKARP:
                app.tell(SENTENCE_MAGIKARP)
                break;

                // starter one
            case ENTITY_BULBASAUR:
                app.tell(SENTENCE_BULBASAUR)
                break;
            case ENTITY_SQUIRTLE:
                app.tell(SENTENCE_SQUIRTLE)
                break;
            case ENTITY_CHARMANDER:
                app.tell(SENTENCE_CHARMANDER)
                break;
            case ENTITY_CHARIZARD:
                app.tell(SENTENCE_CHARIZARD)
                break;

                // birds
            case ENTITY_PIDGEY:
                app.tell(SENTENCE_PIDGEY)
                break;
            case ENTITY_PIDGEOTTO:
                app.tell(SENTENCE_PIDGEOTTO)
                break;
            case ENTITY_PIDGEOT:
                app.tell(SENTENCE_PIDGEOT)
                break;
            case ENTITY_PSYDUCK:
                app.tell(SENTENCE_PSYDUCK)
                break;
            case ENTITY_GOLDUCK:
                app.tell(SENTENCE_GOLDUCK)
                break;
            case ENTITY_MURKROW:
                app.tell(SENTENCE_MURKROW)
                break;
            case ENTITY_HOOTHOOT:
                app.tell(SENTENCE_HOOTHOOT)
                break;
            case ENTITY_NOCTOWL:
                app.tell(SENTENCE_NOCTOWL)
                break;

                // legendary
            case ENTITY_ARTICUNO:
                app.tell(SENTENCE_ARTICUNO)
                break;
            case ENTITY_MOLTRES:
                app.tell(SENTENCE_MOLTRES)
                break;
            case ENTITY_ZAPDOS:
                app.tell(SENTENCE_ZAPDOS)
                break;

                // cats
            case ENTITY_MEOWTH:
                app.tell(SENTENCE_MEOWTH)
                break;
            case ENTITY_PERSIAN:
                app.tell(SENTENCE_PERSIAN)
                break;
            case ENTITY_MEW:
                app.tell(SENTENCE_MEW)
                break;
            case ENTITY_MEWTWO:
                app.tell(SENTENCE_MEWTWO)
                break;

                // dogs
            case ENTITY_GROWLITHE:
                app.tell(SENTENCE_GROWLITHE)
                break;
            case ENTITY_ARCANINE:
                app.tell(SENTENCE_ARCANINE)
                break;
            case ENTITY_SNUBULL:
                app.tell(SENTENCE_SNUBULL)
                break;
            case ENTITY_HOUNDOUR:
                app.tell(SENTENCE_HOUNDOUR)
                break;
            case ENTITY_HOUNDOOM:
                app.tell(SENTENCE_HOUNDOUR)
                break;

                // horse
            case ENTITY_PONYTA:
                app.tell(SENTENCE_PONYTA)
                break;
            case ENTITY_RAPIDASH:
                app.tell(SENTENCE_RAPIDASH)
                break;

                // fox
            case ENTITY_EEVEE:
                app.tell(SENTENCE_EEVEE)
                break;
            case ENTITY_VULPIX:
                app.tell(SENTENCE_VULPIX)
                break;

                // pokemouton
            case ENTITY_MAREEP:
                app.tell(SENTENCE_MAREEP)
                break;
            case ENTITY_FLAAFY:
                app.tell(SENTENCE_FLAAFY)
                break;
            case ENTITY_AMPHEROS:
                app.tell(SENTENCE_AMPHEROS)
                break;

                // monkey
            case ENTITY_AIPOM:
                app.tell(SENTENCE_AIPOM)
                break;
            case ENTITY_MANKEY:
                app.tell(SENTENCE_MANKEY)
                break;
            case ENTITY_PRIMEAPE:
                app.tell(SENTENCE_PRIMEAPE)
                break;

                // snake
            case ENTITY_EKANS:
                app.tell(SENTENCE_EKANS)
                break;
            case ENTITY_ARBOK:
                app.tell(SENTENCE_ARBOK)
                break;

                // cow ? bull
            case ENTITY_TAUROS:
                app.tell(SENTENCE_TAUROS)
                break;

                // frog
            case ENTITY_POLITOED:
                app.tell(SENTENCE_POLITOED)
                break;

                // no sound once the became adult, they "mugit" when they are young 
            case ENTITY_GIRAFARIG:
                app.tell(SENTENCE_GIRAFARIG)
                break;

            case ENTITY_TEDDIURSA:
                app.tell(SENTENCE_TEDDIURSA)
                break;
            case ENTITY_URSARING:
                app.tell(SENTENCE_URSARING)
                break;

            case ENTITY_SWINUB:
                app.tell(SENTENCE_SWINUB)
                break;

            case ENTITY_PHANPY:
                app.tell(SENTENCE_PHANPY)
                break;
            case ENTITY_DONPHAN:
                app.tell(SENTENCE_DONPHAN)
                break;
        }
    }
}

module.exports = Pokemon;