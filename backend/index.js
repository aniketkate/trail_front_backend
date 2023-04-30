const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
require('./config')

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
  age: {type:Number},


});

const db = mongoose.model('User', userSchema);

///////////////////////////////////////  MIDDLEWARE SECTION  ///////////////////////////////
app.use(cors());
const bodyParser = require('body-parser');




// parse application/json
app.use(bodyParser.json());


/////////////////////////////////////// API's SECTION ////////////////////////////////////


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
