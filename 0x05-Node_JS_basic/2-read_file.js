const fs = require('fs');

function countStudents(fileName) {
    const students = {};
    const fields = {};
    let length = 0;

    try {
        const content = fs.readFileSync(fileName, 'utf-8');
        const lines = content.trim().split('\n');

        for (let i = 0; i < lines.length; i++) {
            if (lines[i]) {
                length += 1;
                const field = lines[i].split(',');

                if (students[field[3]]) {
                    students[field[3]].push(field[0]);
                } else {
                    students[field[3]] = [field[0]];
                }

                if (fields[field[3]]) {
                    fields[field[3]] += 1;
                } else {
                    fields[field[3]] = 1;
                }
            }
        }

        const numStudents = length - 1; // Exclude header line
        console.log(`Number of students: ${numStudents}`);

        for (const key in fields) {
            if (key !== 'field') {
                console.log(`Number of students in ${key}: ${fields[key]}. List: ${students[key].join(', ')}`);
            }
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
