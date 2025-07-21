import React, { useEffect, useState } from 'react'
import Heading from './components/Heading'
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList'
import SkeletonLoader from './components/SkeletonLoader'

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

  const removeTask = async (id) => {
    isSending(true);
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    });
    const data = await res.text();
    setTask(tasks.filter((task) => task.id !== id));
    isSending(false);
  }

  const doneTask = async (id, currentState) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone: !currentState })
    })
    const data = await res.json();
    setTask(tasks.map((el) => (el.id === id ? data : el)));
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
      <TaskList sending={sending} doneTask={doneTask} removeTask={removeTask} tasks={tasks} />

      {loading && <SkeletonLoader />}
    </div>
  )
}

export default App