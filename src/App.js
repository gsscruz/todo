import './style.css';

import React, { useState, useEffect } from 'react';



import TaskCreator from './Components/TaskCreator.jsx';
import TaskDisplay from './Components/TaskDisplay.jsx';
import CssBaseline from '@mui/material/CssBaseline';

import { ReactComponent as LadySvg } from './assets/Lady.svg';
import { ReactComponent as PlantSvg } from './assets/Plant.svg';

import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const App = () => {

 const [tasks, setTasks] = useState([])


 return (
  <div className='appGrid' >
   <CssBaseline />
   <div className="center plantSvg">
    <PlantSvg />
   </div>
   <div className="center ladySvg">
    <LadySvg />
   </div>

   <div className="header">
    <Typography variant="h2"> Save time</Typography>
    <Typography variant="h4"> Organize your thoughts</Typography>
   </div>

   <div className="main center">
    <div >
     <TaskDisplay
      tasks={tasks}
      setTasks={setTasks}
     />
    </div>
    <div>
     <TaskCreator
      tasks={tasks}
      setTasks={setTasks}
     />
    </div>
   </div>
  </div>
 );
}
export default App