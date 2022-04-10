const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TaskSchema = new Schema({
 activity: {
  type: String,
  required: true,
  maxlength: 100
 }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;