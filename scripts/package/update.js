#!/usr/bin/env node
const ready = require('@lskjs/utils/polyfill');
const fs = require('fs');
const {shell} = require('@lskjs/sh/shell')
const {run, hasCra, rootPath, packagePath} = require('../utils/utils')

const main = async () => {
  await shell('rm -rf .babelrc .babelrc.js .eslintrc.js styleguide.config.js tsconfig.json tsconfig.types.json .storybook bump.txt .storybook');
  await shell(`rsync -aEp ${rootPath('tsconfig.json')} ${rootPath('tsconfig.types.json')} ${packagePath('.')}`);
  await shell(`lsk run merge`);
  if (hasCra()) {
    await shell(`cp -R ${rootPath('scripts/assets/cra/*')} ${packagePath('cra')}`);
  }
  await shell(`lsk run ncu`);
}
run(main)