import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"
import TaskStats from "../components/TaskStats"
import TaskFilters from "../components/TaskFilters"
import { Task, NewTask } from "../types"

interface TaskListPageProps {
  tasks: Task[]
  editingTask: Task | null
  addTask: (newTask: NewTask) => void
  editTask: (updatedTask: Task) => void
  searchTerm: string
  setSearchTerm: (value: string) => void
  filterStatus: string
  setFilterStatus: (value: string) => void
  filterPriority: string
  setFilterPriority: (value: string) => void
  startEdit: (task: Task) => void
  deleteTask: (id: number) => void
}

export default function TaskListPage(props: TaskListPageProps) {
  return (
    <div>
      {props.editingTask && (
        <TaskForm
          editingTask={props.editingTask}
          addTask={props.addTask}
          editTask={props.editTask}
        />
      )}

      <TaskFilters
        searchTerm={props.searchTerm}
        setSearchTerm={props.setSearchTerm}
        filterStatus={props.filterStatus}
        setFilterStatus={props.setFilterStatus}
        filterPriority={props.filterPriority}
        setFilterPriority={props.setFilterPriority}
      />

      <TaskList
        tasks={props.tasks}
        startEdit={props.startEdit}
        deleteTask={props.deleteTask}
      />

      <TaskStats tasks={props.tasks} />
    </div>
  )
}