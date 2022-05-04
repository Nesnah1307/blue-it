const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Star, Type, Language, Difficulty, Encounter } = require('../../models');

router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'post_url',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM star WHERE post.id = star.post_id)'), 'star_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'content', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.put('/star', (req, res) => {
    if (req.session) {
        Post.star({ ...req.body, user_id: req.session.user_id }, { Star, Comment, User })
            .then(updatedStar => res.json(updatedStar))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
});


module.exports = router;