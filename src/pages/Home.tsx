
import TaskForm from "../components/TaskForm"
import { Task, NewTask } from "../types"

interface HomeProps {
  editingTask: Task | null
  addTask: (newTask: NewTask) => void
  editTask: (updatedTask: Task) => void
}

export default function Home(props: HomeProps) {
  return (
    <div className="page-wrapper">
      <TaskForm
        addTask={props.addTask}
        editingTask={props.editingTask}
        editTask={props.editTask}
      />
    </div>
  )
}