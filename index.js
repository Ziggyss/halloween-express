const express = require("express");
const cors = require("cors");

const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;
const friends = [
  { id: 1, name: 'Shaun' },
  { id: 2, name: 'Megan' },
  { id: 3, name: 'Pere' },
]

app.use(express.json());
app.use(cors());

app.get('/api/friends', (req, res, next) => {
  res.json(friends);
});

app.listen(port, () => {
  console.log('listening on ' + port);
});