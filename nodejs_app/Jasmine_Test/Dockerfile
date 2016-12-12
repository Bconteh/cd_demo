FROM ubuntu:latest
MAINTAINER Buba Conteh <buba.conteh@euvic.pl>

WORKDIR /app
ADD package.json /app/
ADD . /app

EXPOSE 3000
CMD []
ENTRYPOINT ["/nodejs/bin/npm", "start"]
