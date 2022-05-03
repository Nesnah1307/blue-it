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

router.post('/', allowed, (req, res) => {
    if (req.session) {
        Comments.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        })
        .then(dbCommentsData => res.json(dbCommentsData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

router.delete('/:id', allowed, (req, res) => {
    if (req.session) {
        Comments.destroy({
            where: {
                id:  req.params.id
            }
        })
        .then(dbCommentsData => {
            if (!dbCommentsData) {
                res.status(404).json({ message: 'No comment found with this id' });
                return;
            }
            res.json(dbCommentsData);  
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
});


module.exports = router;