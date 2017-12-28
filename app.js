const yargs = require('./init-cli')();
const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0] || 'help';

if (command == 'add') {
    if (note = notes.addNote(argv.title, argv.body)) {
        console.log('Note added', note);
    } else {
        console.log('Note not added cause already exists');
    }
} else if (command == 'list') {
    let notesList = notes.getList();
    console.log(`Printing ${notesList.length} note(s)`)
    console.log(notesList);
} else if (command == 'read') {
    let note = notes.getNote(argv.title);
    let message = !note ? 'Note was not found' : note;
    console.log(message);
} else if (command == 'remove') {
    let isRemoved = notes.removeNote(argv.title);
    let message = isRemoved ? 'Note was removed' : 'Note not removed';
    console.log(message);
} else {
    console.log('Command not recognized');
}
