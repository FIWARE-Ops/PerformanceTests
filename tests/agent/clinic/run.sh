#!/usr/bin/env bash

cd /test/
npm i mongodb
node /test/mongo.js


cd /opt/iotajson/
npm i -g clinic

if [[ ${clinic} == 'doctor' ]]; then
    echo 'yes' | clinic doctor --autocannon [ -c {{ threads }} -d {{ duration }} -m POST -b '{"c":1}' --header 'Content-Type: application/json' --header 'fiware-service: service' --header 'fiware-servicepath: /' 'http://localhost:{{ agent_south_port }}/iot/json?k=1234567890&i=test' ] -- node bin/iotagent-json
elif [[ ${clinic} == 'flame' ]]; then
     echo 'yes' | clinic  flame -- node bin/iotagent-json &
     sleep 3
     kill -INT $(pidof node)
     while [[ ! -d .clinic ]]; do
         sleep 5
     done
fi

if [[ -d .clinic ]]; then
    mv .clinic/* /test/result/
    exit 0
else
    exit 1
fi
