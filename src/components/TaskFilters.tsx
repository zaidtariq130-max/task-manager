import React from 'react'
import { Task } from '../types'
interface TaskFiltersProps{
  searchTerm: string;
  setSearchTerm:(value:string) => void;
  filterStatus: string;
  setFilterStatus: (value:string) => void;
  filterPriority:string;
  setFilterPriority:(value:string)=> void;


}
export default function TaskFilters(props: TaskFiltersProps) {
  return (
    <div>
    <input
    type="text"
    placeholder="Search by title"
    value={props.searchTerm}
    onChange={(e) => props.setSearchTerm(e.target.value)}/
    >
    <select
    value={props.filterStatus}
    onChange={(e) => props.setFilterStatus(e.target.value)}>
    <option value="">All Status</option>
    <option value="Todo">Todo</option>
    <option value="In Progress">In Progress</option>
    <option value="Completed">Completed</option>
    </select>

    <select
        value={props.filterPriority}
        onChange={(e) => props.setFilterPriority(e.target.value)}
      >
        <option value="">All Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  )
}
