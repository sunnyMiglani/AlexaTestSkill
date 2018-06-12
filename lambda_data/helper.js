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
        
        console.log("hello its' meee");
        py.stdout.on('data', function(data){
            console.log("Getting information from the python script! ");
            outputString += data.toString();
            console.log(outputString);
        });
        
        console.log("output : " + outputString);
        console.log("Before the end ");
        py.stdout.on('end', function () {
            console.log("My output : " + outputString);
        });
        return outputString;

    }   
}