rm -rf dist
sed -i '' 's/http:\/\/localhost:8080/\./g' index.html
docker build -t rickie120243/contrast-reading .
sed -i '' 's/\.\/bundle.js/http:\/\/localhost:8080\/bundle.js/' index.html