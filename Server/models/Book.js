// models/Book.js

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  
  author: {
    type: String,
    required: true
  },
  
  description: {
    type: String,
    required: true
  },
  
  publisher: {
    type: String,
    required: true
  },

  price: {
    type: Date,
    required: true
  }
});

module.exports = Book = mongoose.model('book', BookSchema);