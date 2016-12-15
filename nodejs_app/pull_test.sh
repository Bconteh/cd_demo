#!/bin/sh

if [ -f nodejs_app/app.js ]; then
  echo -e "\e[42m------------"
  echo -e "\e[92m File exist"
  echo -e "\e[42m------------"
  exit 0
fi
  echo -e "\e[41m------------"
  echo -e "\e[91m File does not exist"
  echo -e "\e[41m------------"
  exit 1

