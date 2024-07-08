// routes/auth.js
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/auth');
const authMiddleware = require('../middleware/authMiddleware');

// POST /api/users/register
router.post('/register', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
], authController.register);

// POST /api/users/login
router.post('/login', authController.login);
// Verify Email 

router.get('/verify-email/:token', authController.verifyEmail); // Add this line

module.exports = router;
