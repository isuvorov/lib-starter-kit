#!/usr/bin/env node
const ready = require('@lskjs/utils/polyfill');
const {shell} = require('@lskjs/sh/shell')
const {run, getLskConfig} = require('../utils/utils')
const config = getLskConfig();

const main = async () => {
  if (config && config.ncu && config.ncu.packages) {
    try {
      await shell(`ncu -u -l error -e 2 --dep=${config.ncu.dep || 'prod,dev,peer,optional'} ${config.ncu.newest ? '--target newest':''} "${config.ncu.packages}"`)
    } catch(err)  {
      if (err.code === 1) {
        await shell(`npm install`);
        return;
      } 
      throw err;
    }
  }
}
run(main)