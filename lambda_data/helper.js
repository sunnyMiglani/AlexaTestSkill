"use strict"


module.exports = {

    getEntities: function(callbackFunction, that){
        var spawn = require('child_process').spawn;
        var py = spawn('python', ['getChars.py']);
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

    getPhrase: function(callbackFunction, that){

    },

    // Returns the files at the same level as the running program
    checkLocalFiles : function(){
        const testFolder = './';
        const fs = require('fs');

        fs.readdirSync(testFolder).forEach(file => {
            console.log(file);
        })
        return "Check Log!";
    }
};