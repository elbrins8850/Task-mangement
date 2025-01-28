import React from 'react'
import { FaTimes } from 'react-icons/fa'
const Task = ({ task, Delete, ReminderToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => ReminderToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{
                color: 'red',
                cursor: 'pointer'
            }}
                onClick={() => Delete(task.id)}
            /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
