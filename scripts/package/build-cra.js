#!/usr/bin/env node
const ready = require('@lskjs/utils/polyfill');
const {shell} = require('@lskjs/sh/shell')
const {run} = require('../utils/utils')

const main = async () => {
  await shell('rm -rf cra/src');
  await shell('ln -s src cra/src');
  await shell('CI=false SKIP_PREFLIGHT_CHECK=true npm run build', {cwd: 'cra'});
  console.log('OK - cra build');
  await shell('mkdir -p public');
  await shell(`rsync -aEp cra/build/* public/`);
  await shell(`lsk run build:cra:extract`);
}

run(main);