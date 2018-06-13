# AlexaTestSkill
Alexa Test Repository. Simple example and placeholders for links to APIs and Alexa Intents.

# Front-End How to Use:
These are some details on the front end for using this app.
Example questions are as follows:
1. "Tell me the main characters" -- Entities
2. "How do you feel about it?" -- Sentiments
3. "Quote something for me." -- Key Phrases


# Aim:
Working Alexa skill that can 
1. ~~implement timers / notification as an example of handling
time dependent events.~~ Ignored, not needed in WP
2. ~~implement an external API to return back values based on the intents given by alexa.~~ Keepin internal instead 
3. have a database that can store information from the above API
4. have an external system that can add data to the database from above if needed.

# TODO
1. ~~Add lambda code from AWS's console.~~ DONE
2. ~~Link ask-cli / aws-cli to upload and test different scripts.~~ DONE
3. ~~Create unit tests for simple intent calls.~~ DONE on AWS Lambda. 
4. Link a simple API to the alexa calls.
5. Create a list of placeholders for any possible future API calls

# Dream Goals
1. Build an API that surrounds this that can be used by any external system
2. Find a way to link to HTTP / HTTPS post requests. 

# Notes

To link any API : Basically create your own API for the aws comprehend / any other api
  should be as simpe as putting those API functions in an module.exports { } section.
  then doing a "require" from the main file (this one).

# Guides

### Adding a python script + related libraries.
The best example to follow [is here](https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example-deployment-pkg.html#with-s3-example-deployment-pkg-python).
The overall system is essentially to create a virtual environment for the files to run in, and you zip the related libraries **at the same level** as the script.

### File paths for reading / writing
This is basically since the scripts aren't run with the same paths you're used to in aws, the best thing [to use is this system](https://stackoverflow.com/questions/39477729/aws-lambda-read-contents-of-file-in-zip-uploaded-as-source-code?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa) which explains the pathing for the python _read_ functions.

### Creating a Virtual Environment for the Python files
This is just [to save the link for future use](http://docs.python-guide.org/en/latest/dev/virtualenvs/) but the idea is outlined really well here and there's specific instructions on how to create and manage a virtual environment.

### Testing locally rather than using AWS lambda each time:
**Caution**: Testing locally is great if you're testing code logic, but I'd 100% recommend actually testing on lambda (even if it eventually costs) as this will ensure you don't have problems with paths. A decent system is implemented/recommended [by Amazon call SAM](https://aws.amazon.com/about-aws/whats-new/2017/08/introducing-aws-sam-local-a-cli-tool-to-test-aws-lambda-functions-locally/)

### Child Process from JS to Python:
The best guide I've found for this system [is here](https://www.sohamkamani.com/blog/2015/08/21/python-nodejs-comm/). This essentially covers the concept of creating a child process and looking at it's data out stream and I would **heavily recommend** remembering to put the stderr stream as well, otherwise you shall spend ages wondering why things weren't working!
