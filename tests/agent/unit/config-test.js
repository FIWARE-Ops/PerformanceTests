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
        port: 4041
    },
    contextBroker: {
        host: '192.168.1.1',
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
    service: 'howtoService',
    subservice: '/howto',
    providerUrl: 'http://localhost:4041',
    deviceRegistrationDuration: 'P1M',
    defaultType: 'Thing',
    defaultResource: '/iot/json',
    compressTimestamp: true
};

config.defaultKey = '1234';
config.defaultTransport = 'MQTT';

module.exports = config;
