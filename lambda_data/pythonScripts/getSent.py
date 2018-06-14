import json;
import boto3;
import sys;
import os;
configPath = os.environ['LAMBDA_TASK_ROOT']+"/much_ado_about_nothing.txt";
# configPath = "../much_ado_about_nothing.txt";
comprehend = boto3.client(service_name='comprehend', region_name='eu-west-1');


textFile = open(configPath, "r");
text = (textFile.read())#.decode("utf-8");


stringResponse = json.dumps(comprehend.detect_sentiment(Text=text, LanguageCode='en'), sort_keys=True, indent=4) # type string
dictResponse = json.loads(stringResponse);
# print(dictResponse);
listOfValues = [];
listOfSentiments = [];

for sentimentTypes in dictResponse['SentimentScore']:
    # print(sentimentTypes+": " + str(dictResponse['SentimentScore'][sentimentTypes]));
    listOfValues.append(dictResponse['SentimentScore'][sentimentTypes]);
    listOfSentiments.append(sentimentTypes);

highestValue = 0;
highestInd = 0;
for ind in range(0,len(listOfValues)):
    value = listOfValues[ind];
    if(value >= highestValue):
        highestValue = value;
        highestInd = ind;
        continue;

secondHighestValue = 0;
secondHighestIndex = 0;
for ind in range(0,len(listOfValues)):
    if(ind == highestInd): continue;
    value = listOfValues[ind];
    if(value >= secondHighestValue):
        secondHighestValue = value;
        secondHighestIndex = ind;
        continue;

print("I feel quite {0} towards this".format(listOfSentiments[highestInd]));
print("Some others feel {0} however.".format(listOfSentiments[secondHighestIndex]));
sys.stdout.flush()

