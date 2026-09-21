
export interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  status: string;
  createdAt: string;
}


export interface NewTask {
  title: string;
  description: string;
  priority: string;
  status: string;
}