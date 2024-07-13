import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, updateTask, toggleTaskCompletion }) => {

  return (

    <div className="task-list">

      {tasks.map((task) => (
        <Task
          key={task.id}

          task={task} 

          deleteTask={deleteTask} 

          updateTask={updateTask}

          toggleTaskCompletion={toggleTaskCompletion}
          
        />
      ))}

    </div>
    
  );
};

export default TaskList;
