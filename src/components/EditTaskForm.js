import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

// Similar to AddTaskForm but making changes via state control
function EditTaskForm() {
  let { id } = useParams();
  let navigate = useNavigate();
  let [task, setTask] = useState({ title: '', description: '', dueDate: '',  priority: 'low' });

  useEffect(() => {
    axios.get(`https://65f5ee0c41d90c1c5e0a66da.mockapi.io/Promineo_API/tasks/${id}`)
      .then(response => {
        setTask(response.data);
      })
      .catch(error => console.error('Error fetching task:', error));
  }, [id]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setTask(prevState => ({ ...prevState, [name]: value }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://65f5ee0c41d90c1c5e0a66da.mockapi.io/Promineo_API/tasks/${id}`, task)
      .then(() => {
        navigate('/'); // Redirect to home after updating
      })
      .catch(error => console.error('Error updating task:', error));
  };

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
        <Form.Label>Priority</Form.Label>
        <Form.Control as="select" name="priority" value={task.priority} onChange={handleChange}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </Form.Control>
       </Form.Group> 
      <Button variant="primary" type="submit">Update Task</Button>
    </Form>
  );
}

export default EditTaskForm;
