process.stdin.setEncoding('utf-8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', function () {
  name = process.stdin.read();
  process.stdout.write('Your name is:', name);
});
process.stdin.on('end', function () {
  console.log('This important software is now closing');
});
