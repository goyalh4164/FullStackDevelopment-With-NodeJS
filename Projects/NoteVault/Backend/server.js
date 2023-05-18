import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

mongoose.connect('mongodb://127.0.0.1:27017/NoteVault')
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
  
const app = express();
const port = 3000; // Change this to the desired port number

// Middleware to read the body data in json format
app.use(express.json());
// Middleware to parse cookies
app.use(cookieParser());

// -------------------------------------USER-----------------------------------------------
// --------------------------------USER SCHEMA AND MODEL ----------------------------------
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

// --------------------------------USER SCHEMA AND MODEL ----------------------------------

// --------------------------------NOTEBOOK SCHEMA AND MODEL-------------------------------

const notebookSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Notebook = mongoose.model('Notebook', notebookSchema);

// --------------------------------NOTEBOOK SCHEMA AND MODEL-------------------------------

// ---------------------------------------MIDDLEWARES--------------------------------------

const isAuthenticated = (req,res,next) =>{
  const token = req.cookies.token;
  if (token) {
    // Verify and decode the token
    console.log(token)
    const decoded = jwt.verify(token, 'your_secret_key');
    // Access the decrypted data from the token
    const { userId } = decoded;
    // Verifying the user ID with the database
    User.findOne({_id : userId}).then((isFound)=>{
      if(isFound){
        console.log("User is Authorzied");
        // setting the userID so that any authrized connection can use it
        req.userID = userId;
        next();
      }
      else{
        res.send("Internal server error")
      }
    }).catch((error) => {
      console.error('Server down', error);
      res.status(500).json({ message: 'An error occurred while token verification' });
    });
  } else {
    // Cookie does not exist
    console.log('Cookie not found')
    res.redirect("/")
  }
}

// ---------------------------------------MIDDLEWARES--------------------------------------


// -----------------------------------USER APIS--------------------------------------------

// GET  Register Page 
app.get("/user/register",(req,res)=>{
    res.send("Welcome to the registration page");
})

// POST -Registering User in the database
app.post('/user/register', (req, res) => {
    const { name, email, password } = req.body;
  
    // Check if user with the same email already exists
    User.findOne({ email })
      .then((existingUser) => {
        if (existingUser) {
          return res.status(400).json({ message: 'Email already registered' });
        }

        // Hash the password
        bcrypt.hash(password, 10)
          .then((hashedPassword) => {
            // Create a new user with hashed password
            const user = new User({
              name,
              email,
              password: hashedPassword,
            });
  
            // Save the user to the database
            user.save()
              .then(() => {
                // Generate JWT token with user ID
                const token = jwt.sign({ userId: user._id }, 'your_secret_key');
  
                // Set the token as a cookie
                res.cookie('token', token, { httpOnly: true });
  
                res.status(201).json({ message: 'User registered successfully' });
              })
              .catch((error) => {
                console.error('Error registering user:', error);
                res.status(500).json({ message: 'An error occurred while registering user' });
              });
          })
          .catch((error) => {
            console.error('Error hashing password:', error);
            res.status(500).json({ message: 'An error occurred while hashing password' });
          });
      })
      .catch((error) => {
        console.error('Error checking existing user:', error);
        res.status(500).json({ message: 'An error occurred while registering user' });
      });
  });

// GET -> Login Page
app.get('/user/login',isAuthenticated,(req,res)=>{
  console.log(req.userID);
  res.send("Welcome to the login page")
})
// POST ->Login Page
app.post('/user/login', (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Compare the provided password with the hashed password in the database
      bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
          }

          // Generate JWT token
          const token = jwt.sign({ userId: user._id }, 'your_secret_key');

          // Set the token as a cookie
          res.cookie('token', token, { httpOnly: true });

          res.json({ message: 'Login successful' });
        })
        .catch((error) => {
          console.error('Error comparing passwords:', error);
          res.status(500).json({ message: 'An error occurred while comparing passwords' });
        });
    })
    .catch((error) => {
      console.error('Error finding user:', error);
      res.status(500).json({ message: 'An error occurred while finding user' });
    });
});  

// Logout API endpoint
app.get('/user/logout', (req, res) => {
  // Clear the "token" cookie by providing the cookie name
  res.clearCookie('token');
  res.json({ message: 'Logout successful' });
});

// -----------------------------------USER APIS--------------------------------------------

// ----------------------------------Notebook APIS -----------------------------------------

// GET - Show all notes from the DB
app.get('/note/show', isAuthenticated, (req, res) => {
  const userId = req.userID; // Assuming the authenticated user ID is available in req.user._id
  console.log(userId)
  // Find all notes with the user ID
  Notebook.find({ user: userId })
    .then((notes) => {
      res.json(notes);
    })
    .catch((error) => {
      console.error('Error fetching notes:', error);
      res.status(500).json({ message: 'An error occurred while fetching the notes' });
    });
});

// GET - ADD the node
app.get("/note/add",(req,res)=>{
  res.send("Enter the tag and description in the modal")
})

// POST - Add the note in the DB of the current user
app.post('/note/add', isAuthenticated, (req, res) => {
  const { tag, description } = req.body;
  const userId = req.userID; // Assuming you have set the user object in req.user during authentication
  // Create a new notebook document
  const notebook = new Notebook({
    tag,
    description,
    user: userId
  });
  // Save the notebook to the database
  notebook.save()
  .then(() => {
    res.status(201).json({ message: 'Note added successfully' });
  })
  .catch((error) => {
    console.error('Error adding note:', error);
    res.status(500).json({ message: 'An error occurred while adding the note' });
  });
});

// DELETE - Delete a note
app.delete('/note/delete/:noteId', isAuthenticated, (req, res) => {
  const userId = req.userID; // Assuming the authenticated user ID is available in req.userID
  const noteId = req.params.noteId; // Get the note ID from the request parameters

  // Find the note by ID and user ID
  Notebook.findOneAndDelete({ _id: noteId, user: userId })
    .then((deletedNote) => {
      if (!deletedNote) {
        // Note not found or not authorized to delete
        return res.status(404).json({ message: 'Note not found or unauthorized' });
      }
      res.json({ message: 'Note deleted successfully' });
    })
    .catch((error) => {
      console.error('Error deleting note:', error);
      res.status(500).json({ message: 'An error occurred while deleting the note' });
    });
});

// PUT - Update a note
app.put('/note/update/:noteId', isAuthenticated, (req, res) => {
  const userId = req.userID; // Assuming the authenticated user ID is available in req.userID
  const noteId = req.params.noteId; // Get the note ID from the request parameters
  const { tag, description } = req.body; // Get the updated tag and description from the request body

  // Find the note by ID and user ID
  Notebook.findOneAndUpdate({ _id: noteId, user: userId }, { tag, description }, { new: true })
    .then((updatedNote) => {
      if (!updatedNote) {
        // Note not found or not authorized to update
        return res.status(404).json({ message: 'Note not found or unauthorized' });
      }

      res.json({ message: 'Note updated successfully', note: updatedNote });
    })
    .catch((error) => {
      console.error('Error updating note:', error);
      res.status(500).json({ message: 'An error occurred while updating the note' });
    });
});


// ----------------------------------Notebook APIS -----------------------------------------

// GET - ROOT API
app.get('/', (req, res) => {
  res.send('Welcome to the NoteVault'); 
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
