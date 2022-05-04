const router = require('express').Router();
router.get('/', (req, res) => {
  res.render('dashboard');
});

router.get('/addQuestion', (req, res) => {
  res.render('addQuestion');
});

router.get('/editQuestion', (req, res) => {
  res.render('editQuestion');
});

module.exports = router;
