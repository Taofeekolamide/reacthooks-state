import { useContext, useEffect, useState } from "react"
import { supabase } from "../Supabase"
import { useNavigate } from "react-router-dom"
import { AddTaskContext } from "../context/AddTask"

function AddTask() {
    const [title, setTitle] = useState("")
    const nav = useNavigate()

    const { tasks, setTasks } = useContext(AddTaskContext)

    const addTask = () => {
        setTasks([...tasks, { id: tasks[tasks.length - 1].id + 1, task_title: title, status: "pending" }])
        alert("Task addedd successfully")
        setTitle("")
        nav('/tasks')
    }

    const GoTo = () => {
        nav("/tasks")
    }

    return (
        <>
            <div className="main">
                <h1>Add Task</h1>
                <button className="add" onClick={GoTo}>Go to Tasks</button>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <button onClick={addTask}>Add</button>
            </div>

        </>
    )
}

export default AddTask