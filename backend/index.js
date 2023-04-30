const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
require('./config')
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


//////////////////////////////////DATABASE SECTION ////////////////////////////////////////////

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: { type: String },
  fullname: { type: String },
  email: {
    type: String,
    unique: true
  },
  age: { type: Number },


});

const db = mongoose.model('User', userSchema);

///////////////////////////////////////  MIDDLEWARE SECTION  ///////////////////////////////
app.use(cors());
const bodyParser = require('body-parser');




// parse application/json
app.use(bodyParser.json());

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}


///////////////////////////////////// PASSPORT middleware section //////////////////////////
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


////////////////////////////////////////// Passport session section //////////////////////
passport.use(new LocalStrategy({ usernameField: 'email' },
  async function (email, password, done) {
    const user = await db.findOne({ email: email });
    if (!user) {
      return done(null, false, { message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return done(null, false, { message: 'Invalid email or password' });
    }
    return done(null, user);
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

/////////////////////////////////////// API's SECTION ////////////////////////////////////

app.get('/home', isAuthenticated, function (req, res) {
  res.json({ user: req.user });
  console.log(req.user);
});

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.user);
});

app.post('/register', async (req, resp) => {

  // console.log(req.body);

  try {
    const hashed = await bcrypt.hash(req.body.password, 10);
    //const userData = { username: req.body.username, password: hashed };
    const userData = {
      username: req.body.username,
      password: hashed,
      fullname: req.body.fullname,
      email: req.body.email,
      age: req.body.age
    };
    console.log(userData);
    const fluffy = new db(userData);
    await fluffy.save();
    //resp.render('home', { user });
    resp.send("Registration successful")
  } catch (err) {

    console.log("User already exists!");
    resp.send("Enter valid Details!")
    console.log(err);
  }
});

//////////////////////////////////////////////// APi's initialization /////////////////////////////

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
