require('dotenv').config();

const mongoose=require('mongoose');
const MongoDB_URL=process.env.MongoDB_URL;
mongoose.connect(MongoDB_URL);
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error in connecting to database'));
db.once('open',function(){
    console.log('connected to db');

}); 
module.exports=db;