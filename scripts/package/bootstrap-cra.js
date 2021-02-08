#!/usr/bin/env node
const ready = require('@lskjs/utils/polyfill');
const {shell} = require('@lskjs/sh/shell')
const {run} = require('../utils/utils')

const main = async () => {
  if (process.env.NODE_ENV !== 'production') {
    await shell(`ncu -l error --dep=prod,dev,peer,optional`, {cwd: 'cra'})
  }
  await shell('npm ci', {cwd: 'cra'})
}

run(main)