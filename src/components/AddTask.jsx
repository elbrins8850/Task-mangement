import { useState } from "react";

const AddTask = ({addTask}) => {
    const [text, SetText] = useState('')
    const [day, SetDay] = useState('')
    const [remindre, SetReminer] = useState(false)
    const onSubmit=(e)=>{
        e.preventDefault()

        if(!text || !day){
            alert('please add a task');
            return
        }
        addTask({text,day,remindre})

        SetText('')
        SetDay('')
        SetReminer(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label for='Task'>Task</label>
                <input id='Task' type="text" placeholder='Add Task' value={text}
                    onChange={(e) => SetText(e.target.value)} />
            </div>
            <div className="form-control">
                <label for="Day">Day & Time</label>
                <input id='Day' type="text" placeholder='Add Day & Time'  value={day}
                    onChange={(e) => SetDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label for='Reminder'>Set Reminder</label>
                <input id='Reminder' type="checkbox" 
                checked={remindre}
                 value={remindre}
                 onChange={(e) => SetReminer(e.currentTarget.checked)} />
            </div>
            <input type="Submit" value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
