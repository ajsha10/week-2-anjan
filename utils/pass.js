'use strict';
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

// local strategy for username password login
passport.use(new Strategy(
    async (username, password, done) => {
      const params = [username];
      try {
        const [user] = await userModel.getUserLogin(params);
        console.log('Local strategy', user);                                      // result is binary row
        if (user === undefined) {
          return done(null, false, {message: 'Incorrect Email.'});
        }
        if (!bcrypt.compareSync(password, user.password)) {
          console.log('here');
          return done(null, false);
        }
        return done(null, {...user}, {message: 'Logged In Successfully'});        // use spread syntax to create shallow copy to get rid of binary row type
      } catch (err) {
        return done(err);
      }
    }));


passport.use(new JWTStrategy({
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'anjansh'
    },
    async (jwtPayload, done) => {
      try {
        console.log('jwtPayload', jwtPayload)
        const user = await userModel.getUser(jwtPayload.user_id);
        if (user === undefined) {
          return done(null, false);
        }
        const plainUser = {...user};
        return done(null, plainUser);
      }
      catch (err) {
        return done(err);
      }
    }
));


module.exports = passport;
