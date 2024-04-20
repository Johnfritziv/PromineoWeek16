import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Button that uses useNavigate to go to the AddTaskPage
function AddButton() {
  let navigate = useNavigate();

  let handleClick = () => {
    navigate('/add-task');
  };

  return (
    <Button variant="primary" style={{ position: 'fixed', right: '20px', bottom: '20px' }} onClick={handleClick}>
      Add Task
    </Button>
  );
}

export default AddButton;
