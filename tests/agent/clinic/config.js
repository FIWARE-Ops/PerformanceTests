var config = {};

config.http = {
    port: '{{ agent_south_port }}'
};

config.mqtt = {
    host: '{{ mosquitto_endpoint }}',
    port: '{{ mosquitto_port }}',
    thinkingThingsPlugin: true,
    username: 'guest',
    password: 'guest'
};

config.amqp = {
    host: '{{ rabbitmq_endpoint }}',
    port: '{{ rabbitmq_port }}',
    exchange: 'amq.topic',
    queue: 'iota_queue',
    options: { durable: true }
};


config.iota = {
    logLevel: 'ERROR',
    server: {
        port: '{{ agent_provisioning_port }}'
    },
    contextBroker: {
        host: '{{ mock_endpoint }}',
        port: '{{ mock_port }}'
    },
    deviceRegistry: {
        type: 'mongodb'
    },
    mongodb: {
        host: '{{ mongo_endpoint }}',
        port: '{{ mongo_port }}'
    },
    types: {},
    service: 'service',
    subservice: '/',
    providerUrl: 'http://{{ agent_endpoint }}:{{ agent_provisioning_port }}',
    deviceRegistrationDuration: 'P1M',
    defaultType: 'testType',
    defaultResource: '/iot/json',
    compressTimestamp: true
};

config.defaultKey = 'testKey';
config.defaultTransport = 'HTTP';

module.exports = config;
