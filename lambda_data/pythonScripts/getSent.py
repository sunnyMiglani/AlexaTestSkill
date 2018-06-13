import json;
import boto3;
import sys;
import os;
# configPath = os.environ['LAMBDA_TASK_ROOT']+"/../much_ado_about_nothing.txt";
configPath = "../much_ado_about_nothing.txt";
comprehend = boto3.client(service_name='comprehend', region_name='eu-west-1');


textFile = open(configPath, "r");
text = (textFile.read())#.decode("utf-8");


stringResponse = json.dumps(comprehend.detect_sentiment(Text=text, LanguageCode='en'), sort_keys=True, indent=4) # type string
dictResponse = json.loads(stringResponse);
print(dictResponse);
listOfValues = [];
listOfSentiments = [];
for sentimentTypes in dictResponse['SentimentScore']:
    print(sentimentTypes+": " + str(dictResponse['SentimentScore'][sentimentTypes]));
    listOfValues.append(dictResponse['SentimentScore'][sentimentTypes]);
    # listOfSentiments.append()

sys.stdout.flush()

