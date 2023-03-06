const express=require('express');
const next = require('next');
const {createProxyMiddleware} = require('http-proxy-middleware')
// check production  or development envireonment
const dev = process.env.NODE_ENV!=='production';
//create next application
const app = next({dev});
const handle = app.getRequestHandler();
app.prepare().then(()=>{
    const server =express();
    //apply proxy in dev mode,use express
    if(dev){
        //prefix the backend routeh  with /api and  that will send reuqest to our backend
server.use('/api',createProxyMiddleware({target:'http://localhost:8000',changeOrigin:true,})
        )
    }
    server.all("*",(req,res)=>{
        return handle(req,res);
    });
    server.listen(3000,(err)=>{
        if(err) throw err;
        console.log('>Ready on http://localhost:8000');
    })
}).catch((err)=>{
    console.log('Error',err);
});