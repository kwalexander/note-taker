const express = require('express');
const router = require('express').Router();
const { notes } = require('../../db/db.json');
const fs = require("fs");
const path = require("path");

router.get('/notes', (req, res) => {
    return res.json(notes);
});

function createNewNote(body, notesArray) {

    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}

function validateNote() {
    // if (!notes.title || typeof notes.title !== 'string') {
    //     return false;
    // }
    // if (!notes.text || typeof notes.text !== 'string') {
    //     return false;
    // }
    return true;
}

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    // add note to JSON file and the note array in this feature
    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;