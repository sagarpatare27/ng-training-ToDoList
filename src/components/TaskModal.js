import React, { useState } from 'react';

const TaskModal = ({ onClose, onSave, taskToEdit }) => {
  const [task, setTask] = useState(
    taskToEdit || {
      assignedTo: '',
      status: 'Not Started',
      dueDate: '',
      priority: 'Normal',
      description: ''
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSave = () => {
    onSave(task);
    onClose();
  };

  return (
    <div className="modal d-flex justify-content-center align-items-center">
      <div className="modal-content p-4">
        <h2>{taskToEdit ? 'Edit Task' : 'New Task'}</h2>
        <div className="modal-body">
          <div className="form-group mb-3">
            <label>Assigned To</label>
            <input
              type="text"
              name="assignedTo"
              value={task.assignedTo}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>Status</label>
            <select
              name="status"
              value={task.status}
              className="form-select"
              onChange={handleInputChange}
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label>Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>Priority</label>
            <select
              name="priority"
              value={task.priority}
              className="form-select"
              onChange={handleInputChange}
            >
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label>Description</label>
            <textarea
              name="description"
              value={task.description}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="modal-buttons d-flex justify-content-end">
          <button className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
          <button className="btn btn-warning" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
