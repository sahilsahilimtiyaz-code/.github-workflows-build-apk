#!/bin/bash
# Install Cordova if not present
if ! command -v cordova &> /dev/null
then
    npm install -g cordova
fi

# Create a new Cordova project
cordova create claude_mobile com.hassanmsthf11.claude Claude

# Copy the HTML file into the www directory as index.html
cp "unlimited claude/Claude.html" claude_mobile/www/index.html

# Inject cordova.js into the html to enable plugins
sed -i 's/<\/body>/<script src="cordova.js"><\/script><\/body>/' claude_mobile/www/index.html

# Remove the default cordova js logic since this is a self-contained app
rm claude_mobile/www/js/index.js

# Modify the config.xml to set correct SDK versions and allow network access
cat << 'CONFIGEOF' > claude_mobile/config.xml
<?xml version='1.0' encoding='utf-8'?>
<widget id="com.hassanmsthf11.claude" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>Claude</name>
    <description>
        A sample Apache Cordova application that responds to the deviceready event.
    </description>
    <author email="dev@cordova.apache.org" href="https://cordova.apache.org">
        Apache Cordova Team
    </author>
    <content src="index.html" />
    <access origin="*" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
    <preference name="android-targetSdkVersion" value="35" />
    <preference name="android-buildToolsVersion" value="35.0.0" />
    <preference name="android-compileSdkVersion" value="35" />
</widget>
CONFIGEOF

cd claude_mobile
cordova plugin add cordova-plugin-inappbrowser
cordova platform add android@13.0.0
cordova build android

# Copy the resulting APK out
cp platforms/android/app/build/outputs/apk/debug/app-debug.apk ../claude_mobile.apk

echo "APK generated successfully at claude_mobile.apk"
