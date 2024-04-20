import React from 'react';
import EditTaskForm from '../components/EditTaskForm';
import '../App.css';

// Holds html for the edit task form, also the only spot for that currently
function EditTaskPage() {
  return (
    <div className="container mt-3">
      <h1>Edit Task</h1>
      <EditTaskForm />
    </div>
  );
}

export default EditTaskPage;
