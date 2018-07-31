console.log("Starting app.js");

const fs = require("fs");
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];
console.log(`Command: ${command}`);
//console.log('Process:', process.argv);
console.log('Yargs:', argv);

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Note created!`);
        notes.logNote(note);
    } else {
        console.log(`Note title already in use`);
    }  

} else if (command === 'list') {
    notes.getAll();

} else if  (command === 'read') {
    const note = notes.getNote(argv.title);
    if (note) {
        console.log('Note read!');
        notes.logNote(note); // Can only call this function by specifying it comes from 'notes' file
    } else {
        console.log('Note not found');
    };

} else if (command === 'remove') {
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? 'Note was removed.' : 'Note not found.';
    console.log(message);

} else {
    console.log('Command not recognized');
};
