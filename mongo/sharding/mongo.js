sh.addShard("shard1/{{ hostvars['node3']['internal'] }}:{{ mongo_port }}")
sh.addShard("shard1/{{ hostvars['node4']['internal'] }}:{{ mongo_port }}")

sh.addShard("shard2/{{ hostvars['node5']['internal'] }}:{{ mongo_port }}")
sh.addShard("shard2/{{ hostvars['node6']['internal'] }}:{{ mongo_port }}")
