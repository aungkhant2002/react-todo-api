import React, { useState } from 'react'

const CreateTask = ({ addTask, sending }) => {
    const [job, setJob] = useState("");
    const handleOnChange = (event) => {
        setJob(event.target.value);
    }
    const handleAddTaskBtn = () => {
        const newTask = {
            task: job,
            isDone: false
        }
        addTask(newTask);
        setJob("");
    }
    return (
        <div className="flex w-full max-w-xl bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/20 disabled:bg-gray-700">
            <input
            disabled={sending}
                type="text"
                className="flex-grow px-4 py-2 bg-transparent text-white placeholder-white/60 focus:outline-none"
                placeholder="Enter a task..."
                value={job}
                onChange={handleOnChange}
            />
            <button
            disabled={sending}
                onClick={handleAddTaskBtn}
                className="flex items-center gap-2 bg-cyan-400/20 text-cyan-200 border border-cyan-300/30 rounded-lg text-sm px-4 py-2 hover:bg-cyan-400/30 hover:text-white transition-all duration-150 shadow-md backdrop-blur-md disabled:bg-gray-700"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Task
            </button>

        </div>

    )
}

export default CreateTask