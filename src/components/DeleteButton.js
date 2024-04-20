import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function DeleteButton({ taskId, onDeleteSuccess }) {
    let handleDelete = () => {
        axios.delete(`https://65f5ee0c41d90c1c5e0a66da.mockapi.io/Promineo_API/tasks/${taskId}`)
            .then(() => {
                onDeleteSuccess(taskId);
            })
            .catch(error => console.error('Error deleting task:', error));
    };

    return (
        <Button variant="danger" onClick={handleDelete}>
            Delete
        </Button>
    );
}

export default DeleteButton;
