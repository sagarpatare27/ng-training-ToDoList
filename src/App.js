import React, { useState } from 'react';
import TaskTable from './components/TaskTable';
import TaskModal from './components/TaskModal';
import DeleteConfirmationModal from './components/DeleteConfirmationModal'; // Import the confirmation modal
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { assignedTo: 'User 1', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'This task is good' },
    { assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', description: 'This task is okay' },
    { assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', description: 'This task is pending' },
    { assignedTo: 'User 4', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'Another task' },
    { assignedTo: 'User 1', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'This task is good' },
    { assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', description: 'This task is okay' },
    { assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', description: 'This task is pending' },
    { assignedTo: 'User 4', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'Another task' },
    { assignedTo: 'User 1', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'This task is good' },
    { assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', description: 'This task is okay' },
    { assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', description: 'This task is pending' },
    { assignedTo: 'User 4', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'Another task' },
    { assignedTo: 'User 1', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'This task is good' },
    { assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', description: 'This task is okay' },
    { assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', description: 'This task is pending' },
    { assignedTo: 'User 4', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'Another task' },
    { assignedTo: 'User 1', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'This task is good' },
    { assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', description: 'This task is okay' },
    { assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', description: 'This task is pending' },
    { assignedTo: 'User 4', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'Another task' },
    { assignedTo: 'User 1', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'This task is good' },
    { assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', description: 'This task is okay' },
    { assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', description: 'This task is pending' },
    { assignedTo: 'User 4', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'Another task' },
    { assignedTo: 'User 1', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'This task is good' },
    { assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', description: 'This task is okay' },
    { assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', description: 'This task is pending' },
    { assignedTo: 'User 4', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'Another task' },
    { assignedTo: 'User 1', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'This task is good' },
    { assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', description: 'This task is okay' },
    { assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', description: 'This task is pending' },
    { assignedTo: 'User 4', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', description: 'Another task' },
  
    // Add more tasks here for testing
    // Add at least 15+ tasks
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false); // State for delete confirmation modal
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [taskToDelete, setTaskToDelete] = useState(null); // Store the task name to be deleted
  
  const tasksPerPage = 10; // Display 10 tasks per page
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  // Get the current tasks for the current page
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const handleSaveTask = (newTask) => {
    if (editTaskIndex !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === editTaskIndex ? newTask : task
      );
      setTasks(updatedTasks);
    } else {
      setTasks([...tasks, newTask]);
    }
    setShowModal(false);
    setEditTaskIndex(null);
  };

  const handleDeleteTask = (indexesToDelete) => {
    const filteredTasks = tasks.filter((_, index) => !indexesToDelete.includes(index));
    setTasks(filteredTasks);
    setSelectedTasks([]);
    
  };

  const handleEditTask = (taskIndex) => {
    setEditTaskIndex(taskIndex);
    setShowModal(true);
  };

  const handleNewTask = () => {
    setEditTaskIndex(null);
    setShowModal(true);
  };

  const handleCheckboxChange = (taskIndex) => {
    setSelectedTasks((prevSelected) =>
      prevSelected.includes(taskIndex)
        ? prevSelected.filter((index) => index !== taskIndex)
        : [...prevSelected, taskIndex]
    );
  };

  const handleBulkDelete = () => {
    if (selectedTasks.length > 0) {
      const taskNamesToDelete = selectedTasks.map(index => tasks[index].description);
      setTaskToDelete(taskNamesToDelete.join(", "));
      setShowDeleteConfirmation(true);
    }
  };

  const confirmDeleteTasks = () => {
    handleDeleteTask(selectedTasks);
    setShowDeleteConfirmation(false);
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="app-container container mt-4">
      <div className="header d-flex justify-content-between align-items-center mb-4">
        <h1>Tasks</h1>
        <div>
          <button className="btn btn-warning me-2" onClick={handleNewTask}>New Task</button>
          <button
            className="btn btn-danger"
            onClick={handleBulkDelete}
            disabled={selectedTasks.length === 0}
          >
            Delete Selected
          </button>
        </div>
      </div>

      <TaskTable
        tasks={currentTasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
        selectedTasks={selectedTasks}
        handleCheckboxChange={handleCheckboxChange}
      />

      <Pagination
        tasksPerPage={tasksPerPage}
        totalTasks={tasks.length}
        paginate={paginate}
        currentPage={currentPage}
      />

      {showModal && (
        <TaskModal
          onSave={handleSaveTask}
          taskToEdit={editTaskIndex !== null ? tasks[editTaskIndex] : null}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        show={showDeleteConfirmation}
        onHide={() => setShowDeleteConfirmation(false)}
        taskName={taskToDelete}
        onConfirm={confirmDeleteTasks}
      />
    </div>
  );
};

export default App;
