require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;
const friends = [
  { id: 1, name: 'Shaun' },
  { id: 2, name: 'Megan' },
  { id: 3, name: 'Pere' },
]

app.use(express.static(__dirname + '/client/build'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + './client/build/index.html')
})

app.get('/api/friends', (req, res, next) => {
  res.json(friends);
});

app.listen(port, () => {
  console.log('listening on ' + port);
});