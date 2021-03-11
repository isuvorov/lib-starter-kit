#!/usr/bin/env bash
# ../lskjs-cli/packages/cli-scripts/scripts \
rm -rf \
  ../lskjs-cli/packages/cli-scripts/.storybook \
  ../lskjs-cli/packages/cli-scripts/files \
  ../lskjs-cli/packages/cli-scripts/softFiles \
   && \

rsync -avEpP scripts ../lskjs-cli/packages/cli-scripts && \

rsync -avEpP \
  --exclude .storybook/node_modules \
  --exclude .storybook/.storybook \
  --exclude .storybook/stories \
  \
  .storybook \
  .babelrc.js \
  .czrc.js \
  .editorconfig \
  .eslintignore \
  .eslintrc.js \
  .gitattributes \
  .gitignore \
  .huskyrc.json \
  .lintstagedrc.js \
  .prettierignore \
  .prettierrc.js \
  .release-it.js \
  .vscode \
  babel-jest.config.js \
  docker-compose.yml \
  jest.config.js \
  package-lock.json \
  package.json \
  \
  tsconfig.json \
  tsconfig.types.json \
  \
  ../lskjs-cli/packages/cli-scripts/files && \

rsync -avEpP \
  --exclude .storybook/node_modules \
  --exclude .storybook/.storybook \
  --exclude .storybook/stories \
  \
  .all-contributorsrc \
  .lskjs.js \
  LICENSE \
  README.md \
  lerna.json \
  \
  ../lskjs-cli/packages/cli-scripts/softFiles