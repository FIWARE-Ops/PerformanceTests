#!/usr/bin/env bash

# clean known hosts
cat hosts | grep ansible_host | awk '{ print $2 }' | cut -d '=' -f 2 | xargs -n1 -I{} ssh-keygen -R {}

# add new keys
cat hosts | grep ansible_host | awk '{ print $2 }' | cut -d '=' -f 2 | xargs -n1 -I{} ssh-keyscan -H {} >> ~/.ssh/known_hosts

# install python
cat hosts | grep ansible_host | awk '{ print $2 }' | cut -d '=' -f 2 | xargs -n1 -I{} ssh ubuntu@{}  "sudo apt install -y python"

# clean bash_profile
if [[ $(uname) == "Darwin" ]]; then
    cat hosts  | grep ansible_host | awk '{ print $1 }' | xargs -n1 -I{} sed -i '' '/alias {}/d' ~/.${1}
else:
    cat hosts  | grep ansible_host | awk '{ print $1 }' | xargs -n1 -I{} sed -i '/alias {}/d' ~/.${1}
fi

# add bash_profile
cat hosts  | grep ansible_host | awk '{ print "alias", $1"=\"ssh ", $2"\"" }' | sed -e 's/ansible_host=/ubuntu@/' >> ~/.${1}

# source
source ~/.${1}
