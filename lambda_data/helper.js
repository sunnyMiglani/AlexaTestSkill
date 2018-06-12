"use strict"

module.exports = {
    getEntities: function(){
        var spawn = require('child_process').spawn;
        var py = spawn('python', ['detectEntities.py']);
        var outputString = '';

        py.stdout.on('data', function (data) {
            outputString += data.toString();
        });

        py.stdout.on('end', function () {
            console.log("My output : " + outputString);
        });
        if(outputString === ''){
            outputString = "oh no";
        }
        return outputString;

    }   
}