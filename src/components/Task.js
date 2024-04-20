import React from 'react';
import { Button } from 'react-bootstrap';
import DeleteButton from './DeleteButton';
import PriorityIndicator from './PriorityIndicator';
import StatusToggle from './StatusToggle';

// Holds the status of priority, completion, title, desctiption, and buttons to edit and delete
function Task({ task, onDeleteSuccess, onToggleStatus }) {
    return (
        <div className="task-item">
            <h4>{task.title}</h4>
            <PriorityIndicator priority={task.priority} />
            <p>{task.description}</p>
            <StatusToggle taskId={task.id} completed={task.completed} onToggle={onToggleStatus} />
            <Button variant="primary" href={`/edit-task/${task.id}`}>Edit</Button>
            <DeleteButton taskId={task.id} onDeleteSuccess={onDeleteSuccess} />
        </div>
    );
}

export default Task;
