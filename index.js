"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  'LaunchRequest': function() {
    this.response.speak("Hello, welcome to Potato Timer! This is a placeholder skill to test timers and watson. Ask for help if you want to know more!").listen("You can say things like start timer or ask watson!");
    this.emit(':responseReady');
  },

  'LanguageIntent': function () {
    var myLanguage = this.event.request.intent.slots.language.value;
    if (myLanguage == "python") {
        this.response.speak("Correct! Python is the most popular language.");
    }
    else {
        this.response.speak("You guessed that " + myLanguage + " is the most popular. Actually, Python is our most popular language");
    }
    this.emit(':responseReady');
  },


  'HelloIntent': function(){
    this.response.speak("This is the hello intent, try telling alexa to open this app rather than saying hello");
    this.emit(':responseReady');
  },


  'HelpIntent': function(){
    this.response.speak("To use Potato Timer, Try asking to start a timer or ask watson something by saying Ask Watson ").listen("Seems like you didn't say anything. Ask Watson something!");
    this.emit(':responseReady');

  },

  // This is a placeholder to start the timer!
  'TimerStartIntent': function(){
    this.response.speak("Starting the Timer!" );
    this.emit(':responseReady');
  },


  // This is a placeholder to stop the timer!
  'TimerStopIntent': function(){
    this.response.speak("Stopping Timer!");
    this.emit(':responseReady');
  },

  // This is a placeholder to ask questions!
  'AskWatson' : function(){
    this.response.speak("Would ask watson something! ");
    this.emit(':responseReady');
  }

};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
