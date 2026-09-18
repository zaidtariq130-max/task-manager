import React from 'react'
import TaskCard from './TaskCard'
export default function TaskList(props) {
  return (
    <div>
    {props.tasks.map((t) =>(
    <TaskCard key={t.id} task={t} startEdit={props.startEdit} deleteTask={props.deleteTask}/>
    )
    )}
    </div>
        
        
    
  )
}
