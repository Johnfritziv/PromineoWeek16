import React from 'react';
import Task from './Task';

// Holds all the tasks on the page, and their respective attributes. Manages changes.
function TaskList({ tasks, onDeleteSuccess, onToggleStatus }) {
  return (
    <div>
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          onDeleteSuccess={onDeleteSuccess} 
          onToggleStatus={onToggleStatus}  // Pass the status toggle handler to each Task
        />
      ))}
    </div>
  );
}

export default TaskList;
