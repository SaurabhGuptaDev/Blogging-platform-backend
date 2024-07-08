// controllers/blog.js
const BlogPost = require('../models/BlogPost');

// Create a new blog post
exports.createBlogPost = async (req, res) => {
  const { title, content } = req.body;
  const author = req.user.id; // assuming user is authenticated

  try {
    const newBlogPost = new BlogPost({
      title,
      content,
      author,
    });

    await newBlogPost.save();

    res.status(201).json({ message: 'Blog post created successfully', blogPost: newBlogPost });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all blog posts
exports.getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().populate('author', 'name email');
    res.json(blogPosts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
