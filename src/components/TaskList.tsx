import React from 'react'
import TaskCard from './TaskCard'
import { Task } from '../types'

interface TaskListProps{
  tasks:Task[],
  startEdit:(tasks:Task) => void;
  deleteTask:(id:number) => void;
}
export default function TaskList(props: TaskListProps) {
  return (
    <div className="task-list-section">
      <div>
        <span>#</span>
        <span>Title</span>
        <span>Description</span>
        <span>Priority</span>
        <span>Status</span>
        <span>Created At</span>
        <span>Actions</span>
      </div>
    {props.tasks.map((t) =>(
    <TaskCard key={t.id}
    task={t}
    startEdit={props.startEdit}
    deleteTask={props.deleteTask}/>
    )
    )}
    </div>
        
        
    
  )
}
