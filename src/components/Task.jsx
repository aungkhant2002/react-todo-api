import React from 'react'

const Task = ({ job: { id, task, isDone }, removeTask, doneTask }) => {
  const handleRemoveTask = () => {
    removeTask(id);
  }
  const handleOnChange = () => {
    doneTask(id);
  }
  return (
    <div className='flex justify-between items-center border-2 border-slate-300 p-3 rounded-lg mb-3 last:mb-0'>
      <div className="flex items-center gap-3">
        <input onChange={handleOnChange} type="checkbox" checked={isDone} className='size-4 accent-slate-600' />
        <p className={isDone ? "line-through scale-95 duration-200" : ""}>{task}</p>
      </div>
      <button className="border rounded-lg text-sm border-red-100 bg-red-100 px-2 py-1 text-red-700" onClick={handleRemoveTask}>Delete</button>
    </div>
  )
}

export default Task