const fs = require('fs');

function countStudents(path) {
  const readableStream = fs.createReadStream(path, { encoding: 'utf-8', });
  readableStream.on('data', (chunk) => {
    completeCh = chunk;
    ch = completeCh.split('\n');
    console.log(ch);
  });
}
/*async function countStudents(path) {
  try {
    content = await fs.readFile(path, 'utf-8');
    console.log(content);
  } catch(error) {
    console.log(error);
  }
}*/

module.exports = countStudents;
