import React from 'react'

const Task = ({ job: { id, task, isDone }, removeTask, doneTask }) => {
  const handleRemoveTask = () => {
    removeTask(id);
  }
  const handleOnChange = () => {
    doneTask(id);
  }
  return (
    <div className="bg-white/10 backdrop-blur-md shadow-lg flex justify-between items-center border border-white/20 p-3 rounded-xl mb-3 last:mb-0">
      <div className="flex items-center gap-3">
        <input
          onChange={handleOnChange}
          type="checkbox"
          checked={isDone}
          className="size-4 accent-cyan-400"
        />
        <p className={`text-white ${isDone ? "line-through opacity-60 scale-95 duration-200" : ""}`}>
          {task}
        </p>
      </div>
      <button
        onClick={handleRemoveTask}
        className="flex items-center gap-1 bg-red-500/20 text-red-300 border border-red-300/30 rounded-lg text-sm px-3 py-1 hover:bg-red-500/30 hover:text-red-100 transition-all duration-150"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        Delete
      </button>
    </div>

  )
}

export default Task