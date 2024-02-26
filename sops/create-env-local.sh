#!/usr/bin/env bash

repo_root=$(git rev-parse --show-toplevel)

if test -f "$repo_root/.env.local"; then
    read -n 1 -s -p "file exists overwrite Y/n: " overwrite
    overwrite=$(echo $overwrite | tr '[:upper:]' '[:lower:]')
    echo ""
fi

if [[ -z $(echo $overwrite) ]]; then
    overwrite="y"
fi

if [[ $overwrite == "y" ]]; then
    sops --decrypt env.yml > "$repo_root/.env.local"
    echo ".env.local written"
else
    echo "Decryption exited"
fi


