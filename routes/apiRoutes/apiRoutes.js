const express = require('express');
const router = require('express').Router();
const { notes } = require('../../db/db.json');
const fs = require("fs");
const path = require("path");

router.get('/notes', (req, res) => {
    return res.json(notes);
});

router.post('/notes', (req, res) => {

    function validateNote() {
        if (!notes.title || typeof note.title !== 'string') {
            return false;
        }
        if (!notes.text || typeof note.text !== 'string') {
            return false;
        }
        return true;
    }

    function createNewNote(body, notesArray) {
        const note = body;
        notesArray.push(note);
        fs.writeFile(
            path.join(__direname, '../../db/db.json'),
            JSON, stringify({ notes: notesArray }, null, 2)
        );

        return note;
    }

    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        // add note to JSON file and the note array in this feature
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;