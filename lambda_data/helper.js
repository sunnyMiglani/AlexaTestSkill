"use strict"


module.exports = {

    getEntities: function(callbackFunction, that){
        var spawn = require('child_process').spawn;
        var py = spawn('python', ['getCharacters.py']);
        var outputString = "starting string";

        py.stdout.on('data', function (data) {
            if(outputString === "starting string"){
                outputString = "";
            }
            outputString += data.toString();
        });

        py.stdout.on('end', function (){
            callbackFunction(outputString, that);
        });
        
        py.stderr.on('data', function(data){
            console.log("ERROR : ", data.toString());
        });

    },

    checkLocal : function(){
        const testFolder = './';
        const fs = require('fs');

        fs.readdirSync(testFolder).forEach(file => {
            console.log(file);
        })
        return " Found Local Files! ";
    },

    execGetEntities : function(){
        var exec = require('child_process').exec;
        var outputString = "oh nooo";
        exec('pwd',function(err, stdout, stderr){
            if(err !== null){
                console.log("error in exec");
            }
            console.log("outputting from exec ", stdout);
            outputString = stdout;
            return output;
        });
        return outputString;
    },

    getSent : function(callbackFunction, that){
        var spawn = require('child_process').spawn;
        var py = spawn('python', ['getSent.py']);
        var outputString = "I have no feeling about this!";

        py.stdout.on('data', function (data) {
            if (outputString === "I have no feeling about this!") {
                outputString = "";
            }
            outputString += data.toString();
        });

        py.stdout.on('end', function () {
            callbackFunction(outputString, that);
        });

        py.stderr.on('data', function (data) {
            console.log("ERROR : ", data.toString());
        });  
    },
};