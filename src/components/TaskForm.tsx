import React, { useState, useEffect } from 'react'
import { Task, NewTask } from '../types'
interface TaskFormProps {
  editingTask: Task | null;
  addTask: (newTask: NewTask) => void;
  editTask: (updatedTask: Task) => void;
}
export default function TaskForm(props: TaskFormProps) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    const [status, setStatus] = useState("")

    useEffect(() => {
        if (props.editingTask) {
        setTitle(props.editingTask.title)
        setDescription(props.editingTask.description)
        setPriority(props.editingTask.priority)
        setStatus(props.editingTask.status)
    } else {
        setTitle("")
        setDescription("")
        setPriority("")
        setStatus("")
    }
    }, [props.editingTask])

    return (
        <div>
            <h1 className='header-txt'>Add Task Here</h1>
            <input
                type="text"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="Enter task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="">Select Status</option>
                 <option value="Todo">Todo</option>
                 <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
            </select>

            {props.editingTask ? (
                <button
                    onClick={() => {
    if (props.editingTask) {
        const updatedTask: Task = {
            id: props.editingTask.id,
            title: title,
            description: description,
            priority: priority,
            status: status,
            createdAt: props.editingTask.createdAt
        }
        props.editTask(updatedTask)
    }
}}
                >
                    Edit Task
                </button>
            ) : (
                <button className="btn-add"
                    onClick={() => {
  if (!title || !description || !priority || !status) {
    alert("Please fill all fields")
    return
  }

  const newTask = {
    title,
    description,
    priority,
    status
  }

  props.addTask(newTask)

  setTitle("")
  setDescription("")
  setPriority("")
  setStatus("")
}}
                >
                    Add Task
                </button>
            )}
        </div>
    )
}
