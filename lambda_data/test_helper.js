"use strict"

var spawn = require('child_process').spawn;
var py = spawn('python', ['detectEntities.py']);
var outputString = "starting string";

py.stdout.on('data', function(data) {
    console.log("Getting information from the python script! ");
    outputString += data.toString();
    console.log(outputString);
});

/*  NOTE: 
    Basically, the program only works if test_helper is run in the same place the command line is run in. So need to checkout out how this would work
    on aws lambda
*/

py.stdout.on('end', function () {
    console.log("My output : " + outputString);
});
