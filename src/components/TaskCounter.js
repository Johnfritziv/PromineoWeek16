import React from 'react';

// Counts the tasks on the page it is in.
function TaskCounter({ tasks }) {
  return (
    <div>
      Total Tasks: {tasks.length}
    </div>
  );
}

export default TaskCounter;
