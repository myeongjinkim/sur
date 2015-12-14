var express = require('express'),
    Survey = require('../models/Survey');
var router = express.Router();

//설문조사 출력 화면
router.get('/', function(req, res, next) {
  Survey.find({}, function(err, surveys) {
    if (err) {
      return next(err);
    }
    res.render('surveys/index', {surveys: surveys});
  });
});
