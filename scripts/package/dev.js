#!/usr/bin/env node
const {shell} = require('@lskjs/sh/shell')
const {hasCra, run} = require('../utils/utils')

const main = async () => {
  if (hasCra()) {
    await shell('lsk run dev:cra-and-server')
  } else {
    await shell('lsk run watch')
  }
}

run(main)