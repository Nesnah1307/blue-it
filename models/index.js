const Comment = require('./comment');
const Difficulty = require('./difficulty');
const Encounter = require('./encounter');
const Language = require('./language');
const Post = require('./post');
const Star = require('./star');
const Type = require('./type');
const User = require('./user');


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
Difficulty.hasMany(Post, {
  foreignKey: 'difficulty_id',
  onDelete: 'SET NULL',
});

Post.belongsTo(Difficulty, {
  foreignKey: 'difficulty_id',
});

// Post - Type
Type.hasMany(Post, {
  foreignKey: 'type_id',
  onDelete: 'SET NULL',
});

Post.belongsTo(Type, {
  foreignKey: 'type_id',
});

// Post - Language
Language.hasMany(Post, {
  foreignKey: 'language_id',
  onDelete: 'SET NULL',
});

Post.belongsTo(Language, {
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
