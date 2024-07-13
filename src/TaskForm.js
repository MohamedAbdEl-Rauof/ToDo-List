import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';  // is a function used to used to generate "id" (hover on it )

const TaskForm = ({ addTask }) => {

  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!taskName.trim()) return;     // removes leading and trailing whitespace(hover on it)

    addTask({ id: uuidv4(), name: taskName, completed: false });   // creates a new task object with a unique ID

    setTaskName('');
  };



  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <input

        type="text"

        value={taskName}

        onChange={(e) => setTaskName(e.target.value)}

        placeholder="Enter a new task"

      />

      <button type="submit">Add Task</button>

    </form>
    
  );
};

export default TaskForm;
