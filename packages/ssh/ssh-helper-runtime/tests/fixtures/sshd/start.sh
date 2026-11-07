#!/bin/sh
set -eu
ssh-keygen -q -t ed25519 -N '' -f /etc/ssh/ssh_host_ed25519_key
install -d -m 700 -o infinity -g infinity /home/dsh/.ssh
install -m 600 -o infinity -g infinity /fixture-key.pub /home/dsh/.ssh/authorized_keys
install -d -m 700 -o infinity -g infinity /home/dsh/workspace
exec /usr/sbin/sshd -D -e -f /etc/ssh/sshd_config
