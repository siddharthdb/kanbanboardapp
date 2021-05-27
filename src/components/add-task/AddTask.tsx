import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import { Task, TaskType } from "../../models/Tasks";

interface IProps {
  handleSubmit: (task: Task) => void;
}

export const AddTask: React.FunctionComponent<IProps> = (props: IProps) => {
  const displayName = 'kanbanAddTask';

  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const task = new Task();
    task.id = Date.now();
    task.taskName = taskName;
    task.description = taskDescription;
    task.type = TaskType.toDo;
    props.handleSubmit(task);
  };

  return (
    <div className={displayName}>
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            id="taskName"
            name="taskName"
            aria-label="taskName"
            placeholder="e.g.: Bug Fix - For some ABCD item"
            onChange={(e) => setTaskName(e.target.value)}
          ></Form.Control>
          <Form.Label className="mt-3">Task Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            id="description"
            name="description"
            aria-label="description"
            placeholder="e.g.: Description of task"
            onChange={(e) => setTaskDescription(e.target.value)}
          ></Form.Control>
          <button className="mt-3 btn btn-primary" type="submit" data-testid="addTask">
            Add Task
          </button>
        </Form.Group>
      </form>
    </div>
  );
};
