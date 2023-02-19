const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "first :)",
        user_id: 2,
        post_id: 1,
        
    },
    {
        comment_text: "omg this is so cool",
        user_id: 3,
        post_id: 2,
        
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;