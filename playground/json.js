// const object = {
//     name: 'Lindsey'
// };

// const stringObj = JSON.stringify(object);
// console.log(typeof stringObj);
// console.log(stringObj);

// const personString = '{"name": "Lindsey", "age": 38}';
// const person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

const originalNote = {
    title: 'Some title',
    body: 'Some body'
};

const originalNoteString = JSON.stringify(originalNote); // to write to file, it must be a string
fs.writeFileSync('notes.json', originalNoteString); // filename first, content second
const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);