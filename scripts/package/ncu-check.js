#!/usr/bin/env node
const ready = require('@lskjs/utils/polyfill');
const {shell} = require('@lskjs/sh/shell')
const {run} = require('../utils/utils')

const main = async () => {
  await shell(`ncu -l error --dep=prod,dev,peer,optional`)
}
run(main);