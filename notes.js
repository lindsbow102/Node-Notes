console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
    let notes = [];
    const note = {
        title,
        body
    };

    // Load file
    try {
        const notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    // To save file, first check if title is a duplicate or not
    const duplicateNotes = notes.filter((note) => note.title === title); // if true, item will be kept in array

    // Save file
    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));  // Data must be string to write to file
    }    
};

const getAll = () => {
    console.log(`Getting all notes`);
};

const getNote = (title) => {
    console.log(`Getting note: ${title}`);
};

const removeNote = (title) => {
    console.log(`Removing note: ${title}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};

