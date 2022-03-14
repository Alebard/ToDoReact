import icon from "./plus.png"
import {useState} from "react";




function Form(props) {
    const [value, setValue] = useState('')

    function saveTaskName(e) {
        setValue(e.target.value)
    }

    function addTask (e){
        e.preventDefault();
        const task = {title: value, status: true, priority: props.priority, id: getRandomId()};
        props.setTasks([task, ...props.tasks]);
        console.log(props.tasks)
        setValue('')
    }

    function getRandomId(){
        return  Math.random().toString()
    }

    const placeholderText = props.priority === 'high'? 'Добавить важных дел' : 'Добавить'
    return(
            <form className="tasks__form" onSubmit={addTask}>
                <input type="text" value={value} className="tasks__input" placeholder={placeholderText} onChange={saveTaskName}/>
                    <button className="btnAdd">
                        <img src={icon} alt="plus"/>
                    </button>
            </form>
    )
}

export default Form