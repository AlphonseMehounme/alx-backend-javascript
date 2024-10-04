const fs = require('fs');

async function countStudents(path) {
  try {
    content = await fs.readFile(path, 'utf-8');
    console.log(content);
  } catch(error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
