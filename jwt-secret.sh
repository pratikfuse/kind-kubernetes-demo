#!/bin/bash


kubectl create secret \
  generic app-jwt-secret  \
  --from-literal=kongCredType=jwt  \
  --from-literal=key="jwt-issuer-2" \
  --from-literal=algorithm=HS256 \
  --from-literal=secret="super-secret-key"

