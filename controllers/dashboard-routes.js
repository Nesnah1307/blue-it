const router = require('express').Router();
router.get('/', (req, res) => {
  res.render('dashboard');
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
