#!/usr/bin/env node
const ready = require('@lskjs/utils/polyfill');
const fs = require('fs');
const {shell} = require('@lskjs/sh/shell')
const {default: getEnvPaths} = require('@lskjs/config/getEnvPaths')

const rootPath = path => '../../' + path;
const packagePath = path => path;

const getLskConfig = () => {
  const paths = getEnvPaths({name: '.lskjs'});
  const [path] = paths
  if (!path) return {};
  try{
    return require(path);
  } catch(err) {
    console.error('.lskjs.js err ' + path, err)
    return {};
  }
}
const main = async () => {
  const config = getLskConfig();
  await shell('rm -rf .babelrc .babelrc.js .eslintrc.js styleguide.config.js tsconfig.json tsconfig.types.json .storybook bump.txt .storybook');
  await shell(`rsync -aEp ${rootPath('tsconfig.json')} ${rootPath('tsconfig.types.json')} ${packagePath('.')}`);
  await shell(`lsk run merge`);
  if (fs.existsSync(packagePath('cra'))) {
    await shell(`cp -R ${rootPath('scripts/assets/cra/*')} ${packagePath('cra')}`);
  }

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
main().catch(err => {
  console.error('ERR', err)
  process.exit(1);
})

// # preinit
// rm -rf .babelrc .babelrc.js .eslintrc.js styleguide.config.js tsconfig.json tsconfig.types.json .storybook bump.txt .storybook && \
// rsync -avEp ../../tsconfig.json ../../tsconfig.types.json . && \
// # rsync -avEp  ../../scripts/assets/files/ . 
// echo 'rsync ok' && \

// # update package \
// node ../../scripts/package/merge.js  && \

// if [ -d ./cra ]
// thens
//   cp -R ../../scripts/assets/cra/* cra
// else
//   true
// fi && \

// # update deps
// NCU_PACKAGES=`node -e "console.log(require('../../.lskjs.js').ncu.packages || '@nothing')"`
// echo ncu -u --dep=prod,dev,peer,optional "$NCU_PACKAGES"  && \
// ../../node_modules/npm-check-updates/bin/cli.js -u --dep=prod,dev,peer,optional "$NCU_PACKAGES"  && \
// npm install
// # ../../node_modules/npm-check-updates/bin/ncu -u --dep=prod,dev,peer,optional  && \