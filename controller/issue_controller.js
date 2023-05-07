const Issue=require('../model/issues');
const Project=require('../model/project')

module.exports.create=async(req,res)=>{
    try {
        let project=await Project.findById(req.body.project);
        if(project){
            let issue=await Issue.create({
                title:req.body.title,
                description:req.body.description,
                label:req.body.label,
                author:req.body.author,
                project:req.body.project,
            })
            project.issues.push(issue);
            project.save();
        }
        return res.redirect(`/projects/${project._id}`)
    } catch (error) {
        console.log(error)
    }
}