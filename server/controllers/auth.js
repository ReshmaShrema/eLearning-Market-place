const User = require('../models/user');
const { hashPassword, comparePassword } = require('../Utils/auth');
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {
        // console.log(req.body);
        const { name, email, password } = req.body;
        //validation
        if (!name) return res.status(400).send('Name is required');
        if (!password || password.length < 6) {
            return res
                .status(400)
                .send(
                    'password is required and should be min 6 charecter long'
                );
        }
        let userExist = await User.findOne({ email }).exec();
        if (userExist) return res.status(400).send('Email is taken');
        //hash password
        const hashedPassword = await hashPassword(password);
        //register
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });
        await user.save();
        console.log('saved user', user);
        return res.json({ ok: true });
    } catch (err) {
        console.error(err);
        return res.status(400).send('Error,Try again.');
    }
    // console.log(req.body);
    // res.json('Register User ffff');
    //res.send('Register User ffff');
};

exports.login = async (req, res) => {
    try {
        // console.log(req.body)
        const { email, password } = req.body;
        //check if the db has user with that email
        const user = await User.findOne({ email }).exec();
        if (!user) return res.status(400).send('No user found');
        //check password
        const match =await comparePassword(password,user.password);//boolean
        //create signed jwt,pass user_id so that we can retrive userdata using id
        const token=jwt.sign({
            _id:user._id}, process.env.JWT_SECRET,{expiresIn:'7d',
        });
        //return user and token to client,exclude hashed password
        user.password = undefined;
        //send token in cookies
        res.cookie('token',token,{
            //otherwise data can be accesed in cliend side using js
            httpOnly:true,
            //secure:true//only works in https
        })
        //send user as json response
        res.json(user);
    } 
    catch (err) {
        console.log(err);
        return res.status(400).send('Error.Try again');
    }
};
