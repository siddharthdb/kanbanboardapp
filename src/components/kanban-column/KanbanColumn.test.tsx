import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { KanbanColumn } from "./KanbanColumn";
import { TaskType, Task } from "../../models/Tasks";

const tasks: Task[] = [];
[1, 2].forEach((v) => {
  const t = new Task();
  t.id = v;
  t.taskName = `Task ${v}`;
  t.description = `Task Description ${v}`;
  t.type = TaskType.toDo;
  tasks.push(t);
});

const props = {
  columnName: "To Do",
  taskType: TaskType.toDo,
  tasks: tasks,
  onDragOver: jest.fn(),
  onDrop: jest.fn(),
  onDragStart: jest.fn(),
  handleModal: jest.fn(),
  handleRemoveTask: jest.fn(),
};

beforeEach(() => {
  render(<KanbanColumn {...props} />);
});

test("renders project task title", () => {
  const linkElement = screen.getByText(/To Do/i);
  expect(linkElement).toBeInTheDocument();
});

test("should have 2 tasks", () => {
  const badgeValue = screen.getByText("2");
  expect(badgeValue).toBeInTheDocument();
});

test("should delete a task", () => {  
  const removeTasks = screen.getAllByRole("remove-task");
  fireEvent.click(removeTasks[0]);

  expect(props.handleRemoveTask).toHaveBeenCalledTimes(1);
});

test("should open add task modal", () => {  
  const addTask = screen.getByTestId("add-task");
  fireEvent.click(addTask);

  expect(props.handleModal).toHaveBeenCalledTimes(1);
});
