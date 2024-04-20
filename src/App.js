import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import TodayTasksPage from './pages/TodayTasksPage';
import WeekTasksPage from './pages/WeekTasksPage';
import MonthTasksPage from './pages/MonthTasksPage';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import './App.css';

function App() {
  return (
    <Router>
      <AppNavbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<TodayTasksPage />} />
          <Route path="/week" element={<WeekTasksPage />} />
          <Route path="/month" element={<MonthTasksPage />} />
          <Route path="/add-task" element={<AddTaskPage />} />
          <Route path="/edit-task/:id" element={<EditTaskPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
