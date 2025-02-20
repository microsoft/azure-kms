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

### governance
All except custom constitutions

## .build_tag
On a new setup we need to run make build-bing-ads or make build-conf-ai.
After the initial build, make build will consistently use the tag in .build_tag

## Open issues
Circular dependencies during build
Common endpoints
Common code for tests
use the different governance files
