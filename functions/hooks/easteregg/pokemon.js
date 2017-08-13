'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');

const INTENT_ID = 'intent.auntie.easteregg.pokemon';
const CONTEXT_CHOOSE_GAME = "context_choose_game";
const DEFAULT_LIFESPAN = 5;

// pokemon entity
const ENTITY_POKEMON = "pokemon";

const ENTITY_PIKACHU = "pikachu";
const ENTITY_PICHU = "pichu";
const ENTITY_RAICHU = "raichu";
const ENTITY_RATTATA = "rattata";
const ENTITY_RATICATE = "raticate";
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
const ENTITY_MOLTRES = "moltres";
const ENTITY_ZAPDOS = "zapdos";

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

const ENTITY_GIRAFARIG = "girafarig";

const ENTITY_TEDDIURSA = "teddiursa";
const ENTITY_URSARING = "ursaring";

const ENTITY_SWINUB = "swinub";

const ENTITY_PHANPY = "phanpy";
const ENTITY_DONPHAN = "donphan";

// pokemon answers

const SENTENCE_PIKACHU = `<speak><sub alias="peeka peeka!">Pika Pika!</sub> Unfortunally Pikachu is road tripping around the world with Ash and can not be there, let's try one more time!</speak>`
const SENTENCE_PICHU = "Pichu has been grounded and is actually having a bath with his mom and so it's not the expected answer, let's try again!";
const SENTENCE_RAICHU = "Raichu can not talk because he is providing electricity to his little brother to warm his bath, so let's try again!";

const SENTENCE_RATTATA = "Rattata is dreaming of trying to fly with his winged friend instead of collecting raspberries for his father. So no, it is not him!";
const SENTENCE_RATICATE = "Raticate is in the kitchen awaiting for raspberry, trying to create a new dish for his wife for their wedding anniversary, so it's not him!";

const SENTENCE_MARILL = "Marill dabbles with his brothers and sisters in the neighboring lake in secret instead of doing his homework... so it can not be him!";
const SENTENCE_AZUMARILL = "Azumarill is seeking his children, wondering where they are instead of doing their homeworks. try an other answer!";

const SENTENCE_MAGIKARP = "Magikarp, my favorite useless pokemon of the world... Right now he's looking for a pond to swim, so this is not his cry. Try another answer!";

const SENTENCE_BULBASAUR = "Bulbasaur is gardening at the bottom of a garden with a friend and it seems that something goes wrong. try another answer!";
const SENTENCE_SQUIRTLE = "Squirtle is not here, he has joined the Squirtle Squad. He is probably writing graffiti and swaggering with his bros at this time. let's try again!";
const SENTENCE_CHARMANDER = "Charmander is with his friend at the bottom of the garden... it seems that they are starting a barbecue or something like that, so let's try another answer!";
const SENTENCE_CHARIZARD = "Right, he is actually screaming at the bottom of the garden, I don't know why. But Charizard doesn't sound like that, so let's try again!";

const SENTENCE_PIDGEY = "Pidgey is trying desperately to awake his friend because if he doesn't bring raspberries to his daddy he will be grounded, so let's try another shot!";
const SENTENCE_PIDGEOTTO = "Pidgetto is having a laught watching his little neighbours set a fire to a wheelbarrow, so let's try again!";
const SENTENCE_PIDGEOT = "Pidgeot flew into his neighbor's garden for a wheelbarrow story... I don't know exactly but it can not be him, so let's try again!";

const SENTENCE_PSYDUCK = "Psyduck is missing, he escaped again from his owner and surely is trying to learn how to swim somewhere we don't know where, so let's try another answer!";
const SENTENCE_GOLDUCK = "Golduck is trying to talk to come back to psyduck through telepathy but it looks like that psyduck gave him a headache, so let's try again!";
const SENTENCE_MURKROW = "Murkrow is actually grounded in his room, he tried to rob a jewelry. This little boy has never been able to resist a brilliant object, so it is not him!";

const SENTENCE_HOOTHOOT = "Hoothoot has embarked on the music, he is currently rehearsing in his room. let's try again!";
const SENTENCE_NOCTOWL = "Noctowl listens to hoothoot music through the door and is too busy wondering if he should encourage or stop him. so let's try again!";

const SENTENCE_ARTICUNO = "Articuno has gone on tour around the world with his two best friends to the delight of their fans, so let's try again!";
const SENTENCE_MOLTRES = "Moltres has gone on tour around the world with his two best friends to the delight of their fasn, so it is not the correct answer";
const SENTENCE_ZAPDOS = "Zapdos has gone on tour around the world with his two best friends to the delight of their fans, so let's try again!";

const SENTENCE_MEOWTH = "Meowth is in a holiday camp trying to make friends with two humans and other pokemon, let's try one more time! ";
const SENTENCE_PERSIAN = "Persian is enjoying his free time without no one to bother him, so it is not the good answer, let's try again!";
const SENTENCE_MEW = "Mew is daydreaming somewhere beetween water and air, we don't know when he is coming back home, so it is not him, let's try again!";
const SENTENCE_MEWTWO = "Mewtwo is chasing after mew because mew is the only one who can calm his fierce heart, by bringing him back to himself, so let's try another one!";

