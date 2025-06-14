require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.routes');
const postRouter = require('./routes/post.routes');

const app = express();
const port = 4000;

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRouter);
app.use('/posts', postRouter);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
