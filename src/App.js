import React, { useState, useEffect } from 'react';

import TaskList from './TaskList';
import TaskForm from './TaskForm';

import './index.css';


function App() {

  const [tasks, setTasks] = useState(() => {

    const savedTasks = localStorage.getItem('tasks');

    return savedTasks ? JSON.parse(savedTasks) : [];  // this paatern used in App where data is stored or retrived in JSON
 
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, 
  [tasks]);


  const addTask = (task) => {

    setTasks([...tasks, task]);

  };

  const deleteTask = (taskId) => {

    setTasks(tasks.filter((task) => task.id !== taskId));

  };

  const updateTask = (updatedTask) => {

    setTasks(

      tasks.map((task) =>

        task.id === updatedTask.id ? updatedTask : task  //If the current task's ID matches the updatedTask's ID, use updatedTask,otherwise, keep the current task unchanged.
      
      )
    );

  };

  const toggleTaskCompletion = (taskId) => {

    setTasks(

      tasks.map((task) =>

        task.id === taskId ? { ...task, completed: !task.completed } : task

      )
    );
  };

  const filteredTasks = tasks.filter((task) => {

    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;

    return true;

  });

  const handleFilterChange = (newFilter) => {
    
    setFilter(newFilter);

  };

  return (

    <div className="App">

      <h1>To-Do List</h1>

      <TaskForm addTask={addTask} />

      <div className="filters">

        <button onClick={() => handleFilterChange('all')}>All</button>

        <button onClick={() => handleFilterChange('completed')}>Completed</button>

        <button onClick={() => handleFilterChange('active')}>Active</button>
      </div>

      <TaskList

        tasks={filteredTasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
        toggleTaskCompletion={toggleTaskCompletion}
        
      />

    </div>
    
  );
}

export default App;
