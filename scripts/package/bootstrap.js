#!/usr/bin/env node
const ready = require('@lskjs/utils/polyfill');
const {shell} = require('@lskjs/sh/shell')
const {run} = require('../utils/utils')

const main = async () => {
  await shell('rm -rf release')
  await shell('rm -rf build')
  await shell('mkdir -p build')

  await shell('rm -rf node_modules')
  await shell('npm ci')
  await shell('mkdir -p node_modules')
  await shell('cp -R package.json package-lock.json build')

  if (hasCra()) {
    await shell('lsk run bootstrap:cra')
  }

  if (process.env.NODE_ENV !== 'production') {
    await shell('lsk run ncu:check');
    await shell('lsk run bootstrap:nodemodules')
  }
}

run(main)