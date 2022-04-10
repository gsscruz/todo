import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';

const TaskCreator = (props) => {

  const [recentTask, setRecentTask] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/v1/task/', { activity: recentTask })
      .then((res) => {
        axios.get('/api/v1/task/')
          .then(dado => {
            props.setTasks(dado.data)
          })
      })
      .catch(error => console.log(error))
    setRecentTask('')
  }
  const resetList = (e) => {
    e.preventDefault()
    axios.delete('/api/v1/task/')
      .then(res => console.log("Database deleted"))
      .catch(error => console.log(error))
    props.setTasks([])
  }
  const bleedEdge = {
    width: "100%",
  }
  const eraseButton = {
    backgroundColor: '#F4795E',
    '&:hover': {
      backgroundColor: '#f03535',
    }
  }
  const addButton = {
    backgroundColor: '#10cc17',
    '&:hover': {
      backgroundColor: '#0d8011',
    }
  }
  return (
    <div className='inputArea'>
      <form >
        <div className="inputForm">
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="What's on your mind?"
            name="activity"
            type="text"
            onChange={(e) => setRecentTask(e.target.value)}
            value={recentTask}
            sx={bleedEdge}

          />

        </div>
        <div className="buttonLayout">
          <Button
            variant='contained'
            startIcon={<AutoFixHighOutlinedIcon />}
            onClick={resetList}
            sx={eraseButton}
            className='btnComponent'
          >
            Erase tasks
          </Button>
          <Button
            variant='contained'
            endIcon={<HistoryEduOutlinedIcon />}
            onClick={handleSubmit}
            sx={addButton}
            className='btnComponent'
          >
            Add task
          </Button>
        </div>
      </form>

    </div>
  )
}

export default TaskCreator
