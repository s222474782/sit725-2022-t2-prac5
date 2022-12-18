let client = require("../dbConnect");
let projectCollection;

setTimeout(() => {
     projectCollection = client.db().collection("Projects");
    }, 2000)
    
  
  // insert
  const insertProjects = (project,callback) => {
      projectCollection.insert(project,callback);
  }

  // get projects
 const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}



module.exports= {insertProjects, getProjects,};