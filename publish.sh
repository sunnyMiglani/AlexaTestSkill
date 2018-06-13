# A script to only deploy lambda code, instead of deploying via ask cli 
rm index.zip 
cd lambda_data
cd lib/python3.6/site-packages
zip -r9 ../../../../index.zip *
cd ../../../
cd pythonScripts/
zip -g ../../index.zip *
cd ..
zip  -R -X -g ../index.zip '*.json' 'node_modules/' '*.js' '*.txt'
cd ..
aws lambda update-function-code --function-name myTestFunctionTwo --zip-file fileb://index.zip
