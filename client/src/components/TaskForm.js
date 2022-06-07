import React, { useContext, useState } from 'react';
import moment from 'moment';
import { TaskContext } from '../providers/TaskProvider';

const TaskForm = () => {
  const [task, setTask] = useState({
    name: '',
    taskName: '',
    resolutionDate: moment().format('YYYY-MM-DD'),
    resolutionTime: moment().format('HH:mm'),
  });
  const { addTask } = useContext(TaskContext);

  const handleChange = ({ target: { value, name } }) => (
    setTask({ ...task, [name]: value })
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inserir tarefa</h2>
      <input
        type="text"
        placeholder="Tarefa"
        value={task.taskName}
        name="taskName"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Pessoa designada"
        value={task.name}
        name="name"
        onChange={handleChange}
        required
      />
      <input
        type="date"
        value={task.resolutionDate}
        name="resolutionDate"
        onChange={handleChange}
        min={moment().format('YYYY-MM-DD')}
        required
      />
      <input
        type="time"
        value={task.resolutionTime}
        name="resolutionTime"
        onChange={handleChange}
        required
      />
      <button type="submit">
        Criar Tarefa
      </button>
    </form>
  );
};

export default TaskForm;