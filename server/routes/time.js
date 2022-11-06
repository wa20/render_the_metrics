const router = require("express").Router();

// Get Epoch Time
router.get('/', (req, res) =>{
    
    res.send({ epoch: Date.now() });

   
})

module.exports = router;