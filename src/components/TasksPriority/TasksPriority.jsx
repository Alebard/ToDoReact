import Form from "../Form/Form";
import Task from "../Task/Task";

function TasksPriority(props) {
    const tasksList = props.tasks.filter((task) => task.priority === props.priority)
    return (
        <div className='tasks'>
            <div className="tasks__block_title">{props.priority}</div>
            <Form priority={props.priority} tasks = {props.tasks} setTasks={props.setTasks}/>
            {tasksList.map((task) => (
                <Task task={task} key={task.id} tasks = {props.tasks} setTasks={props.setTasks} />
            ))}
        </div>
    )
}


export default TasksPriority
