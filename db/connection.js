require('dotenv').config()

const mongoose = require('mongoose');
const mongoDB = process.env.DATABASE;
module.exports = mongoose.connect(mongoDB)