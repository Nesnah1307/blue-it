const { associations } = require('./Comment');
const Comment = require('./Comment');
const Difficulty = require('./Difficulty');
const Encounter = require('./Encounter');
const Language = require('./Language');
const Post = require('./Post');
const Star = require('./Star');
const Type = require('./Type');
const User = require('./User');

// User - Post
User.hasMany(Post, {
  foreignKey: 'creator_id',
  onDelete: 'SET NULL',
});

Post.belongsTo(User, {
  foreignKey: 'creator_id',
});

User.belongsToMany(Post, {
  through: Encounter,
  as: 'encountered_post',
  foreignKey: 'user_id',
});

Post.belongsToMany(User, {
  through: Encounter,
  as: 'encountered_post',
  foreignKey: 'post_id',
});

User.belongsToMany(Post, {
  through: Star,
  as: 'starred_post',
  foreignKey: 'user_id',
});

Post.belongsToMany(User, {
  through: Star,
  as: 'starred_post',
  foreignKey: 'post_id',
});

// Post - Comment 
Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});


// User - Comment 
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// Post - Difficulty 
Post.hasOne(Difficulty, {
  foreignKey: 'difficulty_id',
  onDelete: 'SET NULL',
});

Difficulty.belongsTo(Post, {
  foreignKey: 'difficulty_id',
});

// Post - Type 
Post.hasOne(Type, {
  foreignKey: 'type_id',
  onDelete: 'SET NULL',
});

Type.belongsTo(Post, {
  foreignKey: 'type_id',
});

// Post - Language 
Post.hasOne(Language, {
  foreignKey: 'language_id',
  onDelete: 'SET NULL',
});

Language.belongsTo(Post, {
  foreignKey: 'language_id',
});






module.exports = {
  Comment,
  Difficulty,
  Encounter,
  Language,
  Post,
  Star,
  Type,
  User,
};
