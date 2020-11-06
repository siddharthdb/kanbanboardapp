export enum TaskType {
    toDo,
    inProgress,
    done
}

export class Task {    
    id: Number;
    taskName: String;
    description: String;
    type: TaskType;

    constructor() {
        this.id = 0;
        this.taskName = "";
        this.description = "";
        this.type = TaskType.toDo;
    }
}