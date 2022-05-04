const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Star, Type } = require('../../models');
const allowed = require('../../utils/auth');


  
  module.exports = router;