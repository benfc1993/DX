#!/bin/bash

DOC_FILE_PATTERN="*.doc.md"

rm -rf docs.md

echo "# Docs" >> docs.md
echo "" >> docs.md

BASE_PATH=$(git rev-parse --show-toplevel)

for f in $(find . -not -path "*/node_modules/*" -name $DOC_FILE_PATTERN -not -path "**/node_modules/*" -type f); do
    if [  -z "$(grep "<- Back" "$f")" ]; then
        REL_PATH=$(sed -E "s/^\.//" <<< $(dirname $f))
        REL_PATH="$(echo "$(sed -E 's/\/[_a-zA-Z0-9\.\-]*/\.\.\//g' <<<"$REL_PATH")")"
        (echo "[<- Back](${REL_PATH}docs.md)" && cat $f) > "$f.bak" && mv "$f.bak" $f
    fi

    title=""

    while IFS= read -r line; do
        if [[ $(echo "$line" | awk 'match($0,/^#+/){print RLENGTH}') = "1" ]]; then
            title="$(echo $line| sed -E 's/^#+ //')"
        fi
    done < $f

    if [ -z "$title" ]; then
        title=$(basename $f | cut -d. -f1)
        title="$(tr '[:lower:]' '[:upper:]' <<< ${title:0:1})${title:1}"
    fi

    echo "[$title]($f)" >> docs.md
    echo "" >> docs.md
done
