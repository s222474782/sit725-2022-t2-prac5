var express = require("express")
var router = express.Router();
let controller = require("../controller");



// post api
router.post('/',(req,res) => {
   controller.projectController.createProjects(req,res);
})
    

// get projects
router.get('/',(req,res) => {
   controller.projectController.retrieveProjects(req,res);
})


module.exports = router;