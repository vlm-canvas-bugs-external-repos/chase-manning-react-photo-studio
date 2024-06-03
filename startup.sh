#!/bin/bash

# This script sets up and starts the react-photo-studio application for local development.

# Ensure Node.js version 16 is in use
nvm install 16
nvm use 16

# Install Specific Version of react-scripts to fix peer dependency error
npm install react-scripts@4.0.3

# Install dependencies using exact versions
npm install --save-exact

# Start the development server
npm start