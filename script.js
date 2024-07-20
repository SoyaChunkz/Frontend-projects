const express = require('express');
const path = require('path');
const app = express();

// Define routes to serve HTML files from the 'views' directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/proj1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'proj1.html'));
});

app.get('/proj2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'proj2.html'));
});

app.get('/proj3', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'proj3.html'));
});

app.get('/error', (req, res) => {
    throw new Error('SORRY | SOMETHING WENT WRONG');
});

// Error handling middleware
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.sendFile(path.join(__dirname, 'views', 'error.html')); // Serve 'error.html'
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
