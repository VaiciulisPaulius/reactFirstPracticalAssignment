import { useState } from 'react'

function TaskItem({task, remove, changeState}) {

    const changeTaskState = e => {
        console.log(e)
        task.state = e.target.name
    }

    return (
        <>
            <div>
                <h2>{task.name}</h2>
                <p>{task.description}</p>

                <label>Nebaigtas</label>
                <input onChange={e => changeTaskState(e)} type="radio" id="unfinishedState" name="Taskstate"></input>
                
                <label>Baigtas</label>
                <input onChange={e => changeTaskState(e)} type="radio" id="finishedState" name="Taskstate"></input>

                <label>Vykdomas</label>
                <input onChange={e => changeTaskState(e)} type="radio" id="doingState" name="Taskstate"></input>

                <label>Stabdytas:</label>
                <input onChange={e => changeTaskState(e)} type="radio" id="onHoldState" name="Taskstate"></input>

                <button onClick={changeState()}>Pakeisti būseną</button>
                <button onClick={deleteTask()}>Trinti</button>
            </div>
        </>
    )
}

export default TaskItem
