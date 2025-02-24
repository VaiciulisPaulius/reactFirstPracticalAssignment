import { useState, useRef } from 'react'


function TaskForm({add}) {

    const taskNameRef = useRef(null)
    const taskDescriptionRef = useRef(null)
    const taskStateRef = useRef(null)

    const [msg, setMsg] = useState("");

    const addTask = e => {
        e.preventDefault()

        const taskNameValue = taskNameRef.current.value
        const taskDescriptionValue = taskNameRef.current.value
        const taskStateValue = taskNameRef.current.value

        if(!taskNameValue || !taskDescriptionValue || !taskStateValue) {
            setMsg("Įveskite visas laukus!")
            return;
        }


        const task = {
            id: crypto.randomUUID(),
            name: taskNameValue,
            description: taskDescriptionValue,
            state: taskStateValue
        }

        console.log(task)

        add(task);

        setMsg("Užduotis sėkmingai pridėtas!")
    }

    return (
        <>
            <form onSubmit={e => addTask(e)}>
                <label>Įveskite užduoties pavadinima:</label>
                <input ref={taskNameRef} type="text" name="taskName"/>

                <label>Įveskite užduoties aprašyma:</label>
                <input ref={taskDescriptionRef} type="text" name="taskDescription"/>

                <label>Įveskite užduoties būseną:</label>

                <label>Nebaigtas</label>
                <input ref={taskStateRef} type="radio" id="unfinishedState" name="Taskstate"></input>

                <label>Baigtas</label>
                <input ref={taskStateRef} type="radio" id="finishedState" name="Taskstate"></input>

                <label>Vykdomas</label>
                <input ref={taskStateRef} type="radio" id="doingState" name="Taskstate"></input>

                <label>Stabdytas:</label>
                <input ref={taskStateRef} type="radio" id="onHoldState" name="Taskstate"></input>

                
                <button type="submit">Pridėti</button>
            </form>
        </>
    )
}

export default TaskForm