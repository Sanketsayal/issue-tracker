const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');

router.get('/',homeController.home);
router.use('/projects',require('./projects'));
router.use('/issues',require('./issues'));

module.exports=router;