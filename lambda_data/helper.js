"use strict"


module.exports = {

    getEntities: function (){
        var spawn = require('child_process').spawn;
        var py = spawn('python', ['mainPythonFile.py']);
        var outputString = "starting string";

        console.log("BEFORE ANY INPUT");
        py.stdout.on('data', function (data) {
            console.log("----Getting information from the python script!---");
            outputString += data.toString();
            console.log(outputString);
        });

        py.stdout.on('end', function (){
            console.log("===hello from the end call in python files===");
            console.log("My output : " + outputString);
        });
        console.log("NO INPUT CHANGED??");

        return outputString;

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
};