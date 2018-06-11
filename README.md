# AlexaTestSkill
Alexa Test Repository. Simple example and placeholders for links to APIs and Alexa Intents.

# Aim:
Working Alexa skill that can 
1.  ~~implement timers / notification as an example of handling
time dependent events. ~~ Ignored, not needed in WP
2. ~~implement an external API to return back values based on the intents given by alexa.~~ Keepin internal instead 
3. have a database that can store information from the above API
4. have an external system that can add data to the database from above if needed.

# TODO
1. ~~Add lambda code from AWS's console.~~ DONE
2. ~~Link ask-cli / aws-cli to upload and test different scripts.~~ DONE
3. Create unit tests for simple intent calls.
4. Link a simple API to the alexa calls.
5. Create a list of placeholders for any possible future API calls

# Dream Goals
1. Build an API that surrounds this that can be used by any external system
2. Find a way to link to HTTP / HTTPS post requests. 

# Notes

To link any API : Basically create your own API for the aws comprehend / any other api
  should be as simpe as putting those API functions in an module.exports { } section.
  then doing a "require" from the main file (this one).