"use restrict"

module.exports = {
    getEntities =  function(){
        var spawn = require('child_process').spawn;
        py = spawn('python', ['detectEntities.py']);
        outputString = '';

        py.stdout.on('data', function (data) {
            outputString += data.toString();
        });

        py.stdout.on('end', function () {
            console.log("My output : " + outputString);
        });

        return outputString;

    }   
}