import icon from "../Task/delete.png"

function Task(props) {
    return(
        <div className="task">
            <label>
                <div className="checkbox__circle">
                </div>
                <input className="checkbox__input" type="checkbox"/>
                    <span className="task__description">{props.task.title}</span>
            </label>
            <div className="task__delete">
                <img src={icon} alt="del"/>
            </div>
        </div>
    )
}


export default Task