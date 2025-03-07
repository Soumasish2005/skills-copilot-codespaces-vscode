// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Create web server
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Read comments from file
function readComments() {
    try {
        return JSON.parse(fs.readFileSync('comments.json', 'utf8'));
    } catch (err) {
        return [];
    }
}

// Write comments to file
function writeComments(comments) {
    fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
}

// Get comments
app.get('/comments', (req, res) => {
    const comments = readComments();
    res.json(comments);
});

// Create comment
app.post('/comments', (req, res) => {
    const comments = readComments();
    comments.push(req.body);
    writeComments(comments);
    res.status(201).end();
});

// Start web server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});