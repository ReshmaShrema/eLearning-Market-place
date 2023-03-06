const User = require('../models/user');
const { hashPassword, comparePassword } = require('../Utils/auth');

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
