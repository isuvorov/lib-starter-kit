#!/usr/bin/env bash

I18_URL=`node -e "console.log(require('./.lskjs.js').i18.url)"`
I18_DIST="./i18"

echo "$I18_URL => $I18_DIST"

rm -rf $I18_DIST && \
node ../../node_modules/@lskjs/build-locales/bin/build-locales --locales ru,en --link $I18_URL --dist $I18_DIST && \
echo "done"