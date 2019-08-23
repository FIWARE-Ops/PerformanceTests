# Variables
- `sharding` - start mongo in sharded mode (7 servers), conflicts with `mock_workers`, `agent_workers`
- `mock_workers` - start mock in scaled mode (nginx or haproxy as a load balancer and 2-6 workers), conflicts with `sharding` and `agent_workers`
- `mock_workers_ct` - start each of mocks with defined amount of workers (default = 4)
- `agent_workers` - start iot-agent in scaled mode (nginx or haproxy as a load balancer and 2-6 workers), conflicts with `sharding` and `mock_workers`
- `proxy` - type of proxy for mock and agent, nginx or haproxy (default - nginx)
- `threads` - amount of parallel connections (default = 300)
- `duration` - time to test (default = 120s)
- `enabler` - enabler to test
- `test` - test to execute
- `clinic` - special test for agent, `doctor` or `flame` (default - doctor)

# List of tests
 - agent (iot-agent-json)
   - clinic (doctor, flame)
   - unit
   - functional
   - performance
 - mongo
   - performance
 - mock
   - performance
 - orion
   - performance

# Environments
  - hosted
    - `agent_wokers`, `mock_workers`, `sharding` are not available 
  - cloud

# how to execute 
```bash
    ansible-playbook  -e enabler='agent' -e agent_workers=2 -e mock_workers=3 -e test=performance cloud.yml
```