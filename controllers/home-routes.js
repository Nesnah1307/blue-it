const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/questions/:id', (req, res) => {
  res.render('single-post');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

router.get('/addQuestion', (req, res) => {
  res.render('addQuestion')
})

router.get('/editQuestion', (req, res) => {
  res.render('editQuestion')
})



module.exports = router;
