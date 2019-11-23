const Tweets = require("../models/tweet.model")
const mongoose = require("mongoose");

module.exports.index = (req, res, next) => {
  Tweets.find()
  .limit(20)
  .sort({ createdAt: -1})
  .populate("user")
  .then(
    tweets => {
      res.render("users/index", { tweets });
      //res.send(tweets)
    }
  )
  .catch(next)
  
};