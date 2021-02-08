#!/usr/bin/env node
const ready = require('@lskjs/utils/polyfill');
const {shell} = require('@lskjs/sh/shell')
const {hasCra, run} = require('../utils/utils')

const main = async () => {
  await shell('lsk run build:js')
  if (hasCra()) {
    await shell('lsk run build:cra')
  }
}

run(main)