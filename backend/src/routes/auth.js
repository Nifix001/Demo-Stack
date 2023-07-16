const { Router } = require('express');
const User = require('../schema/User');
const { hashPassword, comparePassword } = require('../Utils/helpers');
const passport = require('passport');

const  router = Router();



// router.post('/login', async(req, res) => {
//     const { email, password } = req.body

//     if(!email || !password) return res.sendStatus(400);
//     const userDB = await User.findOne({ email})
//     if (!userDB) return res.sendStatus(401);
//     const isValid = comparePassword(password, userDB.password);
//     if(isValid){
//         req.session.user = userDB;
//         return res.sendStatus(200);
//     } else {
//         res.sendStatus(401);
//     }
// })

router.post('/login', passport.authenticate('local'), (req, res) => {
    console.log('login successful');
    res.sendStatus(200);
})



router.post('/register', async(req, res) =>{
    const { id, first_name, last_name, email, gender, ip_address, password } = req.body
    const userData = await User.findOne({ email })
    if (userData){
        res.status(400).send({ msg: 'Bobo You don register joor'});
    } else {
        const hashedPassword = hashPassword(password);

        const newUser = await User.create({ id, first_name, last_name, email, gender, ip_address, 
        password: hashedPassword })
        res.sendStatus(200);
    }
})

module.exports = router