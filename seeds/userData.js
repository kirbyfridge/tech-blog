const { user } = require('../models');

const userData =
[
  {
    "username": "helloworld",
    "email": "helloworld@gmail.com",
    "password": "adMin12345!"
  },
  {
    "username": "godchicken",
    "email": "chickenchicken@gmail.com",
    "password": "Nyamnyamnyam~000"
  },
  {
    "username": "username",
    "email": "user_name@gmail.com",
    "password": "passPassPASS1234!"
  },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;