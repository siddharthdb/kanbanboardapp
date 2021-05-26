import React from "react";
import { render, screen } from "@testing-library/react";
import { KanbanColumn } from "./KanbanColumn";
import { TaskType, Task } from "../models/Tasks";

test("renders project task title", () => {
    const tasks: Task[] = [];

    [1, 2].forEach(v => {
        const t = new Task();
        t.id = v;
        t.taskName = `Task ${v}`;
        t.description = `Task Description ${v}`;
        t.type= TaskType.toDo;
        tasks.push(t);
    })
    

  const props = {
    columnName: "To Do",
    taskType: TaskType.toDo,
    tasks: tasks,
    onDragOver: () => {
      return;
    },
    onDrop: (event: any, cat: TaskType) => {
      return;
    },
    onDragStart: (event: any, taskName: any) => {
      return;
    },
    handleModal: () => {
      return;
    },
    handleRemoveTask: (id: number) => {
      return;
    },
  };
  render(<KanbanColumn {...props} />);
  const linkElement = screen.getByText(/To Do/i);
  expect(linkElement).toBeInTheDocument();
});
