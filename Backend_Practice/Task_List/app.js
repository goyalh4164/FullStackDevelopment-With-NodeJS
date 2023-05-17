import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
const app = express();

app.use(cookieParser());
app.use(express.json());

// Connected with the database
mongoose.connect("mongodb://127.0.0.1:27017/tasklist").then(()=>{
    console.log("Database connected");
}).catch(()=>{
    console.log("Database Server Down");
})

// User Schema
const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    }
  });
  

const User = mongoose.model('User', userSchema);

// Middleware function for authentication
function isAuthenticated(req, res, next) {
    // Check if user is authenticated
    const {token} = req.cookies;
    console.log(token)
    User.findOne({_id : token}).then(
        isValidToken => {
            console.log(isValidToken)
            if(isValidToken){
                return next()
            }
            else{
                console.log("invalid token")
                res.redirect("/login")
            }
        }
    )
    .catch(error => {
        console.error('Server Down', error);
        res.send("Server Down")
    });
  }
  
  // -------------------------------------------------------------USER-----------------------------------------------------------
  
  // Route handler using the isAuthenticated middleware
  app.get('/', isAuthenticated, (req, res) => {
    // Code for handling the authenticated request
    res.send("you are logged in")
  });

//   This method is just to create random user's for testing you can remove it also
  app.get("/create",(req,res)=>{
    const {email,password} = req.body;
    const newUser = new User({
        email: email,
        password: password
    });
    newUser.save()
    .then(savedUser => {
        console.log('User saved successfully:', savedUser);
        res.send('User saved successfully')
    })
    .catch(error => {
        console.error('Error saving user:', error);
        res.send("User exist already")
    });
})

// Login Page
app.get("/login",(req,res)=>{
    res.send("Welcome to the login page")
})

// login page post request
app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    console.log(req.body)
    // checking whether the mail exist in the DB
    User.findOne({email}).then(user=>{
        if(user){
            console.log(user)
            // checking the password is correct or not
            if(user.password === password ){
                // setting the cookie for one hour having the user_id
                res.cookie('token', user._id, {
                    maxAge: 3600000, // Cookie expiration time in milliseconds (1 hour in this example)
                    httpOnly: true, // Cookie is inaccessible to JavaScript on the client side if true
                });
                res.send("set the cookie and redirect the user to the login page")
            }
            else{
                // if the password given is wrong
                res.send("wrong password")
            }
        }
        else{
            console.log("No such Email Exist.Login First")
            res.send("No such Email Exist.Login First")
        }
    }).catch(error => {
        console.error('Server Down', error);
        res.send("Server Down")
    });
})

// Register Page for request handling
app.get("/register",(req,res)=>{
    res.send("You can register here")
})

// register page for POST request and User creation
app.post("/register",(req,res)=>{
    console.log(req.body)
    const {email,password} = req.body;
    console.log(email)
    console.log(password)
    User.findOne({ email })
    .then(user => {
        if (user) {
            console.log('User found:', user);
            res.send("User already exist..Login Directly");
        } 
        else {
            console.log('Creating a new User');
            // Creating a new User
            const newUser = new User({
                email: email,
                password: password
            });
            // Saving it to the DB
            newUser.save() .then(savedUser => {
                console.log('User saved successfully:', savedUser);
                res.send('User saved successfully and Login Now')
                console.log("redirect to login page")
            })
            .catch(error => {
                console.error('Error saving user:', error);
                res.send("User exist already")
            });
        }
    })
    .catch(error => {
        console.error('Error finding user:', error);
    });
})

// Logout request
app.get("/logout", (req, res) => {
    console.log("Removed the cookie");
    
    // Clear the "token" cookie
    res.clearCookie('token');
  
    // Send the response with the cleared cookie
    res.redirect("/");
  });
// -------------------------------------------------------------USER-----------------------------------------------------------

app.listen(3000,()=>{
    console.log("Server connected");
})