export const getTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
  };
  
  export const addTask = (task) => {
    const tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  export const updateTask = (updatedTask) => {
    const tasks = getTasks();
    const index = tasks.findIndex((task) => task.id === updatedTask.id);
    tasks[index] = updatedTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  export const deleteTask = (id) => {
    let tasks = getTasks();
    tasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  