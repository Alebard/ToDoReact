import icon from "./plus.png"
import {useState} from "react";




function Form(props) {
    const [taskName, setTaskName] = useState('')

    function saveTaskName(e) {
        setTaskName(e.target.value)
    }

    function addTask (e){
        e.preventDefault();
        const task = {title: taskName, status: true, priority: props.priority, id: getRandomId()};
        props.setTasks([task, ...props.tasks]);
        console.log(props.tasks)
    }

    function getRandomId(){
        return  Math.random().toString()
    }

    const placeholderText = props.priority === 'high'? 'Добавить важных дел' : 'Добавить'
    return(
            <form className="tasks__form">
                <input type="text" className="tasks__input" placeholder={placeholderText} onChange={saveTaskName}/>
                    <button className="btnAdd" onClick={addTask}>
                        <img src={icon} alt="plus"/>
                    </button>
            </form>
    )
}

export default Form