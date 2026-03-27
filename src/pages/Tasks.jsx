import { useContext, useEffect, useState } from "react"
import { supabase } from "../Supabase"
import { Link, useNavigate } from "react-router-dom"
import { BiPencil, BiTrash } from "react-icons/bi"
import { AddTaskContext } from "../context/AddTask"

function Tasks() {
    const { tasks, setTasks } = useContext(AddTaskContext)
    const nav = useNavigate()

    const addTask = () => {
        nav('/addtask')
    }

    const deleteTask = (i) => {
        const confirm = window.confirm("Are you sure you want to delete this task")
        if (!confirm) return

        setTasks(tasks.filter((item) => (
            item.id !== i.id
        )))
        alert("Task Deleted Successfully")
    }

    const ChangeStatus = (task) => {
        if (task.status == "pending") {
            setTasks(tasks.map((item) => (
                task.id == item.id ? { ...item, status: "done" } : item
            )))
        } else {
            setTasks(tasks.map((item) => (
                task.id == item.id ? { ...item, status: "pending" } : item
            )))
        }
    }

    const EditTask = (item) => {
        nav(`/edit/${item.id}`)
    }

    return (
        <>
            <div className="main">

                <h1>TODO LIST</h1>

                <button className="add" onClick={addTask}>Add Task</button>

                <div className="tasks">
                    {tasks.map((item) => (
                        <div key={item.id} className="task" style={{ backgroundColor: item.status === "done" ? "rgb(172, 255, 172)" : "rgb(255, 255, 161)" }}>
                            <input type="checkbox" checked={item.status == "done" ? true : false} onChange={(e) => ChangeStatus(item)} />
                            <div className="title">
                                <h5 style={{ textDecoration: item.status == "done" ? "line-through" : "none" }}>{item.task_title}</h5>
                            </div>
                            <div>
                                <BiTrash className="icon" onClick={() => deleteTask(item)} />
                                <BiPencil className="icon" onClick={() => EditTask(item)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Tasks