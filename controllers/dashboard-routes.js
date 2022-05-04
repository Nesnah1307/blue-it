const router = require('express').Router();
const { Post, User, Comment, Star, Type, Language, Difficulty } = require('../../models');
router.get('/', (req, res) => {
  res.render('dashboard');
});

router.get('/add-question', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('add-question', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/edit-question', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('edit-question', {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
