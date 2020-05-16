#!/bin/sh

url=$1
echo "Beginning wait for url ${url}"
while true
do
    status_code="$(curl -s -o /dev/null -w "%{http_code}" $url)"
    echo "Got status code ${status_code}"
    if [ $status_code == "200" ]; then
        break
    fi
    echo "Waiting 10 seconds..."
    sleep 10
done
