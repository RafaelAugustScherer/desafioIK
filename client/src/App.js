import React from 'react';
import TaskProvider from './providers/TaskProvider';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

function App() {
  return (
    <TaskProvider>
      <h1>Desafio IK</h1>
      <TaskForm />
      <Tasks />
    </TaskProvider>
  );
}

export default App;
