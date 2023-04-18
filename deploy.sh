#!/bin/bash

# Build the React app
cd client
yarn
yarn build

# Copy the build files to the server directory
cd ..
rm -rf server/build
mkdir server/build
cp -R client/build/* server/build/

# Install dependencies and start the server
cd server
yarn --production
yarn start
