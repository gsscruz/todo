import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const TaskDisplay = (props) => {

  useEffect(function openPageFeedTasks() {
    axios.get('/api/v1/task/')
      .then(res => {
        props.setTasks(res.data)
      })
  }, [])

  const removeTask = (task) => {
    axios.delete(`/api/v1/task/${task}`)
      .then(res => console.log("Single activity deleted"))
      .catch(error => console.log(error))
    const newTasks = props.tasks.filter(x => x._id !== task)
    props.setTasks(newTasks)
  }

  const customList = {
    backgroundColor: '#ffbd9f',
    borderRadius: '4px',
    border: '2px double black',
    marginBottom: '1rem'
  }
  return (
    <>
      <List >
        {props.tasks.map((task) => {
          return (
            <div key={task._id}>
              <ListItem sx={customList} disablePadding>
                <ListItemButton  >
                  <ListItemText primary={task.activity} />
                  <ListItemIcon >
                    <CheckCircleOutlineIcon
                      // sx={completeIcon}
                      className="completeIcon"
                      onClick={() => removeTask(task._id)}
                    />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </div>
          )
        })}
      </List>
    </>)
}

export default TaskDisplay

