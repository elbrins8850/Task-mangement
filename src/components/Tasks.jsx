
import Task from "./Task"
const Tasks = ({tasks,Delete,ReminderToggle}) => {
  return (
    <>
      {tasks.map((task)=>{
        return(
        <Task key={task.id} task={task} Delete={Delete} ReminderToggle={ReminderToggle}/>
        )
      })}
    </>
  )
}

export default Tasks
