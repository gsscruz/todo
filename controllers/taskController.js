const Task = require('../models/Task')

const postTask = (req, res) => {

  const newTask = new Task({
    activity: req.body.activity
  });

  newTask.save()
    .then(result => {
      res.json({
        data: newTask,
        url: `/api/v1/task/${newTask._id}`
      })
    })
    .catch(error => res.status(500).send(error));
}

const getTask = (req, res) => {
  Task.find({}).exec()
    .then(results => {
      res.json(results);
    })
    .catch(error => res.status(500).send(error))
}

const deleteAllTasks = (req, res) => {
  Task.deleteMany({}, (err) => {
    if (err) {
      console.log(err)
    }
  })
}

const deleteSingleTask = (req, res) => {
  Task.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      console.log(err)
    }
  })
}
module.exports = {
  postTask,
  getTask,
  deleteAllTasks,
  deleteSingleTask
}