const router = require('express').Router();



router.get('/',(req,res) => {
    res.render('registration');
});

router.post('/api',(req,res) => {
    res.json({"msg":"registered"})
});


module.exports = router;