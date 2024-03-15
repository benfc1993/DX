#!/bin/env bash

rm -rf docs.md

echo "# Docs" > docs.md
echo "" >> docs.md

BASE_PATH=$(git rev-parse --show-toplevel)

for file in $(find . -mindepth 2 -name "*.md" -not -path "**/node_modules/*"  -type f); do
    title=""
    if [ -z "$(grep "<- Back" "$file")" ]; then
        RELATIVE_PATH=$(sed -E "s/^\.//" <<< $(dirname $file))
        RELATIVE_PATH="$(echo "$(sed -E "s/\/[_a-zA-Z\.\-]*/\.\.\//g" <<< $RELATIVE_PATH)")"
        (echo "[<- Back](${RELATIVE_PATH}docs.md)" && cat $file) > "$file.bak" && mv "$file.bak" $file
    fi

    while IFS= read -r line; do
        if [[ $(echo "$line" | awk 'match($0,/^#+/){print RLENGTH}') = "1" ]]; then
            title="$(echo $line | sed -E 's/^#+ //')"
        fi
    done < $file

    if [ -z "$title" ]; then
        title=$(basename $file | cut -d. -f1)
        title="${title^}"
    fi

    echo "[$title]($file)" >> docs.md
    echo "" >> docs.md
done
