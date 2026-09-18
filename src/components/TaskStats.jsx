import React from 'react'

export default function TaskStats(props) {
    const totalTasks = props.tasks.length
    const todoTasks = props.tasks.filter((task) => task.status === "Todo").length
    const inProgressTasks = props.tasks.filter((task) => task.status === "In Progress").length
    const completedTasks = props.tasks.filter((task) => task.status === "Completed").length
    
  return (
    <div>
        <h2>Task Stats</h2>

        <p>Total Tasks: {totalTasks}</p>
        <p>Todo: {todoTasks}</p>
        <p>In Progress: {inProgressTasks}</p>
        <p>Completed: {completedTasks}</p>
    </div>
  )
}
