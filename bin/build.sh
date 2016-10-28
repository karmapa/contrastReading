rm -rf dist
webpack --verbose --colors --display-error-details
cd dist
sed -i '' 's/http:\/\/localhost:8080/\./g' index.html