const fs = require("fs");
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
    describe: 'Title of note',
    demand: true, // This means user MUST provide title when using add command
    alias: 't' // Allows shortcut command in terminal
};
const bodyOptions = {
    describe: 'Body text',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
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
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)!`);
    allNotes.forEach(note => notes.logNote(note));

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
