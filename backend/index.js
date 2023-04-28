const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  console.log(req.body);
  res.send('Registration Successful');
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
