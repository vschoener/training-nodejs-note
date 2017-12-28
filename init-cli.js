
const yargs = require('yargs');

module.exports = () => {
    const titleOption = {
        describe: 'Title of the note (used as a key)',
        demand: true,
        alias: 't'
    };
    
    const argv = yargs
        .command('add', 'Add a new note', {
            title: titleOption,
            body: {
                describe: 'Body of the note',
                demand: true,
                alias: 'b'
            }
        })
        .command('list', 'List all notes')
        .command('read', 'Read a note', {
            title: titleOption
        })
        .command('remove', 'Remove a note', {
            title: titleOption
        })
        .help()
    ;

    return yargs;
}
