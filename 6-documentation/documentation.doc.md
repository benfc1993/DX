[<- Back](../docs.md)

# Documentation

The documentation in this repo is linked automatically in a file at the root called `docs.md`.

This generation can be done manually with the following command:

```bash
npm run generate:docs
```

The generation is also run automatically on commit, this uses husky and runs [this file](../.husky/pre-commit).

To add a new documentation page create a new markdown file anywhere in the repo. That's it!

If a file has a title, this will be used in the index otherwise the file name is used.

## Extension

If you want to have Markdown file which are not in the index, you could add a postfix to the included files and only look for those in the script e.g.:

`my-documentation-file.docs.md`

`generate-docs.md`

```bash
for file in $(find . -name "*.docs.md" -not -path "**/node_modules/*"  -type f); do
```
