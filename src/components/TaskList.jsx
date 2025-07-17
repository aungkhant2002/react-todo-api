import React from 'react'
import Task from './Task';

const TaskList = ({ tasks, removeTask, doneTask }) => {
    return (
        <div>
            <h3 className="font-bold font-serif text-xl mt-5 mb-3 text-white/90 tracking-wide drop-shadow-lg">Task List (Total {tasks.length}, Done {tasks.filter((el) => el.isDone).length})</h3>
            {tasks.map((el) => <Task key={el.id} removeTask={removeTask} job={el} doneTask={doneTask} />)}
        </div>
    )
}

export default TaskList