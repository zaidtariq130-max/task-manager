import React, { useState,useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskStats from './components/TaskStats'
import TaskFilters from './components/TaskFilters'

export default function App() {
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks")
  if (savedTasks) {
    return JSON.parse(savedTasks)
  } else {
    return [
      {
        id: 1,
        title: "Todo",
        description: "This is todo app",
        priority: "High",
        status: "Todo",
        createdAt: "Thursday 6 2026"
      },
      {
        id: 2,
        title: "Todo 2",
        description: "This is todo app",
        priority: "Low",
        status: "In Progress",
        createdAt: "Thursday 7 2026"
      }
    ]
  }
})

  useEffect(() => {
     localStorage.setItem("tasks", JSON.stringify(tasks))
   }, [tasks])
  const [editingTask, setEditingTask] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("")
  const [filterPriority, setFilterPriority] = useState("")

  function addTask(newTask) {
    const newId = tasks.length + 1
    const createdAt = new Date().toLocaleString()

    const taskWithId = {
      ...newTask,
      id: newId,
      createdAt: createdAt
    }
    setTasks([...tasks, taskWithId])
  }

  function editTask(updatedTask) {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)))
    setEditingTask(null)
  }

  function startEdit(task) {
    setEditingTask(task)
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id))
  }


  const filteredTasks = tasks.filter((task) => {
  const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase())
  const matchesStatus = filterStatus === "" || task.status.toLowerCase() === filterStatus.toLowerCase()
  const matchesPriority = filterPriority === "" || task.priority.toLowerCase() === filterPriority.toLowerCase()
  
  return matchesSearch && matchesStatus && matchesPriority
})

  return (
    <div>
      <TaskForm addTask={addTask} editingTask={editingTask} editTask={editTask} />
      <TaskList tasks={filteredTasks} startEdit={startEdit} deleteTask={deleteTask} />
      <TaskStats tasks={tasks} />
      <TaskFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
      />
    </div>
  )
}