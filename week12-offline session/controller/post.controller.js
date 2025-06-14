const Posts = require('../models/posts.model');
const httpStatus = require('../utilities/httpStatus');

const getAllPosts = async (req, res) => {
    try {
        const posts = await Posts.find().populate('postOwner', 'name'); // Example to populate postOwner
        if (!posts.length) {
            return res.status(404).json({ status: httpStatus.FAIL, data: "No posts found" });
        }
        res.status(200).json({ status: httpStatus.SUCCESS, data: { posts } });
    } catch (err) {
        res.status(400).json({ status: httpStatus.ERROR, message: err.message });
    }
};

const createPost = async (req, res) => {
    try {
        const newPost = new Posts(req.body);
        await newPost.save();
        res.status(201).json({ status: httpStatus.SUCCESS, data: { newPost } });
    } catch (err) {
        res.status(400).json({ status: httpStatus.ERROR, message: err.message });
    }
};

module.exports = {
    getAllPosts,
    createPost
};
