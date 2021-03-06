export enum TaskType {
  toDo,
  inProgress,
  done,
}

export class Task {
  id: number;
  taskName: string;
  description: string;
  type: TaskType;

  constructor() {
    this.id = 0;
    this.taskName = "";
    this.description = "";
    this.type = TaskType.toDo;
  }
}
