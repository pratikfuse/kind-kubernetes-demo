# Kong Gateway, gRPC on Kubernetes

This repository contains the code for the [blog](https://google.com) which shows how to Kong api gateway with gRPC in a Kubernetes Cluster.

### Prequisites

1. [Kind](https://kubernetes.io/docs/tasks/tools) cli
2. [Kubectl](https://kubernetes.io/docs/tasks/tools) cli
3. [Skaffold](https://skaffold.dev/docs/install) cli

### How to run:

1. create the cluster using `./kind.sh`
2. create a jwt-secret using `./jwt-secret.sh`
3. run `skaffold run`
