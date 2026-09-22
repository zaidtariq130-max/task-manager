import React from 'react'
import { Task } from '../types'

interface TaskCardProps {
  task: Task
  startEdit: (task: Task) => void
  deleteTask: (id: number) => void
}

export default function TaskCard(props: TaskCardProps) {
  return (
    <div className="TaskCardTable">
      <span>{props.task.id}</span>
      <span>{props.task.title}</span>
      <span>{props.task.description}</span>
      <span>{props.task.priority}</span>
      <span>{props.task.status}</span>
      <span>{props.task.createdAt}</span>

      <span>
        <button
          className="btn-edit"
          onClick={() => props.startEdit(props.task)}
        >
          Edit Task
        </button>

        <button
          className="btn-delete"
          onClick={() => props.deleteTask(props.task.id)}
        >
          Delete
        </button>
      </span>
    </div>
  )
}