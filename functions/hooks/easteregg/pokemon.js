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

const SENTENCE_PIKACHU = "pika pika ! Unfortunally pikachu is road tripping around the world with Ash and can not be there, let's try one more time !";
const SENTENCE_PICHU = "Pichu has been grounded and is actually having a bath with his mom and so it's not the expected answer, let's play again !";
const SENTENCE_RAICHU = "raichu can not talk because he is providing electricity to his little brother to warm his bath, so let's try again !";

const SENTENCE_RATTATA = "rattata is dreaming of trying to fly with his winged friend instead of collecting raspberry for his father. So no, it is not him !";
const SENTENCE_RATICATE = "Raticate is in the kitchen awaiting for raspberry, trying to create a new dishes to his wife for their wedding anniversary, so it's not him !";

const SENTENCE_MARILL = "marill dabbles with his brothers and sisters in the neighboring lake in secret instead of doing his homework... so it can not be him !";
const SENTENCE_AZUMARILL = "Azumarill is seeking his children, wondering where they are instead of doing theirs homeworks. try an other answer !";

const SENTENCE_MAGIKARP = "Magikarp, my favorite useless pokemon of the world... but now he is too busy to find water to scream. try another answer !";

const SENTENCE_BULBASAUR = "Bulbasaur is gardening at the bottom of a garden with a friend and it seems that something goes wrong. try another answer !";
const SENTENCE_SQUIRTLE = "Squirtle is not here, he has joined the Squirtle Squad and used to run wild. He is probably writing graffiti and and swaggering with his bro at this time. let's try again !";
const SENTENCE_CHARMANDER = "Charmander is with his friend at the bottom of the garden... it smells that they are starting a barbecue or something like that, so let's try another answer !";
const SENTENCE_CHARIZARD = "Right, he is actually screaming at the bottom of the garden, I don't know why. But Charizard doesn't sounds like that, so let's try again !";

const SENTENCE_PIDGEY = "Pidgey is trying desperately to awake his friend because if he doesn't bring raspberry to his daddy he will be grounded, so let's get another shot !";
const SENTENCE_PIDGEOTTO = "pidgetto is having a laught watching his little neighbours set a fire to a wheelbarrow, so let's try again !";
const SENTENCE_PIDGEOT = "pidgeot flew into his neighbor's garden for a wheelbarrow story... I don't know exactly but it can not be him, so let's play again !";

const SENTENCE_PSYDUCK = "psyduck is missing, he escaped again from his owner and surely is trying to learn how to swim somewhere we don't know where, so let's try another answer !";
const SENTENCE_GOLDUCK = "golduck is trying to talk to come back to psyduck through telepathy but it looks like that psyduck gave him a headache, so let's try again !";
const SENTENCE_MURKROW = "Murkrow is actually grounded in his room, he tried to robbered a jewelry. This little boy has never been able to resist a brilliant object, so it is not him !";

const SENTENCE_HOOTHOOT = "Hoothoot has embarked on the music, he is currently rehearsing in his room. let's try again !";
const SENTENCE_NOCTOWL = "Noctowl listens to hoothoot music through the door and is too busy to wonders if he should encourage or stop him. so let's play again !";

const SENTENCE_ARTICUNO = "articuno has gone for a tour around the world with his two best friends to the delight of their fan so let's try again !";
const SENTENCE_MOLTRES = "moltres has gone for a tour around the world with his two best friends to the delight of their fan, so it is not the correct answer";
const SENTENCE_ZAPDOS = "zapdos has gone for a tour around the world with his two best friends to the delight of their fan so let's play again !";

const SENTENCE_MEOWTH = "Meowth is in holiday camp trying to make new friend with 2 humans and other pokemon, let's try one more time ! ";
const SENTENCE_PERSIAN = "persian is enjoying his free time without no one to bothered him, so it is not the good answer, let's try again !";
const SENTENCE_MEW = "mew is daydreaming somewhere beetween water and air, we don't know when he is coming back home so it is not him, let's play again !";
const SENTENCE_MEWTWO = "mewtwo is chasing after mew because mew is the only one who can calm his fierce heart, by bringing him to his origin, so let's try another one !";

