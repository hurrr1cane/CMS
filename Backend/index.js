const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3005;

// Запуск сервера Express
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Підключення до MongoDB
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Could not connect to MongoDB', err);
  }
}

connectToMongoDB();
