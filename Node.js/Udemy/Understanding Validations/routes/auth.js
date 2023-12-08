const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const User = require("../models/user");
const { check, body } = require("express-validator");

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .withMessage("Please Enter a valid Email")
      .normalizeEmail()
      .custom((value, { req }) => {
        /* if (value === 'test@test.com') {
        throw new Error('This email address is forbidden');
    } */
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject(
              "Email exits already, Please enter Different One"
            );
          } else {
            return true;
          }
        });
      }),
    body("password")
      .isLength({ min: 5, max: 14 })
      .withMessage("Please Enter a Password between 5 and 14 Characters")
      .trim(),
    body("confirmPassword")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Passwords have to match");
        } else {
          return true;
        }
      }),
  ],
  authController.postLogin
);

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please Enter a valid Email")
      .normalizeEmail()
      .custom((value, { req }) => {
        //Checking if email is forbidden
        // if (value === "test@test.com") {
        //   throw new Error("This email address is forbidden");
        // }
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject(
              "Email exits already, Please enter Different One"
            );
          } else {
            return true;
          }
        });
      }),
    body("password")
      .isLength({ min: 5, max: 14 })
      .withMessage("Please Enter a Password between 5 and 14 Characters")
      .trim(),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords have to match");
      } else {
        return true;
      }
    }),
    body("confirmPassword").trim(),
  ],
  authController.postSignup
);

router.post("/logout", authController.postLogout);

module.exports = router;
