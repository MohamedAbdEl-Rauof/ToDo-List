import React, { useState } from 'react';

const Task = ({ task, deleteTask, updateTask, toggleTaskCompletion }) => {

  const [isEditing, setIsEditing] = useState(false);

  const [taskName, setTaskName] = useState(task.name);

  const handleEdit = () => {

    setIsEditing(true);
  };

  const handleSave = () => {

    updateTask({ ...task, name: taskName });

    setIsEditing(false);

  };

  return (

    <div className={`task ${task.completed ? 'completed' : ''}`}>

      <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} />
      
      {isEditing ? (

        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />

      )
       :
      (

        <span>{task.name}</span>

      )}

      <div className="task-actions">

        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) 
        :
        (
          <button onClick={handleEdit}>Edit</button>
        )}

        <button onClick={() => deleteTask(task.id)}>Delete</button>
        
      </div>
    </div>
  );
};

export default Task;
