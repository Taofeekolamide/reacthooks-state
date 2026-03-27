import { useNavigate, useParams } from "react-router-dom"
import { supabase } from "../Supabase"
import { useContext, useEffect, useState } from "react"
import { AddTaskContext } from "../context/AddTask"

function EditTask() {
    const nav = useNavigate()
    const { id } = useParams()
    const [title, setTitle] = useState("")
    const { tasks, setTasks } = useContext(AddTaskContext)

    const [toEdit, setToEdit] = useState(tasks.find((item) => (
        item.id == id
    )))

    const updateTask = () => {
        setTasks(tasks.map((item) => (
            item.id == id ? { ...item, task_title: title } : item
        )))
        alert("Task updated successfully")
        nav('/tasks')
    }

    const GoTo = () => {
        nav('/tasks')
    }




    return (
        <>
            <div className="main">
                <h1>Edit Task</h1>
                <button className="add" onClick={GoTo}>Go to Tasks</button>
                <input type="text" defaultValue={toEdit.task_title} onChange={(e) => setTitle(e.target.value)} />
                <button onClick={updateTask}>Update</button>
            </div>
        </>
    )
}

export default EditTask