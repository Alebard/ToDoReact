import {useState} from "react";
import TasksPriority from "../TasksPriority/TasksPriority";

const taskList = [
    {title: "task1", status: true, priority: "low", id: "1"},
    {title: "task2", status: true, priority: "high", id: "2"},
    {title: "task3", status: false, priority: "low", id: "3"},
    {title: "task4", status: true, priority: "high", id: "4"},
    {title: "task5", status: false, priority: "high", id: "5"},
    {title: "task6", status: true, priority: "low", id: "6"},
    {title: "task7", status: false, priority: "low", id: "7"},
];



function TasksList() {
    const [tasks, setTasks] = useState(taskList);
    const priorities = ['high', 'low'];
    console.log(tasks)
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