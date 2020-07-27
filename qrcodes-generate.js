#!/usr/bin/env npx jbash

const codes = require("./functions/message").queryMessageMap;

for (let [key, value] of codes) {
  const fileName = value.replace(/\!/g, "").replace(/\s/g, "_").toLowerCase();
  exec(`npx qrcode -o "qrcodes/${fileName}.png" http://ynab-happy-birthday.netlify.app/\?id\=${key}`)
}
console.log("Done!");