const passport = require('passport');
const { Strategies } = require('passport-local');
const User = require('../schema/User');
const { comparePassword } = require('../Utils/helpers');

passport.use(
    new Strategy(
    {
        usernameField: 'email',
    },
    async (email, password, done) => {
        try {
        if (!email || !password) throw new Error('Missing Credentials');
        const userDB = await User.findOne({ email});
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
)