const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Customize a version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Lists out all notes',
    handler() {
        notes.getNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    builder: {
        title: {
            describe: 'Title note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// console.log(yargs.argv)
yargs.parse()