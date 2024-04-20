import React from 'react';
import { Button } from 'react-bootstrap';

// Checks status in class name, then changes it to the opposite
function StatusToggle({ taskId, completed, onToggle }) {
    return (
      <Button
        className={completed ? 'button-completed' : 'button-not-completed'}
        onClick={() => onToggle(taskId, !completed)}
      >
        {completed ? 'Completed' : 'Mark as Complete'}
      </Button>
    );
  }

export default StatusToggle;
