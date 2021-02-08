#!/usr/bin/env node
const ready = require('@lskjs/utils/polyfill');
const {shell} = require('@lskjs/sh/shell')
const {run} = require('../utils/utils')


const main = async () => {
  await shell('rm -rf build/node_modules')
  await shell('ln -s node_modules build/node_modules')
}

run(main)