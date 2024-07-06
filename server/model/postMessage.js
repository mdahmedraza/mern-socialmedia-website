const mongoose = require('mongoose');

const postSchema=mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
})
module.exports=mongoose.model('PostMessage', postSchema);