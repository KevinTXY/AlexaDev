'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.892399f5-149c-46d6-812f-b38e505cac20";

var SKILL_NAME = "LoL Randomizer";
var GET_FACT_MESSAGE = "You should play ";
var HELP_MESSAGE = "You can ask me to pick a champion, or just say roll, and I'll pick a random champion for you to play. Support for individual roles is coming soon.";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodluck!";

var data = [
    "A-Trox",
    "Ahri",
    "Akali",
    "Alistar",
    "Uh-moo-moo",
    "Anivia",
    "Annie",
    "Aphelios",
    "Ashe",
    ".awreleon Sole",
    ".azz-ear",
    "Bard",
    "Blitz-crank",
    "Brand",
    "broaum",
    "Caitlyn",
    "Camille",
    "Cassiopeia",
    "ChoGath",
    "Corki",
    "Darius",
    "Diana",
    "Dr. Mundo",
    "Draven",
    "Ekko",
    "Elise",
    "Evelynn",
    "Ezreal",
    "Fiddlesticks",
    "Fiora",
    "Fizz",
    "gal-eo",
    "Gangplank",
    "Garen",
    "Gnar",
    "Gragas",
    "Graves",
    "Hecarim",
    "Heimerdinger",
    "ill-ah-we",
    "erelia",
    "I-Vern",
    "jahna",
    "Jarvan",
    "Jax",
    "Jayce",
    "Jin",
    "Jinx",
    "Kaisa",
    "Kalista",
    "Karma",
    "Karthus",
    "Kassadin",
    "Katarina",
    "Kayle",
    "Kennen",
    "kah-zix",
    "Kindred",
    "<phoneme alphabet='ipa' ph='kled'>kled</phoneme>",
    "Kog'Maw",
    "LeBlanc",
    "Lee Sin",
    "Leona",
    "Lillia",
    "Lissahndra",
    "Lucian",
    "Lulu",
    "Lux",
    "Malphite",
    "melzehar",
    "Maokai",
    "Master Yi",
    "Miss Fortune",
    "Mordekaiser",
    "Morgana",
    "Nami",
    "nah-souss",
    "Nautilus",
    "Neeko"
    "nid-alee",
    "Nocturne",
    "nunu",
    "ole-auf",
    "Orianna",
    "Ornn",
    "Pantheon",
    "Poppy",
    "Pike",
    "Qiyana",
    "Quinn",
    "Rakan",
    "Rammus",
    "Wreck Sai",
    "Reh-neckton",
    "Rengar",
    "Riven",
    "Rumble",
    "Ryze",
    "Samira",
    "sej-jewahni",
    "Senna",
    "Sett",
    "shake-oh",
    "Shen",
    "Shyvana",
    "Singed",
    "Sion",
    "severe",
    "Skarner",
    "Sona",
    "Soraka",
    "Swain",
    "Sylas",
    "Syndra",
    "Tahm Kench",
    "tahl-e-ya",
    "Talon",
    "Taric",
    "Teemo",
    "Thresh",
    "<phoneme alphabet='ipa' ph='tristana'>tristana</phoneme>",
    "Trundle",
    "tryndamir",
    "Twisted Fate",
    "Twitch",
    "oodear",
    "ur-got",
    "vare-us",
    "Vayne",
    "Veigar",
    "Vel Koz",
    "Vi",
    "Viktor",
    "Vladimir",
    "Volibear",
    "Warwick",
    "Wukong",
    "zayah",
    "Xerath",
    "Xin Zhao",
    "Yasuo",
    "Yone",
    "Yorick",
    "Yuumi",
    "Zac",
    "Zed",
    "Ziggs",
    "Zilean",
    "Zoe",
    "Zyra",
    "Cane",

];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
