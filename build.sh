#!/bin/bash
echo "=== QuickSearch Building ==="

rm quicksearch.zip
rm -rf ./build
mkdir build

cp -a ./icons ./build
cp background.js ./build
cp content.js ./build
cp manifest.json ./build

cd build
zip -r ./quicksearch.zip ./*
cd ..
mv build/quicksearch.zip ./
rm -rf ./build

echo "=== Built!!! ==="
