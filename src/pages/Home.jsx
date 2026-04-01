import { BiPencil, BiTrash } from "react-icons/bi"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import TaskContext from "../Context/TaskContext"

function Home() {
    const nav = useNavigate()
    const { TaskList, setTaskList } = useContext(TaskContext)
    const editTask = (task) => {
        nav(`/edittask/${task.id}`)
    }

    const toggleStatus = (task) => {
        setTaskList(TaskList.map(item => (
            item.id == task.id ? { ...item, taskstatus: item.taskstatus == "pending" ? "done" : "pending" } : item
        )))
    }

    const deleteTask = (task) => {
        let confirm = window.confirm("Are you sure you want to delete")
        if (!confirm)
            return
        setTaskList(TaskList.filter(i => (
            i.id != task.id
        )))
        alert("Task deleted successfully")
    }
    return (
        <>
            <h1>TODO LISTS</h1>
            <button className="add" onClick={() => nav("/addtask")}>Add Task</button>
            <div className="tasks">
                {TaskList.map((item) => (
                    <div className="task" style={{ backgroundColor: item.taskstatus == "done" ? "green" : "yellow", color: item.taskstatus == "pending" ? "black" : "white" }}>
                        <input type="checkbox" checked={item.taskstatus == "pending" ? false : true} onChange={() => toggleStatus(item)} />
                        <span>{item.id}</span>
                        <span className="title">{item.tasktitle}</span>
                        <div>{item.taskstatus}</div>
                        <BiPencil className="icon" onClick={() => editTask(item)} />
                        <BiTrash className="icon" onClick={() => deleteTask(item)} />
                    </div>
                ))}
            </div>

        </>
    )
}

export default Home