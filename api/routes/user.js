const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// create user api
router.post('/signup', (req, res, next) => {
    const { email, password } = req.body;

    // Check if a user with the same email already exists
    User.find({ email })
        .exec()
        .then(existingUser => {
            if (existingUser.length>=1) {
                // User with the same email already exists, return an error
                return res.status(409).json({
                    message: 'Email already exists'
                });
            }else{
            // Hash the password
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const user = new User({
                        email,
                        password: hash
                    });
                    user
                        .save()
                        .then(result => {
                            console.log(result, "result leading");
                            res.status(201).json({
                                message: 'User Created'
                            });
                        })
                        .catch(err => {
                            console.log(err, "error leading");
                            res.status(500).json({
                                error: err
                            });
                        });
                }
            });
            }
        })
        .catch(err => {
            console.log(err, "error leading");
            res.status(500).json({
                error: err
            });
        });
});

// login user api
router.post('/login', (req, res, next) => {
    const { email, password } = req.body;

    // Find the user by their email
    User.findOne({ email: email })
        .exec()
        .then(user => {
            console.log(user, "user>>>")
            if (!user) {
                return res.status(404).json({
                    message: 'User not found'
                });
            }

            // Compare the password
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Authentication failed'
                    });
                }
                if (result) {
                    // Create a JWT token
                    const token = jwt.sign(
                        {
                            email: user.email,
                            userId: user._id,
                        },
                        'secret', // Secret key for signing the token
                        {
                            expiresIn: '1h', // Token expiration time
                        }
                    );

                    return res.status(200).json({
                        message: 'Authentication successful',
                        token: token, // Send the token back to the client
                    });
                }
                return res.status(401).json({
                    message: 'Authentication failed'
                });
            });
        })
        .catch(err => {
            console.log(err, "error in finding user");
            res.status(500).json({
                message: 'Server error'
            });
        });
});


// remove user api
router.delete('/:userId', (req, res, next) => {
    const userId = req.params.userId;

    // Check if a user with the specified ID exists
    User.findById(userId)
        .exec()
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    message: 'User not found'
                });
            }

            // If the user exists, delete it
            User.deleteOne({ _id: userId }) // Use deleteOne instead of remove
                .exec()
                .then(result => {
                    if (result.deletedCount === 0) {
                        return res.status(500).json({
                            message: 'Failed to delete user'
                        });
                    }
                    res.status(200).json({
                        message: 'User Deleted'
                    });
                })
                .catch(err => {
                    console.log(err, "error in removing");
                    res.status(500).json({
                        error: err
                    });
                });
        })
        .catch(err => {
            console.log(err, "error in finding user");
            res.status(500).json({
                error: err
            });
        });
});



module.exports = router;
