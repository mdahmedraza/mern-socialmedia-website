
const PostMessage = require('../model/postMessage.js');
/*
export const getPosts=async(req, res, next)=>{
    try{
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({message: error.message})
    }
}
*/
const getPosts=async(req, res, next)=>{
    try{
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({message: error.message})
    }
}
exports.getPosts=getPosts;
exports.createPost=createPost;