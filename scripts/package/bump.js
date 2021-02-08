#!/usr/bin/env node
const ready = require('@lskjs/utils/polyfill');
const {shell} = require('@lskjs/sh/shell')
const {hasCra, run} = require('../utils/utils')

const main = async () => {
  await shell('date > bump.txt')
}

run(main)