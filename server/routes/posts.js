const express = require('express')
const {getPosts, createPost}=require('../controllers/posts.js');
// const {varifyToken} = require('../controllers/user-controller.js')

const router = express.Router();

router.get('/',  getPosts);
router.post('/',  createPost);

module.exports=router;