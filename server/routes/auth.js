const router = require('express').Router();
const { User } = require('../models/user');
// const joi = require('joi');
// const passwordComplexity = require('joi-password-complexity');
const bcrypt = require('bcrypt');

// const validateUser = (data) => {
//     console.log("IN-Side Validate function");
//     const schema = joi.object({
//         email: joi.string().email().required().label('Email'),
//         password: passwordComplexity().required().label('Password'),
//     });
//     return schema.validate(data);
// }

router.post('/', async (req, res) => {
    try {
        // const { error } = validateUser(req.body);
        // if (error) return res.status(400).send(error.details[0].message);

        const existingUser = await User.findOne({ email: req.body.email });
        if (!existingUser) return res.status(400).send('Invalid email or password.');

        const validPassword = await bcrypt.compare(req.body.password, existingUser.password);
        if (!validPassword) return res.status(400).send('Invalid email or password.');

        const token = existingUser.generateAuthToken();
        res.status(200).send({data: token, message: 'User Authenticate successfully.'});

    } catch (error) {
        res.status(500).send({message: 'Internal server error.'});
    }
});


module.exports = router;