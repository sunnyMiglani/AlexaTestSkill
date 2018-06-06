# A script to only deploy lambda code, instead of deploying via ask cli 
rm index.zip 
cd lambda_data
zip -r -X index.zip *
mv index.zip ../index.zip
cd ..
aws lambda update-function-code --function-name myTestFunctionTwo --zip-file fileb://index.zip
