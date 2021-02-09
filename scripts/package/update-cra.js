#!/usr/bin/env node
const ready = 
const fs = require('fs');
const {shell} = require('@lskjs/sh/shell')
const {run, hasCra, rootPath, packagePath} = require('lsk/utils')

const main = async () => {
  await shell(`rsync -aEp ${findPath('scripts/assets/cra/package.json')} ${findPath('scripts/assets/cra/package-lock.json')} ${findPath('scripts/assets/cra/config-overrides.js')} ${packagePath('cra')}`);
  await shell(`rsync -aEp ${findPath('scripts/assets/cra/public')} ${packagePath('cra/public')}`);
  await shell(`rsync -aEp ${findPath('scripts/assets/cra/public/index.html')} ${packagePath('cra/public/index.html')}`);
}
run(main)