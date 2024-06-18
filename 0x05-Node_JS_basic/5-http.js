const http = require('http');
const { readFile } = require('fs').promises;

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
        try {
            const data = await readFile('database.csv', 'utf-8');
            const students = processData(data);
            res.end(`This is the list of our students\n${students}`);
        } catch (error) {
            res.end('Cannot load the database\n');
        }
    } else {
        res.end('Endpoint not found\n');
    }
});

function processData(data) {
    const lines = data.trim().split('\n');
    const students = lines.map(line => {
        const [firstname, lastname, age, field] = line.split(',');
        return `${firstname}`;
    }).join(', ');
    return students;
}

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
