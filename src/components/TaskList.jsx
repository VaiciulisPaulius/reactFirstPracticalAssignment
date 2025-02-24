import { useState } from 'react'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem';

function TaskList() {
    const [tasks, setTasks] = useState([])

    const addTask = data => {
        console.log("hello")
        if(data == null) return;
        if(data.name == null) return;
        if(data.description == null) return;
        if(data.state == null) return;
        if(data.id == null) return;

        console.log("hello")

        setTasks(prevTasks => [...prevTasks, data])
    }

    const removeTask = taskToRemove => {
        setTasks(tasks.filter(value => value.id != taskToRemove.id))
    }

    const changeState = taskToChange => {
        updatedTasks = tasks.map(task => {
            task.id === taskToChange.id ? { ...task, state: taskToChange.state} : state
        })
        setTasks(updatedTasks)
    }

    return (
        <>
            <TaskForm add={addTask}></TaskForm>
            
            {
                tasks.map(task => {
                    return <TaskItem key={task.id} task={task} remove={removeTask} changeState={changeState}></TaskItem>
                })
            }
        </>
    )
}

export default TaskList
