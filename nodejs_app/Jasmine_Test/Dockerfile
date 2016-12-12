FROM ubuntu:latest
MAINTAINER Buba Conteh <buba.conteh@euvic.pl>

WORKDIR /app
ADD package.json /app/
ADD . /app

EXPOSE 8000
CMD []
ENTRYPOINT ["/nodejs/bin/npm", "start"]
