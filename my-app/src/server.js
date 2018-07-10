const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const api_routes = require('./routes/api_routes');
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://JD:password123@ds117605.mlab.com:17605/test_db', { useNewUrlParser: true });

const app = express();

// Tell Express where our front end folder is
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// api_routes(app);

// app.get('/user', (req, res) => {
//   res.send('Hello from the backend!');
// });

app.listen(port, () => console.log(`Listening on port ${port}`));