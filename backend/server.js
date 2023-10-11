const express = require('express');
const app = express();
const port = 3000;
const mongoDbUrl = "mongodb://localhost:27017/dogs";
const cors = require('cors');
app.use(cors());

// Set the view engine to EJS
app.set('view engine', 'ejs');

const mongoose = require('mongoose');
mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

// Import Dog model and schema
const Dog = require('./models/dog');

// Define a route to fetch all dogs from the database
app.get('/dogs', (req, res) => {
  Dog.find({}, (err, dogs) => {
    if (err) {
      console.error('Error retrieving dogs from MongoDB:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(dogs);
    }
  });
});

app.get('/', (req, res) => {
  Dog.find({}, (err, dogs) => {
    if (err) {
      console.error('Error retrieving dogs from MongoDB:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.render('dogs', { dogs });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