const SENTENCE_GROWLITHE = "growlithe has gone hiking for the first time with his brother and his friends, so it can not be him, let's try again !";
const SENTENCE_ARCANINE = "Arcanine is leading a hike with friend and family all around the world for months, so let's play again !";
const SENTENCE_SNUBULL = "Snubbull is shopping with his trainer to find a new little dress so it is not the good answer, let's try again";
const SENTENCE_HOUNDOUR = "Houndour is gone for a hike with friend for a long time, he packed half the house afraid of missing something, so it's not the right answer, let's play again !";
const SENTENCE_HOUNDOOM = "houndoom has gone with friends for a hike, afraid that his little brother missed something in his package and panic for nothing, so let's try another answer !";

const SENTENCE_PONYTA = "Ponyta is running in fields and mountains all day, trying to be as fast as his big brother ! so it's not to good answer let's try again !";
const SENTENCE_RAPIDASH = "rapidash is training his little brother to go faster, as he can run faster than the storm, so it cannot be him let's play again !";

const SENTENCE_EEVEE = "Eevee is outside, trying to find his own personnality by finding what he likes or need with a help of a friend, so let's try again !";
const SENTENCE_VULPIX = "Vulpix is outside, trying to convince a friend to become like him, so they can be brother of fire, so let's try again !";

const SENTENCE_MAREEP = "Mareep is watching his big brother having his first shaving wool... he is too impressed to scream so let's try again !";
const SENTENCE_FLAAFY = "flaafy is having his first lost of wool, trying to negociate to not loose everything, so it is not him let's play again !";
const SENTENCE_AMPHAROS = "ampharos is too busy to shave his little brother and hold on to send signals across the ocean in the right way, so let's try one more time !";

const SENTENCE_AIPOM = "Aipom is a monkey-like Pokémon with a three-fingered hand at the end of its tail. The tail is strong enough to anchor Aipom to a branch and suspend the rest of its body in the air, but also delicate enough to pick fruit and manipulate objects";
const SENTENCE_MANKEY = "Mankey is trying to peel a chestnut but I can hear him getting nervous, so let's try another answer !";
const SENTENCE_PRIMEAPE = "When Primeape is furious, its blood circulation is boosted. This makes its muscles stronger, but at the cost of some of its intelligence. It has shown some fondness for bananas.";

const SENTENCE_EKANS = "ekans is in holiday camp, making friend with other pokemon and some humans, apparently they are starting a band, so let's try one more time !";
const SENTENCE_ARBOK = "Arbok is too territorial, he went to look for hikers who would walk on his land, so it is not the right answer let's play again !";

const SENTENCE_TAUROS = "Tauros trains to be faster and more efficient with its 3 tails, so it's not him, let's try again !";

const SENTENCE_POLITOED = "politoed has joined the King's Rock band and sing in a chorus with a loud, bellowing voice at the end of the world so it can not be him, let's try again !";

const SENTENCE_GIRAFARIG = "Girafarig's tail's head is busy to calm down Mankey while Girafarig real head is picking bananas for the same reason, so let's try another one !";

const SENTENCE_TEDDIURSA = "Teddiursa is using Beedrill pollen and fruit to create its own honey for not becoming scarce this winter. it's not the correct answer let's try again !";
const SENTENCE_URSARING = "Ursaring is helping Teddiursa making honey for winter, so it's not the good answer, let's play again !";

const SENTENCE_SWINUB = "Swinub is gormandize somewhere in the wood with his favorite mushroom that grows beneath dead grass, so it's not the correct answer, let's try again !";

const SENTENCE_PHANPY = "phanpy waddles in the river playing with water and his trunk to the great displeasure of his papa, so let's try one more time !";
const SENTENCE_DONPHAN = "donphan is trying to teach his son to curl up into a ball which seems more likely to play than learn, so let's try again !";

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