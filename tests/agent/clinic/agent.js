const http = require('http');

const service_data = JSON.stringify({
    services: [{
        apikey: '1234567890',
        cbroker: 'http:/{{ mock_endpoint }}:{{ mock_port }}',
        entity_type: 'testType',
        resource: '/iot/json'
    }]
});

const device_data = JSON.stringify({
    devices: [{
        device_id: 'test',
        protocol: 'PDI-IoTA-UltraLight',
        transport: 'HTTP',
        entity_name: 'testName',
        attributes: [
              { object_id: "c", name: "count", type: "Integer" }
        ]
    }]
});

const service_options = {
  hostname: 'localhost',
  port: '{{ agent_provisioning_port }}',
  path: '/iot/services',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'FIWARE-Service': 'service',
    'FIWARE-ServicePath': '/',
    'Content-Length': service_data.length
  }
};

const device_options = {
  hostname: 'localhost',
  port: '{{ agent_provisioning_port }}',
  path: '/iot/devices',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'FIWARE-Service': 'service',
    'FIWARE-ServicePath': '/',
    'Content-Length': device_data.length
  }
};


const service_request = http.request(service_options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', (d) => {
    process.stdout.write(d)
  })
})

service_request.on('error', (error) => {
  console.error(error)
})

const device_request = http.request(device_options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', (d) => {
    process.stdout.write(d)
  })
})

device_request.on('error', (error) => {
  console.error(error)
})

service_request.write(service_data)
service_request.end()

device_request.write(device_data)
device_request.end()

