const express = require('express');
const router = express.Router();

const { deleteSingleTask, postTask, getTask, deleteAllTasks } = require('../controllers/taskController.js');

router.post('/', postTask);
router.get('/', getTask);
router.delete('/', deleteAllTasks);
router.delete('/:id', deleteSingleTask);

module.exports = router;