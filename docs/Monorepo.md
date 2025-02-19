# Monorepo

## Common files for the different projects
### github
.devcontainer
.github

### Installed modules and build
node_modules, package.json 
.venv, requirements.txt
Makefile

Because these installed modules are common, project might have to install extra modules not needed for their project

### scripts
We try to keep the scripts common.
The scripts needed for running system tests need to move because of changes in API per project

### Docker
We should try to keep docker files the same


## Open issues
Circular dependencies during build
Common endpoints
