const express = require('express');
const actions =  require('../methods/actions');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send('hello unauthorized user')
});

router.get('/dashboar', (req,res)=>{
    res.send('dashboard');
});

//@desc adding new user
//@route POST /api/adduser
router.post('/api/adduser', actions.addNew);
//@desc Authentication user
//@route POST /api/auth
router.post('/api/auth',actions.auth);
//@desc Get info on auser
//@route Get /api/getingo
router.get('/api/getinfo',actions.getinfo)


module.exports = router
