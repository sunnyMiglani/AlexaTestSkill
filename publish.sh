# A script to only deploy lambda code, instead of deploying via ask cli 
rm index.zip 
cd lambda_data
zip  -R -X index.zip '*.json' 'node_modules/' '*.js' '*.txt' 'ENV/lib/python3.6/site-packages/' 'detectEntities.py'
mv index.zip ../index.zip
cd ..
aws lambda update-function-code --function-name myTestFunctionTwo --zip-file fileb://index.zip
