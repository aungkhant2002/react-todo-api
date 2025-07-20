import React, { useEffect, useState } from 'react'
import Heading from './components/Heading'
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList'

const App = () => {
  const [tasks, setTask] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sending, isSending] = useState(false);

  const addTask = async (newTask) => {
    isSending(true);
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await res.json();
    setTask([...tasks, data]);
    isSending(false);
  }

  const removeTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  }

  const doneTask = (id) => {
    setTask(tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el)));
  }

  const fetchTasks = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTask(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchTasks();
  }, [])

  return (
    <div className='p-10'>
      <Heading />
      <CreateTask sending={sending} addTask={addTask} />
      <TaskList doneTask={doneTask} removeTask={removeTask} tasks={tasks} />
      { loading && <p className='text-2xl text-white text-center font-serif font-bold'>Loading...</p> }
    </div>
  )
}

export default App