import React from 'react'
import { Task } from '../types'

interface TaskCardProps{
  task:Task,
  startEdit:(task:Task) => void;
  deleteTask:(id:number) => void;
}
export default function TaskCard(props:TaskCardProps) {
  return (
    <div>
        {props.task.id},
        {props.task.title},
        {props.task.description},
        {props.task.priority},
        {props.task.status},
        {props.task.createdAt}
        <button onClick={() => props.startEdit(props.task)}>
        Edit Task
        </button>
        <button onClick={() => props.deleteTask(props.task.id)}>
        Delete
        </button>
    </div>
  )
}
