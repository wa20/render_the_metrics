const router = require("express").Router();

// Get request Home Page
router.get('/', (req, res) =>{

        res.json('welcome to the home page') 
     
})

module.exports = router;