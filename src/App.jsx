import React, { useState } from 'react'
import Heading from './components/Heading'
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList'
import Swal from 'sweetalert2'

const App = () => {
  const [tasks, setTask] = useState([
    { id: 1, task: "Design database schema", isDone: false },
    { id: 2, task: "Implement user authentication", isDone: true },
    { id: 3, task: "Create REST API for leave requests", isDone: false },
    { id: 4, task: "Build attendance summary page", isDone: false },
    { id: 5, task: "Write unit tests", isDone: false },
    { id: 6, task: "Deploy to production server", isDone: false }
  ]);

  const addTask = (newTask) => {
    if (!newTask.task.trim()) {
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Task Cannot be Empty"
      });
      return;
    } else if (newTask.task) {
      const isDuplicate = tasks.some(el => el.task.toLowerCase() === newTask.task.trim().toLowerCase());
      if (isDuplicate) {
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "error",
          title: `${newTask.task} Already Exits`
        });
        return;
      }
    }


    setTask([...tasks, newTask])
  }

  const removeTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  }

  const doneTask = (id) => {
    setTask(tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el)));
  }

  return (
    <div className='p-10'>
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList doneTask={doneTask} removeTask={removeTask} tasks={tasks} />
    </div>
  )
}

export default App