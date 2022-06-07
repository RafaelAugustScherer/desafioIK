import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const { REACT_APP_SERVER } = process.env;
  const [tasks, setTasks] = useState([]);
  const [providerError, setProviderError] = useState(undefined);
  
  const fetchTasks = async () => {
    console.log(tasks);
    const response = await axios.get(`${REACT_APP_SERVER}/task`)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
        setProviderError('Failed to retrieve tasks from server');
      });
    console.log(response);
    setTasks(response);
  };

  const addTask = (task) => {
    axios.post(`${REACT_APP_SERVER}/task`, {
      ...task,
    }).then(async (res) => {
      setTasks([...tasks, res.data ]);
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  
  const value = {
    tasks,
    addTask,
    providerError,
  };

  return (
    <TaskContext.Provider value={ value }>
      { children }
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default TaskProvider;