import React from 'react'
import { Task } from '../types'

interface TaskCardProps{
  task:Task,
  startEdit:(task:Task) => void;
  deleteTask:(id:number) => void;
}
export default function TaskCard(props:TaskCardProps) {
  const priorityClass =
    props.task.priority === "High" ? "priority-high" :
    props.task.priority === "Medium" ? "priority-medium" : "priority-low"

  const statusClass =
    props.task.status === "In Progress" ? "status-inprogress" :
    props.task.status === "Completed" ? "status-completed" : "status-todo"

  return (
    <div className="task-card">
        <span>{props.task.id}</span>
        <span>{props.task.title}</span>
        <span>{props.task.description}</span>
        <span className={priorityClass}>{props.task.priority}</span>
        <span className={statusClass}>{props.task.status}</span>
        <span style={{fontSize:"12px", color:"#64748b"}}>{props.task.createdAt}</span>
        <div className="task-card-actions">
          <button className="btn-edit" onClick={() => props.startEdit(props.task)}>Edit</button>
          <button className="btn-delete" onClick={() => props.deleteTask(props.task.id)}>Delete</button>
        </div>
    </div>
  )
}
