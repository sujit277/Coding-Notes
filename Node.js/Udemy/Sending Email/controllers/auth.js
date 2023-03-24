const User = require('../models/user');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transport = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: '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'
    }
}))


const getLogin = (req, res, next) => {
    console.log(req.session);
    res.render('auth/login', { isAuthenticated: false });
}

const getSignup = (req, res, next) => {
    res.render('auth/signup', { isAuthenticated: false });
}


const postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email }).then((user) => {
        if (!user) {
            return res.redirect('/login');
        }
        bcrypt.compare(password, user.password).then((doMatch) => {
            if (doMatch) {
                req.session.isLoggedIn = true;
                req.session.user = user;
                return req.session.save(err => {
                    console.log(err);
                    res.redirect('/');
                })
            }
            res.redirect('/login');
        }).catch((err) => {
            console.log(err);
            res.redirect('/login');
        })
    })
}

const postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    User.findOne({ email: email }).then((userDoc) => {
        if (userDoc) {
            return res.redirect('/signup');
        }
        return bcrypt.hash(password, 12).then((hashedPassword) => {
            const user = new User({
                email: email,
                password: hashedPassword,
                cart: { items: [] }
            });
            return user.save();
        });
    }).then(() => {
        res.redirect('/login');
        return transport.sendMail({
            to: 'sujitkumarverma39@gmail.com',
            from: 'sujitkumarverma@1230.com',
            subject: 'Signup Successfully',
            html: '<h1>You have been successfully signed up</h1>'
        });
    }).catch((err) => {
        console.log(err);
    })
}


const postLogout = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
}

module.exports = { getLogin, postLogin, postLogout, getSignup, postSignup };