const SENTENCE_GROWLITHE = "Growlithe has gone hiking for the first time with his brother and his friends, so it can not be him, let's try again!";
const SENTENCE_ARCANINE = "Arcanine is leading a hike with friends and family all around the world for months, so let's try again!";
const SENTENCE_SNUBULL = "Snubbull is shopping with his trainer to find a new little dress, so it is not the good answer, let's try again";
const SENTENCE_HOUNDOUR = "Houndour is gone for a hike with friend for a long time, he packed half the house afraid of missing something, so it's not the right answer, let's try again!";
const SENTENCE_HOUNDOOM = "Houndoom has gone with friends for a hike, afraid that his little brother missed something in his package and panicked for nothing, so let's try another answer!";

const SENTENCE_PONYTA = "Ponyta is running in fields and mountains all day, trying to be as fast as his big brother! It's not to good answer let's try again!";
const SENTENCE_RAPIDASH = "Rapidash is training his little brother to go faster, as he can run faster than the storm, so it cannot be him let's try again!";

const SENTENCE_EEVEE = "Eevee is outside, trying to find his own personality by finding what he likes with the help of a friend, so let's try again!";
const SENTENCE_VULPIX = "Vulpix is outside, trying to convince a friend to become like him, so they can be brother of fire, so let's try again!";

const SENTENCE_MAREEP = "Mareep is watching his big brother having his first shearing... He is too impressed to cry so let's try again!";
const SENTENCE_FLAAFY = "Flaafy is having his first lost of wool, trying to negociate to not lose everything, so it is not him. let's try again!";
const SENTENCE_AMPHAROS = "Ampharos is too busy shearing his little brother and paused sending signals across the ocean in the right way, so let's try one more time!";

const SENTENCE_AIPOM = "Aipom is practicing peeling pomegranates so he can eat more at the same time! It's not him, try again!";
const SENTENCE_MANKEY = "Mankey is trying to peel a chestnut but I can hear him getting nervous, so let's try another answer!";
const SENTENCE_PRIMEAPE = "When Primeape is furious, its blood circulation is boosted. This makes its muscles stronger, but at the cost of some of its intelligence. It has shown some fondness for bananas.";

const SENTENCE_EKANS = "Ekans is in holiday camp, making friends with other pokemon and some humans, apparently they are starting a band, so let's try one more time!";
const SENTENCE_ARBOK = "Arbok is too territorial, he went to look for hikers who would walk on his land, so it is not the right answer let's try again!";

const SENTENCE_TAUROS = "Tauros trains to be faster and more efficient with its three tails, so it's not him, let's try again!";

const SENTENCE_POLITOED = "Politoed has joined the King's Rock band and sings with a loud, bellowing voice at the other side of the planet, so it can not be him, let's try again!";

const SENTENCE_GIRAFARIG = "Girafarig's tail's head is busy calming down Mankey while Girafarig real head is picking chestnuts for the same reason, so let's try another one!";

const SENTENCE_TEDDIURSA = "Teddiursa is using Beedrill pollen and fruit to create its own honey so it is not scarce this winter. It's not the correct answer let's try again!";
const SENTENCE_URSARING = "Ursaring is helping Teddiursa make honey for the winter, so it's not the good answer, let's try again!";

const SENTENCE_SWINUB = "Swinub is gormandizing somewhere in the wood with his favorite mushroom that grow beneath dead grass, so it's not the correct answer, let's try again!";

const SENTENCE_PHANPY = "Phanpy waddles in the river playing with water and his trunk to the great displeasure of his papa, so let's try one more time!";
const SENTENCE_DONPHAN = "Donphan is trying to teach his son to curl up into a ball which seems more likely to play than learn, so let's try again!";

