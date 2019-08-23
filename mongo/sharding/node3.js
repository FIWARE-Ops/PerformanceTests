rs.initiate(
   {
      _id: "shard1",
      version: 1,
      members: [
         { _id: 0, host : "{{ hostvars['node3']['internal'] }}:{{ mongo_port }}" },
         { _id: 1, host : "{{ hostvars['node4']['internal'] }}:{{ mongo_port }}" },
      ]
   }
)
