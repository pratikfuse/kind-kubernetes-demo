#!/bin/bash

# Check if kind is installed
if ! command -v kind &> /dev/null; then
    echo "kind cli is required. Exiting..."
    exit 1;
fi

set -o errexit

export KIND_CLUSTER_NAME=kong-demo

# create a kind cluster
cat <<EOF | kind create cluster --config=-
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
    extraMounts:
      - hostPath: $(pwd)/src/jokes/protobufs
        containerPath: /mnt/protobufs
EOF