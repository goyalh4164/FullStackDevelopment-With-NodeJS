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
app.get('/user/login',(req,res)=>{
    res.send("Welcome to the login page")
})
// POST ->Login Page
app.post('/user/login', (req, res) => {
    const { email, password } = req.body;
    // Find the user by email
    User.findOne({ email })
      .then((user) => {
        // Check if user exists
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        // Compare the provided password with the stored hashed password
        bcrypt.compare(password, user.password)
          .then((isMatch) => {
            if (isMatch) {
              // Passwords match, user is authenticated
              res.status(200).json({ message: 'Login successful' });
            } else {
              // Passwords do not match
              res.status(401).json({ message: 'Invalid password' });
            }
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
  // Clear the "token" cookie by setting it to an empty value and setting the expiration to a past date
  res.cookie('token', '', { expires: new Date(0) });
  res.json({ message: 'Logout successful' });
});

// -----------------------------------USER APIS--------------------------------------------






// Define a route
app.get('/', (req, res) => {
  res.send('Welcome to the NoteVault'); 
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
