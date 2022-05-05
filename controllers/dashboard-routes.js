const router = require('express').Router();
const { Post, User, Comment, Star, Type, Language, Difficulty } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
router.get('/', withAuth, (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  Post.findAll({
    where: {
      // use the ID from the session
      creator_id: req.session.user_id,
    },
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
      // return res.json(posts);
      res.render('dashboard', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/questions/:id', withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'title', 'answer'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'content', 'created_at'],
        include: {
          model: User,
          attributes: ['id', 'username', 'avatar'],
        },
      },
      {
        model: Type,
        attributes: ['name'],
      },
      {
        model: Language,
        attributes: ['name'],
      },
      {
        model: Difficulty,
        attributes: ['name'],
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

      res.render('single-post', {
        ...post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/add-question', withAuth, (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('add-question', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/edit-question/:id', withAuth, (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  Post.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      const data = dbPostData.get({ plain: true });
      res.render('edit-question', {
        ...data,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
