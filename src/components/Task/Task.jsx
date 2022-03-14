import icon from "../Task/delete.png"
import {useState} from "react";

function Task(props) {
    const [checked, setChecked] = useState(false)

    function deleteTask(event) {
        event.stopPropagation()
        const newTasks = props.tasks.filter((item)=> item.id !== props.task.id )
        props.setTasks(newTasks)

    }

    function changeStatus() {
        setChecked(!checked);
    }

    return(
        <div className = {!checked ? "task" : 'task checked'} onClick={changeStatus}>
            <label>
                <div className="checkbox__circle">
                </div>
                <input className="checkbox__input" type="checkbox"/>
                    <span className="task__description">{props.task.title}</span>
            </label>
            <div className="task__delete" onClick={deleteTask}>
                <img src={icon} alt="del" />
            </div>
        </div>
    )
}


export default Task