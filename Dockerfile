FROM ubuntu:16.04

MAINTAINER rickie120243 "rickie120243@gmail.com"

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install -y git-core nodejs npm wget
RUN ln -s `which nodejs` /usr/bin/node

RUN npm install -g n
RUN n 5.9.0

RUN mkdir contrastReading
COPY . contrastReading/
WORKDIR contrastReading
RUN npm rebuild node-sass
RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]