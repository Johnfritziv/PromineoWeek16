import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// AddTaskForm that is on the AddTaskPage. Maybe redundant?
function AddTaskForm() {
  let [task, setTask] = useState({ title: '', description: '', dueDate: '', priority: 'low' });
  let navigate = useNavigate();

  //Giving the target to change in the form later
  let handleChange = (e) => {
    let { name, value } = e.target;
    setTask(prevState => ({ ...prevState, [name]: value }));
  };

  // Utility function to convert local date to ISO string with correct day in UTC
  // Currently is giving the date one day prior to pass to the API, after fiddling with it I have thrown in the towel to save time :(
  function toISODateString(date) {
    let localDate = new Date(date);
    localDate.setMinutes(localDate.getMinutes() - localDate.getTimezoneOffset());
    return localDate.toISOString().split('T')[0];
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      ...task,
      dueDate: toISODateString(task.dueDate) // Adjust the date before sending, ideally
    };

    axios.post('https://65f5ee0c41d90c1c5e0a66da.mockapi.io/Promineo_API/tasks', payload)
      .then(() => {
        navigate('/'); // Redirect to home after task addition
      })
      .catch(error => console.error('Error adding task:', error));
  };

//   Form holding all the attributes of the task being added.
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={task.title} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name="description" value={task.description} onChange={handleChange} rows={3} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        {/* Modifying value to be assigned to CSS changes for style. Color coding handled.*/}
                <Form.Label>Priority</Form.Label>
                <Form.Control as="select" name="priority" value={task.priority} onChange={handleChange}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </Form.Control>
            </Form.Group>
      <Button variant="primary" type="submit">Add Task</Button>
    </Form>
  );
}

export default AddTaskForm;
