const express=require('express');
const {signup, login, varifyToken, getUser}=require('../controllers/user-controller');


const router=express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.get('/user', varifyToken, getUser)

module.exports=router;