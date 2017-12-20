#!/bin/sh

# Clean up just in case
rm -rf icomoon/

# Unzip the icomoon zip
unzip resources/icomoon.zip -d ./icomoon

# Copy files to correct spots
cp icomoon/style.css www/css/icons.css
cp icomoon/fonts/* www/fonts

# Replace font references in the css style
sed -i "s/fonts\/icomoon/..\/fonts\/icomoon/" www/css/icons.css

# Clean things up
rm -rf icomoon/
