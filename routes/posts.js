var express = require('express'),
    Post = require('../models/Post');
var router = express.Router();

/* 설문목록 출력 화면 */
router.get('/', function(req, res, next) {
  Post.find({}, function(err, posts) {
    if (err) {
      return next(err);
    }
    res.render('posts/index', {posts: posts});
  });
});

/*술문제작 화면 */
router.get('/new', function(req, res, next) {
  Post.findById(req.params.id, function(err, post) {
    if (err) {
      return next(err);
    }
    Survey.find({post: post.id}, function(err, surveys) {
        if (err) {
          return next(err);
        }
        res.render('posts/new', {post: post, surveys: surveys});
    });
  });
});

/*설문 수정 화면 */
router.get('/:id/edit', function(req, res, next) {
  Post.findById({_id: req.params.id}, function(err, post) {
    if (err) {
      return next(err);
    }
    Survey.find({post: post.id}, function(err, surveys) {
        if (err) {
          return next(err);
        }
        res.render('posts/edit', {post: post, surveys: surveys});
    });
  });
});

/*설문 수정후 저장 기능 */
router.put('/:id', function(req, res, next) {
  Post.findById({_id: req.params.id}, function(err, post) {
    if (err) {
      return next(err);
    }
    if (!post) {
      return res.redirect('back');
    }
    post.email = req.body.email;        //수정내용
    post.password = req.body.password;
    post.title = req.body.title;
    post.content = req.body.content;
    Survey.find({post: post.id}, function(err, surveys) {
      if (err) {
        return next(err);
      }
      surveys.question = req.body.question;
      surveys.option1 = req.body.option1;
      surveys.option2 = req.body.option2;
      surveys.option3 = req.body.option3;
      surveys.option4 = req.body.option4;
      surveys.option5 = req.body.option5;

    });
    post.save(function(err) {
      if (err) {
        return next(err);
      }
      res.redirect('/posts');
    });
  });
});

/*설문 섹제 기능*/
router.delete('/:id', function(req, res, next) {
  Post.findOneAndRemove({_id: req.params.id}, function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/posts');
  });
});


/*설문내용 출력 화면 */
router.get('/:id', function(req, res, next) {
  Post.findById(req.params.id, function(err, post) {
    if (err) {
      return next(err);
    }
    Survey.find({post: post.id}, function(err, surveys) {
        if (err) {
          return next(err);
        }
        res.render('posts/show', {post: post, surveys: surveys});
    });
  });
});

/*설문 작성후 저장 기능 */
router.post('/', function(req, res, next) {

    var newPost = new Post({
      title: req.body.title,
      email: req.body.email,
      content: req.body.content,
      password: req.body.password,
    });

    newPost.save(function(err) {
      if (err) {
        return next(err);
      } else {
        res.redirect('/posts');
      }
    });
});





module.exports = router;
