"use strict"

var spawn = require('child_process').spawn;
var py = spawn('python', ['mainPythonFile.py']);
var outputString = "starting string";

console.log("BEFORE ANY INPUT");
py.stdout.on('data', function (data) {
    console.log("----Getting information from the python script!---");
    outputString += data.toString();
    console.log(outputString);
});

py.stdout.on('end', function () {
    console.log("===hello from the end call in python files===");
    console.log("My output : " + outputString);
});