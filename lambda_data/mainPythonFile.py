import json;
import boto3;
import sys;
import os;
configPath = os.environ['LAMBDA_TASK_ROOT']+"/much_ado_about_nothing.txt";

comprehend = boto3.client(service_name='comprehend', region_name='eu-west-1');

# print(configPath)
textFile = open(configPath, "r");
text = (textFile.read()).decode("utf-8");
# print(" --- Finished reading the files! --- ")

# print(text[0]);

stringResponse = json.dumps(comprehend.detect_entities(Text=text, LanguageCode='en'), sort_keys=True, indent=4) # type string
dictResponse = json.loads(stringResponse);
listOfEntities = [];
# listOfTypes = [];
for entity in dictResponse['Entities']:
    input_text = entity['Text'].lower();
    input_type = entity['Type'].lower();
    if(input_type == "person"):
        if(input_text not in listOfEntities):
            listOfEntities.append(input_text);
        else:
            continue;

for person in listOfEntities:
    print(person+",");

sys.stdout.flush()

