#!/usr/bin/node

const fs = require('fs');

function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, 'utf-8', function (err) {
    if (err) {
      console.error(err);
    }
  });
}

