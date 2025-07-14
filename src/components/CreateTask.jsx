import React, { useState } from 'react'

const CreateTask = ({addTask}) => {
    const [job, setJob] = useState("");
    const handleOnChange = (event) => {
        setJob(event.target.value);
    }
    const handleAddTaskBtn = () => {
        addTask(job);
        setJob("");
    }
    return (
        <div className='flex'>
            <input type="text" className='flex-grow border-2 border-slate-300 rounded-l-lg px-4 py-2' value={job} onChange={handleOnChange} />
            <button onClick={handleAddTaskBtn} className="border-2 bg-slate-300 rounded-r-lg border-slate-300 px-4 py-2">Add Task</button>
        </div>
    )
}

export default CreateTask