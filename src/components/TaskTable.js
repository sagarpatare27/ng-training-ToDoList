import React from 'react';

const TaskTable = ({ tasks, onEdit, onDelete, selectedTasks, handleCheckboxChange }) => {
  return (
    <div className="task-table">
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th>Select</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedTasks.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.description}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(index)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete([index])}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
