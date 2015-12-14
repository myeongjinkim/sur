<<<<<<< HEAD
var express = require('express'),
    todos = require('./todos'),
    User = require('../models/User');
=======
var express = require('express');
>>>>>>> aa854801459c1dd6be67a2fa312b5f48f91b6cd0
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('index');
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.use('/todos', todos);

=======
  res.render('index', { title: 'Express' });
});

>>>>>>> aa854801459c1dd6be67a2fa312b5f48f91b6cd0
module.exports = router;
