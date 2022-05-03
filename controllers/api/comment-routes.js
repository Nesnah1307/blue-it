const router = require('express').Router();
const { Comments } = require('../../models')
const allowed = require('../../utils/auth');

router.get('/', (req, res) => {
    Comments.findAll()
    .then(dbCommentsData => res.json(dbCommentsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});