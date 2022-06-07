import React, { useContext } from 'react';
import { TaskContext } from '../providers/TaskProvider';

const Tasks = () => {
  const { tasks, providerError } = useContext(TaskContext);

  const getFormattedDate = (dateStr) => {
    const [ year, month, day ] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    providerError ? (
      <p>{providerError}</p>
    ) : (
      <>
        <h2>Tarefas</h2>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Pessoa Designada</th>
              <th>Data</th>
              <th>Horário</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.length ? (
                tasks.map((task, idx) => (
                  <tr key={`${task.taskName}-${idx}`}>
                    <td>{task.taskName}</td>
                    <td>{task.name}</td>
                    <td>{getFormattedDate(task.resolutionDate)}</td>
                    <td>{task.resolutionTime}</td>
                  </tr>
                ))
              ) : (
                <p>Carregando Tarefas...</p>
              )
            }
          </tbody>
        </table>
      </>
    )
  );
};

export default Tasks;