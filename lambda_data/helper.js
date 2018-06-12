"use strict"

module.exports = {
    checkLocal : function(){
        const testFolder = './';
        const fs = require('fs');

        fs.readdirSync(testFolder).forEach(file => {
            console.log(file);
        })
        return " Found Local Files! ";
    },
    
    getEntities: function(){
        var spawn = require('child_process').spawn;
        var py = spawn('python', ['detectEntities.py']);
        var outputString = "starting string";
        
        py.stdout.on('data', function (data) {
            console.log("Getting information from the python script! ");
            outputString += data.toString();
            console.log(outputString);
        });
        

        py.stdout.on('end', function () {
            console.log("My output : " + outputString);
        });
        return outputString;

    }   
}