const Projects=require('../model/project');
module.exports.create=async (req,res)=>{
    console.log(req.body);
    try {
        let project=await Projects.create({
            name:req.body.name,
            description:req.body.description,
            author:req.body.author
        });
        return res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

module.exports.getProject=async (req,res)=>{
    try{
        let project=await Projects.findById(req.params.id).populate('issues');
        return res.render('project',{
            title:project.name,
            project:project
        });
    }catch(error){

    }
    
}