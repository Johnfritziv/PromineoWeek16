import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import SearchBar from '../components/SearchBar';
import TaskCounter from '../components/TaskCounter';
import AddButton from '../components/AddButton';
import { startOfMonth, endOfMonth } from 'date-fns';
import '../App.css';

function MonthTasksPage() {
  let [tasks, setTasks] = useState([]);
  let [searchTerm, setSearchTerm] = useState('');

  // Grabs the tasks from the api, then filters for the ones that are within the month.
  useEffect(() => {
    let fetchTasks = async () => {
      try {
        let response = await axios.get('https://65f5ee0c41d90c1c5e0a66da.mockapi.io/Promineo_API/tasks');
        let filteredTasks = response.data.filter(task => {
          let taskDate = new Date(task.dueDate);
          return taskDate >= startOfMonth(new Date()) && taskDate <= endOfMonth(new Date());
        });
        setTasks(filteredTasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase())));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, [searchTerm]);

  //Delete function reloader
  let handleDeleteSuccess = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  // Completed / not completed toggle.
  let handleToggleStatus = (taskId) => {
    let updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);

    // update the status on the backend, currently not working fully? Will change on page but not remain when re-rendered.
    axios.patch(`https://65f5ee0c41d90c1c5e0a66da.mockapi.io/Promineo_API/tasks/${taskId}`, {
        completed: !tasks.completed
    })
    .catch(error => console.error('Error updating task status:', error));
  };

  // Container with the stuff.
  return (
    <div className="container mt-3">
      <SearchBar onSearch={setSearchTerm} />
      <TaskCounter tasks={tasks} />
      <TaskList tasks={tasks} onDeleteSuccess={handleDeleteSuccess} onToggleStatus={handleToggleStatus}/>
      <AddButton />
    </div>
  );
}

export default MonthTasksPage;
