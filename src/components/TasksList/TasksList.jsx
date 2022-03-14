import {useState} from "react";
import TasksPriority from "../TasksPriority/TasksPriority";





function TasksList() {
    const [tasks, setTasks] = useState([]);
    const priorities = ['high', 'low'];
    const priorityList = priorities.map((priority) =>
        <TasksPriority priority={priority} key={priority} tasks={tasks} setTasks={setTasks}/>
    )
    return (
        <div className="todo__display">
            {priorityList}
        </div>
    )
}

export default TasksList