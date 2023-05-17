import express from 'express';
const app = express();
const port = 3000; // Change this to the desired port number

// Define a route
app.get('/', (req, res) => {
  res.send('Welcome to the NoteVault'); 
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
