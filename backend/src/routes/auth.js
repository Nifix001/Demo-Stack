const { Router } = require('express');
const User = require('../schema/User');

const  router = Router();

router.use((req, res, next) =>{
    if (req.session.user) next()
    else res.send(401);
})

router.post('/login', (res, req) => {
    const { email, password } = req.body;

    if(email && password) {
        if(req.session.user){
            res.send(req.session.user)
        } else {
            req.session.user = {
                email
            }
            res.send(req.session)
        }
    } else res.send(401);
})


module.exports = router