const Projects=require('../model/project')

module.exports.home=async (req,res)=>{

    try {
        let projects=await Projects.find();
        return res.render('home',{
            title:'issue tracker',
            projects:projects,
        });
    } catch (error) {
        console.log(error);
    }

    
};