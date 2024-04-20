import React from 'react';
import AddTaskForm from '../components/AddTaskForm';
import '../App.css';

// Holds the html for the add task stuff, and holds the add task form. Currently the only spot for the add task form.
function AddTaskPage() {
  return (
    <div className="container mt-3">
      <h1>Add New Task</h1>
      <AddTaskForm />
    </div>
  );
}

export default AddTaskPage;
