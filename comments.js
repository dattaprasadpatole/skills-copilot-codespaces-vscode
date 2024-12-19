// Create web server
const express = require('express');
const app = express();

// Create a new comment
app.post('/comments', (req, res) => {
  res.send('You have created a new comment!');
});

// Get all comments
app.get('/comments', (req, res) => {
  res.send('You have requested all comments!');
});

// Get a specific comment
app.get('/comments/:id', (req, res) => {
  res.send('You have requested a specific comment!');
});

// Update a specific comment
app.put('/comments/:id', (req, res) => {
  res.send('You have updated a specific comment!');
});

// Delete a specific comment
app.delete('/comments/:id', (req, res) => {
  res.send('You have deleted a specific comment!');
});

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});