'use strict';
var Alexa = require('alexa-sdk');
var APP_ID =  "amzn1.ask.skill.e6490fe5-c57b-4350-8d65-6219d2bf8347";
var SKILL_NAME = "PUBG Tips";
var GET_FACT_MESSAGE = "Here's your tip: ";
var HELP_MESSAGE = "You can say ask for a tip or trick in a variety of ways.";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";
var data = [
    "If you want to troll your friends, pull the pin on a grenade, then press tab and drag it back into your inventory to cancel the grenade timer.",
    "When holding down right click to aim, press Q or E to shift your camera. This greatly increases your ability to see around corners",
    "Press the control key and T key at the same time to mute microphone noise",
    "Tapping right click puts you into aim down sights mode, holding it just raises your weapon",
    "The B key changes fire modes. It is recommended that you set all sub machine guns to fully automatic mode if you have the ammo for it",
    "If the final zone is in a heavily grassy but flat area, go prone and stay in it as long as it is viable to do so.",
    "When sniping with a bolt action, hold down the left click button to stay scoped in and see where the bullet landed. This will help you adjust aim later",
    "On the map, the largest yellow circles are one thousand by one thousand meters, while the smaller squares within them are one hundred by one hundred meters. Knowing this can help you communicate and change zeroing.",
    "Doors and many fences can be shot down. If you have a shotgun, it is often convenient to shoot down small fences that are in your way",
    "Enter first person mode by using the V key while inside the plane to get a rough gauge of how many players still have not dropped. Keep in mind the plane has two rows of players so this will not be entirely accurate.",
    "You can travel from one and a half up to two large square on the map with effect parachute movement. Try to make it as far from the plane's path as possible if you wish to avoid combat.",
    "Consider closing doors behind you to get more quickly warned when somebody enters your building. Leaving doors open can also repel others, however, so this is a matter of personal preference.",
    "Remember to hit shift while in a vehicle to use boost. This consumes more gas but gets you to places faster.",
    "Many vehicles are capable of fording through rivers. Drive straight into the river at a fast speed and keep holding w and shift. With some patience and luck most U.A.Z and dah sia vehicles will make it through.",
    "You will never need more than twenty bandages, so avoid picking up more than you need",
    "Using multiple bandages one after the other is wasteful. Wait until the first bandage's healing ticks off 2 or three times before you use the next.",
    "Shotguns have more range than you may expect. Add on a choke attachment to get more.",
    "The M.4 rifle is only valuable with many attachments, so be sure to look out for some to deck it out before going into combat",
    "If you're pinned down with few options, try smoke grenades. They can create distractions or cover and allow you to run in the opposite direction and find better cover.",
    "Learn all the bunker locations on the map, as they tend to have the most useful loot. The bunkers near the gun range at severney are especially free.",
    "Avoid dropping at the school near Rozhok unless you're looking for a fight",
    "If you see a vehicle with its break lights on, pay attention for other players nearby.",
    "Pick up A.R and Sniper suppressors whenever you find them. Even if you don't have weapons to fit them, they can be incredibly useful.",
    "Make sure to check rooftops of large buildings. They can give you a good view of the area and often carry some of the best loot as well.",
    "It's usually safe to drive through red zones, as you are unlikely to get hit by an explosion."
    "If you know other players are coming into a specific area, set a trap using an item such as a first aid kit, and attack when they go for it.",
    "You swim faster underwater and are less visible, so if you must swim, dive under.",
    "Utilize nearby sounds to your advantage. The sound of thunder or nearby gunshots and vehicles can mask your movements towards your prey.",
    "Grenades will break and penetrate windows, so use them to flush out rooms from the outside.",
    "Press the X key to put your weapon away. This will give you the fastest run speed possible and help you escape zones.",
    "Items that are already in weapons slots don't use up bag space, so feel free to pick up that pistol or melee weapon that you don't think you need.",
    "Use the control key and number keys to swap seats in a vehicle. Constantly swapping seats can help you confuse enemies and escape gunfire.",
    "Press control and the U key to disable some interfaces. This helps if a death icon is blocking your shot.",
    "Grenades have a five second countdown. Use this to your advantage and time your throws.",
    "If you are waiting for a friend to get in a vehicle, hold down the space bar, shift, and W. Then, when they get in, release spacebar. You will accelerate a little faster.",
    "The V.S.S is a heavily silenced weapon with low damage. When using it, stay as well concealed as possible and your targets will not know where they are being fire on from.",
    "Clear up your view by punching out glass from inside your building. This helps with scoped sniping.",
    "When fired upon by enemies inside buildings, look for broken windows to determine which room they are in.",
    "The equals key can togge on automatic run, which helps in long journeys across the map.",
    "Pans are extremely useful as they can block shots that hit certain parts of your hip.",
    "The motorcycle is the fastest vehicle in the game, but avoid going off road with it unless you are comfortable controlling it.",
    "Consider splitting your squad up among multiple vehicles to avoid relying on one driver. This can also intimidate or confuse enemies.",

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
