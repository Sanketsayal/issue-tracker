const express=require('express');
const port=9000;
const app=express();
const ejs=require('ejs');
const layouts=require('express-ejs-layouts');
const db=require('./config/mongoose')
const sassmiddleware=require('node-sass-middleware');
const mongoose=require('mongoose');

app.use(sassmiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'expanded',
    prefix:'/css'
}))
app.use(express.urlencoded());
app.use(express.static('./assets'));

app.use(layouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log('running on port:',port);
})