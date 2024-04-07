
path=$(find . -name $1 -type f -o -name "$1.tsx" -type f)
dir=$(dirname $path)

if [ -z "$path" ]; then
    echo "no file"
else
    file=$(basename $path)
    file="${file%.*}"
    full_path="$dir/$file.stories.tsx"
    if [ -f $full_path ]; then
        read -p "file already exists. Overwrite? [y/n]: " overwrite
        if [[ ! $overwrite =~ ^[Yy]$ ]]; then
            echo "Aborted"
            exit 0
        fi
    fi
    cp scripts/blankStory $full_path
    sed -i .bak "s/replaceMe/$file/g" $full_path
    rm -rf $full_path.bak
    echo "Story created: $full_path"

fi
