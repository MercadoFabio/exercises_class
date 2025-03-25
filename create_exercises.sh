#!/bin/bash

base_dir="/Users/fabmercado/WebstormProjects/untitled2"

for i in {3..22}
do
  dir="$base_dir/exercise_$i"
  mkdir -p "$dir"
  touch "$dir/index.js"
  touch "$dir/index.test.js"
  cd "$dir"
  npm init -y
  npm install --save-dev jest --registry=https://registry.npmjs.org/
done