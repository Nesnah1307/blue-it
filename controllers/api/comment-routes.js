const router = require('express').Router();
const { Comment } = require('../../models')
const allowed = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbCommentsData => res.json(dbCommentsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    if (req.session) {
        Comment.create({
            content: req.body.content,
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
        Comment.destroy({
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