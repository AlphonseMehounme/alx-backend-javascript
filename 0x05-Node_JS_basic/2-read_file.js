const fs = require('fs');

function countStudents(path) {
  content = fs.readFileSync(path, 'utf-8');
  console.log(content);
}

module.exports = countStudents;
