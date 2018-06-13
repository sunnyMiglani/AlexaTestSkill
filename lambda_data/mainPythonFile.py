import json;
print("Imported json!");
import boto3;
print("Imported boto3!");
import sys;
print("imported sys!");

comprehend = boto3.client(service_name='comprehend', region_name='eu-west-1');
textFile = open("much_ado_about_nothing.txt", "r", encoding="utf8");
text = textFile.read();

print("Finished reading the files!")

# # print('Calling DetectEntities')
# stringResponse = json.dumps(comprehend.detect_entities(Text=text, LanguageCode='en'), sort_keys=True, indent=4) # type string
# dictResponse = json.loads(stringResponse);
# listOfEntities = [];
# listOfDefines = [];
# for entity in dictResponse['Entities']:
#     listOfEntities.append(entity['Text']);
#     listOfDefines.append(entity['Type']);
#     if(entity['Type']=="PERSON"): print(entity['Text']);
#     # print("Entity : {0}, Type : {1}".format(entity['Text'], entity['Type']));


print('End of DetectEntities\n')
sys.stdout.flush()

