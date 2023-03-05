import express from 'express'
import cors from 'cors'
// const morgan =require('morgan');
import morgan from 'morgan';
require('dotenv').config();
// for auto load routes,const {readdirSync} = require('fs);//destructuring
const fs = require('fs');
// create express app
const app = express();

// apply middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// user defined middleware
// app.use(console.log('this is my own middleware'));,give error app.use() require a middleware function
// if we not provide req,res,next then it will stop the whole execution
app.use((req,res,next) => {
    console.log('this is my own middleware')
    next();//for continueing the execution
});

// route
// after destructe readdirSync('./routes')
fs.readdirSync('./routes').map((r)=>{
   app.use('/api',require(`./routes/${r}`))
})
app.get('/',(req,res)=>{
    res.send('you hit server endpoint');
});

// port
const port = process.env.PORT || 8000;
// listen will help us to listen to the running server
app.listen(port,()=>console.log(`server is running on port ${port}`));
// console.log('server set up')