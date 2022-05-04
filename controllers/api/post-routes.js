const router = require('express').Router();
const req = require('express/lib/request');
const { Post, User, Encounter, Star, Comment, Difficulty, Language } = require('../../models');
// const sequelize = require('../../config');

//select all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'answer',
            'type_id',
            'language_id',
            'difficulty_id',
            'creator_id'
        ],
        include: [
            {
                model: Comment,
            }
        ]
    })
        .then(dbPostData => {
            res.json(dbPostData)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        })
});

//single user post 
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id',
            'title',
            'answer',
            'type_id',
            'language_id',
            'difficulty_id',
            'creator_id'
        ]
    })
        .then(dbPostData => {
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        })
});

//create a post 
router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        answer: req.body.answer,
        user_id: req.body.user_id
    })
        .then(dbPostData => {
            res.json(dbPostData)
        })
        .catch(err => {
            console.log(err)
            res.json(500).json(err)
        });
});

// update a post 
router.put('/:id', (req, res) => {
    Post.update(
        {
            answer: req.body.answer
        },
        {
            where: {
                id: req.body.answer
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post with that id found' })
                return
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//delete post 
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

})

module.exports = router;