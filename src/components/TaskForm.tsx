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
    const [priority, setPriority] = useState("low")
    const [status, setStatus] = useState("todo")

    useEffect(() => {
        if (props.editingTask) {
        setTitle(props.editingTask.title)
        setDescription(props.editingTask.description)
        setPriority(props.editingTask.priority)
        setStatus(props.editingTask.status)
    } else {
        setTitle("")
        setDescription("")
        setPriority("Low")
        setStatus("Todo")
    }
    }, [props.editingTask])

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option>Todo</option>
                <option>In Progress</option>
                <option>Completed</option>
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
                <button
                    onClick={() => {
                        const newTask = {
                            title: title,
                            description: description,
                            priority: priority,
                            status: status
                        }

                        props.addTask(newTask)
                        setTitle("")
                        setDescription("")
                    }}
                >
                    Add Task
                </button>
            )}
        </div>
    )
}
