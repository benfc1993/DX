#!/usr/bin/env bash

REPO_ROOT=$(git rev-parse --show-toplevel)

SOPS_DIR="$( dirname "${BASH_SOURCE[0]}")"
ENV_FILE="$REPO_ROOT/.env.local"
SOPS_FILE="env.yml"

cd $SOPS_DIR

if test -f "$ENV_FILE"; then
    read -n 1 -s -p "file exists overwrite Y/n: " overwrite
    overwrite=$(echo $overwrite | tr '[:upper:]' '[:lower:]')
    echo ""
fi

if [[ -z $(echo $overwrite) ]]; then
    overwrite="y"
fi

if [[ $overwrite == "y" ]]; then
    sops --decrypt --output-type dotenv $SOPS_FILE > "$ENV_FILE"
    echo ".env.local written"
else
    echo "Decryption exited"
fi


