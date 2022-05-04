const router = require('express').Router();
const { route } = require('express/lib/router');
const sequelize = require('../config/connection');
const { Post, User, Comment, Star, Type, Language, Difficulty } = require('../models');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'answer',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM star WHERE post.id = star.post_id)'), 'star_count'],
      [sequelize.literal('(SELECT COUNT(*) FROM encounter WHERE post.id = encounter.post_id)'), 'encounter_count'],
    ],
    include: [
      {
        model: Comment,
        attributes: ['content', 'user_id'],
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

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/questions/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'title', 'answer', 'type_id', 'language_id', 'difficulty_id', 'creator_id'[(sequelize.literal('(SELECT COUNT(*) FROM questions WHERE post.id = questions.post_id)'), 'questions_count')]],
    include: [
      {
        model: Comment,
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: Type,
        attributes: ['id', 'name'],
      },
      {
        model: Language,
        attributes: ['id', 'name'],
      },
      {
        model: Difficulty,
        attributes: ['id', 'name'],
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render('single-post.handlebars', {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
