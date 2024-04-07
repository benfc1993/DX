[<- Back](../docs.md)

# SOPS and env files

This dir contains two scripts: [encrypt-env-local.sh](./encrypt-env-local.sh) and [decrypt-env-local.sh](./decrypt-env-local.sh#L22).

The scripts require a gpg key to be present on your system. You can then add the id to the .sops.yaml file.

Alternatively you can use a cloud based secrets storage listed in the [official docs](https://github.com/getsops/sops)

## Decrypting

Running `decrypt.sh` will create an .env.local file
with the decrypted variables in the root of the repo.

## Encrypting

Running `encrypt.sh` will encrypt your .env.local file and write it to the `env.yml` file here.
