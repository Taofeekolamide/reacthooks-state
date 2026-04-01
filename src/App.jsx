import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"

import './App.css'
import AddTask from "./Pages/AddTasks"
import { useState } from "react"
import { Tasks } from "./Data/Tasks"
import TaskContext from "./Context/TaskContext"
import EditTask from "./pages/EditTask"

function App() {
    const [TaskList, setTaskList] = useState(Tasks)
    return (
        <>
            <TaskContext.Provider value={{ TaskList, setTaskList }}>
                <main>
                    <BrowserRouter>

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/addtask" element={<AddTask />} />
                            <Route path="/edittask/:id" element={<EditTask />} />
                        </Routes>
                    </BrowserRouter>
                </main>
            </TaskContext.Provider>

        </>
    )
}
export default App