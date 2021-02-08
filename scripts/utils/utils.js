const ready = require('@lskjs/utils/polyfill');
const fs = require('fs');
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
    console.error('parse .lskjs.js err ' + path, err)
    return {};
  }
}

const hasCra = () => fs.existsSync(packagePath('cra'));
const run = (fn) => {
  fn().catch((err) => {
    console.error(`========= ERR (${err.code} ) ========`);
    if (err.stdout) console.error(err.stdout);
    if (err.stderr) console.error(err.stderr);
    console.error('========= ERR ========');
    process.exit(1);
  });
}

module.exports = {
  rootPath, packagePath, getLskConfig, hasCra, run
}