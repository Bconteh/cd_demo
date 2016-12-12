FROM ubuntu:latest
MAINTAINER Buba Conteh <buba.conteh@euvic.pl>

WORKDIR /app
ADD package.json /app/
RUN npm install jasmine-node --save-dev
RUN npm install express
RUN npm install request --save
ADD . /app

EXPOSE 8000
CMD []
ENTRYPOINT ["/nodejs/bin/npm", "start"]