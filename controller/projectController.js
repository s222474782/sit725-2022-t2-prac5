let projectModel = require("../models/project");

// create a project
const createProjects = (req, res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    projectModel.insertProjects(newProject,(err, result) =>{
        if(err) {
            res.json({statusCode: 400, message:err})
        }
         else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result}) 
         }
    })
}
// Retrieve a project
const retrieveProjects = (req, res) => {
    projectModel.getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message:err})
        }
        else {
            res.json({statusCode: 200, message:"success", data: result})
        }
    })
}

module.exports= {retrieveProjects, createProjects};