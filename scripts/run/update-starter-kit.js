#!/usr/bin/env node
const ready = 
const {shell} = require('@lskjs/sh/shell')
const {run} = require('lsk/utils')

const main = async () => {
  await shell(`rm -rf scripts/assets scripts/opt scripts/package scripts/run scripts/utils scripts/update-starter-kit`);
  await shell(`rsync -avEp --progress  --exclude-from='scripts/hooks/update-starter-kit-exclude.txt'  ../lib-starter-kit/`);
  if (process.env.NODE_ENV !== 'production') {
    await shell(`ncu -l error --dep=prod,dev,peer,optional`, {cwd: 'cra'})
  }
  await shell('npm ci', {cwd: 'cra'})
}

run(main)


#!/usr/bin/env bash
DIRTO='.'
DIR=`pwd`

rsync -avEp --progress  --exclude-from='scripts/hooks/update-starter-kit-exclude.txt'  ../lib-starter-kit/  $DIRTO && \
rsync -avEp --progress --ignore-existing ../lib-starter-kit/.lskjs.js ../lib-starter-kit/README.md ../lib-starter-kit/.all-contributorsrc $DIRTO && \
rsync -avEp --progress ../lib-starter-kit/scripts/assets/ $DIRTO/scripts/assets && \
echo "===========================================" && \
echo "        All OK, now you need to do:" && \
echo "npm install && npm run bootstrap && npm run update" && \
echo "===========================================" 
