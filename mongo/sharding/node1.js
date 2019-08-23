rs.initiate(
   {
      _id: "configserver",
      configsvr: true,
      version: 1,
      members: [
         { _id: 0, host : "{{ hostvars['node1']['internal'] }}:{{ mongo_port }}" },
         { _id: 1, host : "{{ hostvars['node2']['internal'] }}:{{ mongo_port }}" },
      ]
   }
)