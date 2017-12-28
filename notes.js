const fs = require('fs');
const noteFile = "./note.json";

// Exercise using sample functions object access
var fetchNotes = () => {
    let notes = [];
    try {
        var notesAsText = fs.readFileSync(noteFile);
    } catch (e) {
        console.error(e);
    }
    
    try {
        notes = JSON.parse(notesAsText);
    } catch(e) {}

    return notes;
};

var saveNotes = (notes) => {
    try {
        fs.writeFileSync(noteFile, JSON.stringify(notes));
    } catch(e) {
        console.error(`Can't save notes`, e);
        return false;
    }

    return true;
};

module.exports = {
    addNote: (title, body) => {
        let notes = fetchNotes();
        let note = {
            title,
            body
        };

        let duplicatesNotes = notes.filter((note) => note.title == title);
        if (!duplicatesNotes.length) {
            notes.push(note);
            return saveNotes(notes) ? notes : null;
        }

        return null;
    },
    getList: () => {
        return fetchNotes();
    },
    getNote: (title) => {
        var notes = fetchNotes();
        let note = notes.filter((note) => note.title == title);

        return note.length > 0 ? note[0] : null;
    },
    removeNote: (title) => {
        var notes = fetchNotes();
        let filteredNotes = notes.filter((note) => note.title != title);

        return notes.length != filteredNotes.length 
            && saveNotes(filteredNotes)
        ;
    },
    dumpNote: (note) => console.log(note)
};
