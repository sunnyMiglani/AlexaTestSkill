"use strict";
const Alexa = require('alexa-sdk');
var HelperFunctions = require("./helper.js");

var handlers = {

  'LaunchRequest': function () {
    this.response.speak("Hello, welcome to Potato Timer! This is a placeholder skill to test timers and watson. Ask for help if you want to know more!").listen("You can say things like help or ask watson!");
    this.emit(':responseReady');
  },

  'HelloIntent': function () {
    this.response.speak("This is the hello intent, try telling alexa to open this app rather than saying hello");
    this.emit(':responseReady');
  },

  'AMAZON.HelpIntent': function () {
    this.response.speak("To use Potato Timer, Try asking to start a timer or ask watson something by saying Ask Watson ").listen("Seems like you didn't say anything. Ask Watson something!");
    this.emit(':responseReady');

  },

  'AMAZON.StopIntent': function () {
    this.response.speak("Goodbye! From me");
    this.emit(':responseReady');
  },

  'AskCharacters': function () {
    // this.response.speak("Let me ask my friend Watson!");
    // var localCheck = HelperFunctions.checkLocal();
    HelperFunctions.getEntities(function(returnString,that){
      that.response.speak("The main characters in Much Ado About Nothing are : " + returnString);
      that.emit(':responseReady');
    }, this);
  },

  'AskSentiment' : function() {
    this.response.speak("I feel.. like there's no code here");
    this.emit(':responseReady');
  },

  'AskPhrase': function () {
    this.response.speak("I feel.. like there's no code here");
    this.emit(':responseReady');
  }

};

exports.handler = function (event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
