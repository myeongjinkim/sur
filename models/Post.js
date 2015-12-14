var mongoose = require('mongoose'),
  moment = require('moment'),
    Schema = mongoose.Schema;

var schema = new Schema({

  title: {type: String, required: true},
  email: {type: String, required: true, index: true, unique: true, trim: true},
  password: {type: String},
  numSurvey: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now}
});

var Post = mongoose.model('Post', schema);

module.exports = Post;
