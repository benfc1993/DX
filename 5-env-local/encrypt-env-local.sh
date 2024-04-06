#!/bin/bash

REPO_ROOT=$(git rev-parse --show-toplevel)

SOPS_DIR="$( dirname "${BASH_SOURCE[0]}")"
ENV_FILE="$REPO_ROOT/.env.local"
SOPS_FILE="env.yml"

cd $SOPS_DIR

if test -f "$ENV_FILE"; then
    sops --encrypt --input-type dotenv "$ENV_FILE" > $SOPS_FILE
    echo "env.yml written"
else 
    echo "no .env.local found"
    exit 1
fi

