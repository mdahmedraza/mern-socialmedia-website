/*
const express=require('express');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser')
const cors=require('cors');

const app=express();
app.use(cors)({credentials: true, origin: "http://localhost:3000"});
app.use(cookieParser());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/socialmedia",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("db connected...")
}).catch((err)=>{
    console.log(err)
})

app.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "this is it..."
    })
})
app.listen(8000)
*/

const express=require('express');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const router=require('./routes/user-routes');
const postRoutes=require('./routes/posts')
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();

app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(cookieParser());
//app.use(express.json());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use('/api', router);
app.use('/posts', postRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/socialmedia",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("db connected...")
}).catch((err)=>{
    console.log(err)
})

app.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "this is it"
    })
})
app.listen(8000)