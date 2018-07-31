console.log('Starting notes.js');

const fs = require('fs');

// Load file
const fetchNotes = () => {    
    try {
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return []; // If no notes, return empty array
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));  // Data must be string to write to file
};

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = {
        title,
        body
    };
    // To save file, first check if title is a duplicate or not
    const duplicateNotes = notes.filter((note) => note.title === title); // if true, item will be kept in array

    // Save file
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;        
    }  
};

const getAll = () => {
    console.log(`Getting all notes`);
};

const getNote = (title) => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0]; // We want to return first item in filteredNotes array
};

const removeNote = (title) => {
    let notes = fetchNotes();
    const filteredNotes = notes.filter((note) => note.title !== title); // if true, item will be kept in array
    console.log(filteredNotes);
    saveNotes(filteredNotes); // Save new notes array

    return notes.length !== filteredNotes.length; // Checking that note was actually removed
};

const logNote = (note) => {
    console.log('-------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};

