import React from 'react'

const Task = ({job, removeTask}) => {
    const handleRemoveTask = () => {
        removeTask(job);
    }
  return (
    <div className='flex justify-between items-center border-2 border-slate-300 p-3 rounded-lg mb-3 last:mb-0'>
        <p>{job}</p>
        <button className="border text-sm border-red-100 bg-red-100 px-2 py-1 text-red-700" onClick={handleRemoveTask}>Delete</button>
    </div>
  )
}

export default Task