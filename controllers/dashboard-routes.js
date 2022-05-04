const router = require('express').Router();
const { Post, User, Comment, Star, Type, Language, Difficulty } = require('../models');

router.get('/', (req, res) => {
  Post.findAll({
    where: {
      // use the ID from the session
      creator_id: 1,
    },
    attributes: ['id', 'title', 'answer', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['content', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: Type,
        attributes: ['name'],
      },
      {
        model: User,
        attributes: ['username'],
      },
      {
        model: Difficulty,
        attributes: ['name'],
      },
      {
        model: Language,
        attributes: ['name'],
      },
    ],
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/addQuestion', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('addQuestion');
});

router.get('/editQuestion', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('editQuestion');
});

module.exports = router;
