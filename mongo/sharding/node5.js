rs.initiate(
   {
      _id: "shard2",
      version: 1,
      members: [
         { _id: 0, host : "{{ hostvars['node5']['internal'] }}:{{ mongo_port }}" },
         { _id: 1, host : "{{ hostvars['node6']['internal'] }}:{{ mongo_port }}" },
      ]
   }
)
