// routes/blog.js
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog');
const authMiddleware = require('../middleware/authMiddleware');

// POST /api/blogs
router.post('/', authMiddleware, blogController.createBlogPost);

// GET /api/blogs
router.get('/', blogController.getAllBlogPosts);

module.exports = router;
