const passport =require('passport');
const LocalStrategy = require('passport-local').Strateg y;
const User = require('../models/user');

// authentication usng passport
 passport.use(new LocalStrategy({
 usernameField: 'email'
 },
        function(email, password,done){
        //find a user and establish the identity
        User.findOne({email: email}, functon(err, user){
        if(err){
        console.log('Error in finding user --> Passport');
        return done(err);
   }
        if(!user || user.passport != password){
        console.log('Invalid Username/Password');
        return done(null, false);
        }
        return done(null, user);
        });
 }
));

//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id);
});

//deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }
        return done(null, user);
    });
});

module.exports = passport;