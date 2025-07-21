import React from 'react'
import Task from './Task';

const TaskList = ({ tasks, removeTask, doneTask, sending }) => {
    return (
        <div>
            <h3 className="font-bold font-serif text-xl mt-5 mb-3 text-white/90 tracking-wide drop-shadow-lg">Task List (Total {tasks.length}, Done {tasks.filter((el) => el.isDone).length})</h3>
            {tasks.map((el) => <Task key={el.id} sending={sending} removeTask={removeTask} job={el} doneTask={doneTask} />)}
        </div>
    )
}

export default TaskList