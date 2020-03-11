const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    const notes = loadNotes()

    console.log(chalk.green('Your notes are:'))
    notes.forEach(note => console.log(note.title));
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find(note => note.title === title)

    if (duplicateNote) {
        console.log(chalk.red.inverse('This is a duplicate'))
    } else {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note was added'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(note => note.title !== title)

    if(duplicateNotes.length != notes.length) {
        saveNotes(duplicateNotes)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.green.inverse('No note found!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find(note => note.title === title)

    if (note) {
        console.log(chalk.yellow(note.title))
        console.log(note.body)
    } else {
console.log(chalk.red('Unable to find the note'))
    }
}

const loadNotes = () => {
    try {
        const dataJSON = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}