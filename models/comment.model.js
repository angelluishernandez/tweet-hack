const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  
  body: {
    type: String, 
    required: true
  }, 
  tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweets', 
    required: true
  }, 
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
    required: true
  }

}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