class Pokemon extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        // app.setContext(CONTEXT_CHOOSE_GAME, DEFAULT_LIFESPAN, {});
        // app.tell(app.getArgument(ENTITY_POKEMON));

        switch (app.getArgument(ENTITY_POKEMON)) {

            // mouse
            case ENTITY_PIKACHU:
                app.ask(SENTENCE_PIKACHU);
                break;
            case ENTITY_PICHU:
                app.ask(SENTENCE_PICHU);
                break;
            case ENTITY_RAICHU:
                app.ask(SENTENCE_RAICHU);
                break;
            case ENTITY_RATTATA:
                app.ask(SENTENCE_RATTATA)
                break
            case ENTITY_RATICATE:
                app.ask(SENTENCE_RATICATE)
                break;
            case ENTITY_MARILL:
                app.ask(SENTENCE_MARILL)
                break;
            case ENTITY_AZUMARILL:
                app.ask(SENTENCE_AZUMARILL)
                break;

                // magikarp magikarp magikarp karp karp
            case ENTITY_MAGIKARP:
                app.ask(SENTENCE_MAGIKARP)
                break;

                // starter one
            case ENTITY_BULBASAUR:
                app.ask(SENTENCE_BULBASAUR)
                break;
            case ENTITY_SQUIRTLE:
                app.ask(SENTENCE_SQUIRTLE)
                break;
            case ENTITY_CHARMANDER:
                app.ask(SENTENCE_CHARMANDER)
                break;
            case ENTITY_CHARIZARD:
                app.ask(SENTENCE_CHARIZARD)
                break;

                // birds
            case ENTITY_PIDGEY:
                app.ask(SENTENCE_PIDGEY)
                break;
            case ENTITY_PIDGEOTTO:
                app.ask(SENTENCE_PIDGEOTTO)
                break;
            case ENTITY_PIDGEOT:
                app.ask(SENTENCE_PIDGEOT)
                break;
            case ENTITY_PSYDUCK:
                app.ask(SENTENCE_PSYDUCK)
                break;
            case ENTITY_GOLDUCK:
                app.ask(SENTENCE_GOLDUCK)
                break;
            case ENTITY_MURKROW:
                app.ask(SENTENCE_MURKROW)
                break;
            case ENTITY_HOOTHOOT:
                app.ask(SENTENCE_HOOTHOOT)
                break;
            case ENTITY_NOCTOWL:
                app.ask(SENTENCE_NOCTOWL)
                break;

                // legendary
            case ENTITY_ARTICUNO:
                app.ask(SENTENCE_ARTICUNO)
                break;
            case ENTITY_MOLTRES:
                app.ask(SENTENCE_MOLTRES)
                break;
            case ENTITY_ZAPDOS:
                app.ask(SENTENCE_ZAPDOS)
                break;

                // cats
            case ENTITY_MEOWTH:
                app.ask(SENTENCE_MEOWTH)
                break;
            case ENTITY_PERSIAN:
                app.ask(SENTENCE_PERSIAN)
                break;
            case ENTITY_MEW:
                app.ask(SENTENCE_MEW)
                break;
            case ENTITY_MEWTWO:
                app.ask(SENTENCE_MEWTWO)
                break;

                // dogs
            case ENTITY_GROWLITHE:
                app.ask(SENTENCE_GROWLITHE)
                break;
            case ENTITY_ARCANINE:
                app.ask(SENTENCE_ARCANINE)
                break;
            case ENTITY_SNUBULL:
                app.ask(SENTENCE_SNUBULL)
                break;
            case ENTITY_HOUNDOUR:
                app.ask(SENTENCE_HOUNDOUR)
                break;
            case ENTITY_HOUNDOOM:
                app.ask(SENTENCE_HOUNDOUR)
                break;

                // horse
            case ENTITY_PONYTA:
                app.ask(SENTENCE_PONYTA)
                break;
            case ENTITY_RAPIDASH:
                app.ask(SENTENCE_RAPIDASH)
                break;

                // fox
            case ENTITY_EEVEE:
                app.ask(SENTENCE_EEVEE)
                break;
            case ENTITY_VULPIX:
                app.ask(SENTENCE_VULPIX)
                break;

                // pokemouton
            case ENTITY_MAREEP:
                app.ask(SENTENCE_MAREEP)
                break;
            case ENTITY_FLAAFY:
                app.ask(SENTENCE_FLAAFY)
                break;
            case ENTITY_AMPHAROS:
                app.ask(SENTENCE_AMPHAROS)
                break;

                // monkey
            case ENTITY_AIPOM:
                app.ask(SENTENCE_AIPOM)
                break;
            case ENTITY_MANKEY:
                app.ask(SENTENCE_MANKEY)
                break;
            case ENTITY_PRIMEAPE:
                app.ask(SENTENCE_PRIMEAPE)
                break;

                // snake
            case ENTITY_EKANS:
                app.ask(SENTENCE_EKANS)
                break;
            case ENTITY_ARBOK:
                app.ask(SENTENCE_ARBOK)
                break;

                // cow ? bull
            case ENTITY_TAUROS:
                app.ask(SENTENCE_TAUROS)
                break;

                // frog
            case ENTITY_POLITOED:
                app.ask(SENTENCE_POLITOED)
                break;

                // no sound once the became adult, they "mugit" when they are young 
            case ENTITY_GIRAFARIG:
                app.ask(SENTENCE_GIRAFARIG)
                break;

            case ENTITY_TEDDIURSA:
                app.ask(SENTENCE_TEDDIURSA)
                break;
            case ENTITY_URSARING:
                app.ask(SENTENCE_URSARING)
                break;

            case ENTITY_SWINUB:
                app.ask(SENTENCE_SWINUB)
                break;

            case ENTITY_PHANPY:
                app.ask(SENTENCE_PHANPY)
                break;
            case ENTITY_DONPHAN:
                app.ask(SENTENCE_DONPHAN)
                break;

                default:
                app.ask(SENTENCE_ALMOST)
                break
        }


    }
}

module.exports = Pokemon;