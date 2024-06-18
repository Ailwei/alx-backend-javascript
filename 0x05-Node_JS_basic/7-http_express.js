const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n');
        for (let i = 0; i < lines.length; i++) {
          if (lines[i]) {
            length++;
            const field = lines[i].split(',');
            const firstname = field[0];
            const fieldname = field[3];

            if (students[fieldname]) {
              students[fieldname].push(firstname);
            } else {
              students[fieldname] = [firstname];
            }

            if (fields[fieldname]) {
              fields[fieldname]++;
            } else {
              fields[fieldname] = 1;
            }
          }
        }

        let output = `Number of students: ${length - 1}\n`;

        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }

        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
