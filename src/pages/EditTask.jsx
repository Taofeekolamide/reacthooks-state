import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import TaskContext from "../Context/TaskContext"

function EditTask() {
    const nav = useNavigate()
    const [newTitle, setNewTitle] = useState("")
    const { id } = useParams()
    const { TaskList, setTaskList } = useContext(TaskContext)
    const [edit, setEdit] = useState(TaskList.find(item => item.id == id))

    const editTask = (e) => {
        e.preventDefault()
        setTaskList(TaskList.map(item => (
            item.id == id ? { ...item, tasktitle: newTitle } : item
        )))
        alert("edit successful")
        nav("/")
    }
    return (
        <>
            <h1>Edit Task</h1>
            <form onSubmit={editTask}>
                <input type="text" defaultValue={edit.tasktitle} onChange={(e) => setNewTitle(e.target.value)} required />
                <button type="submit">Update</button>
            </form>


            <h1>{id}</h1>
        </>
    )
}

export default EditTask