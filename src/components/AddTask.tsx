import React from "react";
import { Button, Form } from "react-bootstrap";
import { Task, TaskType } from "../models/Tasks";

interface IProps {
  handleSubmit: (task: Task) => void;
}

export const AddTask: React.FunctionComponent<IProps> = (props: IProps) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const task = new Task();
    task.id = Date.now();
    task.taskName = event.target.elements.name.value;
    task.description = event.target.elements.description.value;
    task.type = TaskType.toDo;
    props.handleSubmit(task);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="taskName"
            placeholder="e.g.: Bug Fix - For some ABCD item"
          ></Form.Control>
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            type="text"
            id="description"
            name="description"
            placeholder="e.g.: Bug Fix - For some ABCD item"
          ></Form.Control>
          <Button variant="primary" type="submit">
            Add Task
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};
