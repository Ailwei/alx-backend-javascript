process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.trim()}\n`);
    process.stdout.write('This important software is now closing\n');
    process.stdin.pause();
});
