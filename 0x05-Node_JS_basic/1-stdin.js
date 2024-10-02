process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
  console.log('Welcome to Holberton School, what is your name?');
  const name = process.stdin.read()
  console.log('Your name is:', name)
});

process.stdin.on('end', function () {
  console.log('This important software is now closing');
});
