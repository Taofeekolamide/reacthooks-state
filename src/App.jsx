import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import AddTask from "./pages/AddTask"
import Tasks from "./pages/Tasks"
import EditTask from "./pages/EditTask"
import './App.css'
import { AddTaskContext } from "./context/AddTask"
import { useState } from "react"
import { Tasksed } from "./Data/Tasks"

function App() {
  const [tasks, setTasks] = useState(Tasksed)
  
  return (
    <>
      <AddTaskContext.Provider value={{ tasks, setTasks }}>
        <BrowserRouter>
          <Routes>
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/addtask" element={<AddTask />} />
            <Route path="/edit/:id" element={<EditTask />} />
          </Routes>
        </BrowserRouter>
      </AddTaskContext.Provider>

    </>
  )
}

export default App