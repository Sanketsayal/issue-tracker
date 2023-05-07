const express=require('express');
const router=express.Router();

const issuesControler=require('../controller/issue_controller')

router.post('/create',issuesControler.create);

module.exports=router;