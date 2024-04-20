import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import SearchBar from '../components/SearchBar';
import TaskCounter from '../components/TaskCounter';
import AddButton from '../components/AddButton';
import { isToday, format } from 'date-fns';
import '../App.css';

// Supposed to grab the date and set the hours to midday to avoid timezone stuff.
function parseDate(dateString) {
  let date = new Date(dateString);
  date.setHours(12); // Avoid timezone affecting the date, in theory, isn't quite working as intended. Haven't implemented into Month and Week yet as a result.
  return date;
}

function TodayTasksPage() {
    let [tasks, setTasks] = useState([]);
    let [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      let fetchTasks = async () => {
        try {
          let response = await axios.get('https://65f5ee0c41d90c1c5e0a66da.mockapi.io/Promineo_API/tasks');
          console.log('API Response:', response.data); // Check what's being received from the API
          let filteredTasks = response.data.filter(task => {
            let taskDate = parseDate(task.dueDate);
            console.log('Task Date:', format(taskDate, 'yyyy-MM-dd HH:mm:ss'), 'Is Today:', isToday(taskDate)); // Log the date being checked
            return isToday(taskDate); // Only grabs the tasks that are due on this day. This part is working.
          });
          console.log('Filtered Tasks:', filteredTasks); // See the filtered list
          setTasks(filteredTasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase())));
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };
      fetchTasks();
    }, [searchTerm]);

    let handleDeleteSuccess = (taskId) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
      };
  
    let handleToggleStatus = (taskId) => {
        let updatedTasks = tasks.map(task => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
        setTasks(updatedTasks); //Same issue, toggle works on page but not playing well with the API
  
        axios.patch(`https://65f5ee0c41d90c1c5e0a66da.mockapi.io/Promineo_API/tasks/${taskId}`, {
            completed: !tasks.completed
        })
        .catch(error => console.error('Error updating task status:', error));
      };

    return (
      <div className="container mt-3">
        <SearchBar onSearch={setSearchTerm} />
        <TaskCounter tasks={tasks} />
        <TaskList tasks={tasks} onDeleteSuccess={handleDeleteSuccess} onToggleStatus={handleToggleStatus} />
        <AddButton />
      </div>
    );
  }
  
  export default TodayTasksPage;
  
