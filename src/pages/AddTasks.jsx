import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import TaskContext from "../Context/TaskContext"

function AddTask() {
    const { TaskList, setTaskList } = useContext(TaskContext)
    const [title, setTitle] = useState("")

    const nav = useNavigate()
    const addTask = (e) => {
        e.preventDefault()
        setTaskList([...TaskList, { id: TaskList[TaskList.length - 1].id + 1, tasktitle: title, taskstatus: "pending" }])
        alert("task added succesfully")
        nav("/")
    }
    return (
        <>
            <h1>Add Task</h1>
            <form onSubmit={addTask}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" required />
                <button>Add Task</button>
            </form>

        </>
    )
}

export default AddTask