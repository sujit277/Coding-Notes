const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator/check');

const getLogin = (req, res, next) => {
    res.render('auth/login', { errorMessage: null, oldInput: { email: '', password: '' } });
}

const getSignup = (req, res, next) => {
    res.render('auth/signup', { errorMessage: null, oldInput: { email: '', password: '', confirmPassword: '' }, validationErrors: [] });
}


const postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(422).render('auth/login', { errorMessage: result.errors[0].msg, oldInput: { email: email, password: password }, validationErrors: result.errors });
    }
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
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(422).render('auth/signup', { errorMessage: result.errors[0].msg, oldInput: { email: email, password: password, confirmPassword: confirmPassword }, validationErrors: result.errors });
    }
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