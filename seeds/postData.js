const { Post } = require('../models');

const postData = [
    {
        title: "post 1",
        content: "content",
        user_id: 1
    },
    {
        title: "post 2",
        content: "content",
        user_id: 2
    },
    {
        title: "post 3",
        content: "content",
        user_id: 3
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;