import { useState } from "react";
import Headre from "./components/Headre";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [ShowAddTask, SetShowAddTask] = useState(true);
  const [tasks, SetTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  const addTask = (task)=>{
    const id = Math.floor(Math.random()* 10000) +1;
    const newTask ={id, ...task}
    SetTasks([...tasks,newTask])  
  }
  const DeleteTask = (id) => {
    SetTasks(tasks.filter((task) => task.id !== id));
  };

  const ReminderToggle = (id) => {
    SetTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Headre title={"To-Do-List"} addTask={()=>SetShowAddTask(!ShowAddTask)} showAdd={ShowAddTask} />
      {ShowAddTask && <AddTask addTask={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          Delete={DeleteTask}
          ReminderToggle={ReminderToggle}
        />
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
