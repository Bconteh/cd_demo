#!/bin/sh
curl -sS -X POST --data "Hello World" http://172.16.175.145:8000/ > /dev/null
sleep 10
if curl http://172.16.175.145:8000/ | grep -q 'Hello World'; then
  echo -e "\e[42m------------"
  echo -e "\e[92mTests passed"
  echo -e "\e[42m------------"
  exit 0
fi
  echo -e "\e[41m------------"
  echo -e "\e[91mTests failed"
  echo -e "\e[41m------------"
  exit 1
