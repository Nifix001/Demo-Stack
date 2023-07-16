const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('../schema/User');
const { comparePassword } = require('../Utils/helpers');


passport.serializeUser((user, done) =>{
    console.log('Serializing User...');
    console.log(user);
    done(null, user.id);
})

passport.deserializeUser(async(id, done) =>{
    console.log('Deserializing User');
    try{
        const user = await User.findById(id);
        if(!user) throw new Error('user not found');
        done(null, user);
    } catch (err) {
        done(err, null);
    }
})


passport.use(
    new Strategy(
    {
        usernameField: 'email',
    },
    async (email, password, done) => {
        try {
        if (!email || !password) throw new Error('Missing Credentials');
        const userDB = await User.findOne({ email });
        if (!userDB) throw new Error('User not found');
        const isValid = comparePassword(password, userDB.password);
        if (isValid) {
        console.log("Successful Authentication");
        done(null, userDB);
        } else {
        console.log('Failed Authentication');
        done(null, null)
        }
    } catch (err) {
        console.log(err);
        done(err, null)
    }
        }
    )
);