const express=require('express');
const router=express.Router();

const projectController=require('../controller/project_controller');

router.post('/create',projectController.create);
router.get('/:id',projectController.getProject);

module.exports=router; 