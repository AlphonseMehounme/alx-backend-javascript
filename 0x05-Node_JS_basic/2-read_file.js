const fs = require('node:fs');

function countStudents(path) {
  content = fs.readFileAsync(path, 'utf-8');
  console.log(content);
}

module.exports = countStudents;
