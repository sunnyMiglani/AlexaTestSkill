import json;
import boto3;
import sys;
import os;
configPath = os.environ['LAMBDA_TASK_ROOT']+"/much_ado_about_nothing.txt";

comprehend = boto3.client(service_name='comprehend', region_name='eu-west-1');

print(configPath)
textFile = open(configPath, "r");
text = (textFile.read()).decode("utf-8");
print(" --- Finished reading the files! --- ")

# print(text[0]);

# # print('Calling DetectEntities')
stringResponse = json.dumps(comprehend.detect_entities(Text=text, LanguageCode='en'), sort_keys=True, indent=4) # type string
dictResponse = json.loads(stringResponse);
# listOfEntities = [];
# listOfDefines = [];
for entity in dictResponse['Entities']:
    # listOfEntities.append(entity['Text']);
    # listOfDefines.append(entity['Type']);
    if(entity['Type']=="PERSON"): print(entity['Text']);
    # print("Entity : {0}, Type : {1}".format(entity['Text'], entity['Type']));


sys.stdout.flush()

