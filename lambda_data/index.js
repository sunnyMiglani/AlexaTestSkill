"use strict";
const Alexa = require('alexa-sdk');
var HelperFunctions = require("./helper.js");
const ssmlMediumBreak = "<break time = '0.3s' />";

var handlers = {

  'LaunchRequest': function () {
    this.response.speak("Hello! Welcome to BIG Shakespeare! If you'd like some instructions ask for help! ").listen("You can say things like help or ask shakespeare questions about his play Much Ado about Nothing");
    this.emit(':responseReady');
  },

  'HelloIntent': function () {
    this.response.speak("Hi I'm Shakespeare, ask me for help if you'd like to know what's possible!").listen();
    this.emit(':responseReady');
  },

  'AMAZON.HelpIntent': function () {
    this.response.speak("BIG Shakespeare knows a good amount about his play Much Ado About Nothing\
    you can ask questions like 'who were the main characters' or 'how did you feel about this play'").listen("Seems like you didn't say anything. Ask for help again if you'd like!");
    this.emit(':responseReady');

  },

  'AMAZON.StopIntent': function () {
    this.response.speak("Goodbye! From BIG Shakespeare!");
    this.emit(':responseReady');
  },

  'AskCharacters': function () {
    
    // this.response.speak("Let me ask my friend Watson!");
    HelperFunctions.getEntities(function(returnString,that){
      that.response.speak("Let me ask my friend Watson! <audio src='https://s3.amazonaws.com/ask-soundlibrary/human/amzn_sfx_human_walking_02.mp3' />"+ "The main characters in Much Ado About Nothing are : " + returnString);
      that.emit(':responseReady');
    }, this);
  },

  'AskSentiment' : function() {
    HelperFunctions.getSent(function (returnString, that) {
      that.response.speak(returnString);
      that.emit(':responseReady');
    }, this);
  },

  'AskPhrase': function () {
    this.response.speak("I feel.. like there's no code here");
    this.emit(':responseReady');
  },
};

exports.handler = function (event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
