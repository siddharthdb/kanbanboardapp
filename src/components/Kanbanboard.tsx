import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Task, TaskType } from "../models/Tasks";
import { AddTask } from "./AddTask";
import { KanbanColumn } from "./KanbanColumn";

export const KanbanBoard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isOpen, toggleModal] = useState(false);

  const onDragStart = (event: any, taskName: any) => {
    event.dataTransfer.setData("taskName", taskName);
  };

  const onDragOver = (event: any) => {
    event.preventDefault();
  };

  const onDrop = (event: any, cat: TaskType) => {
    const taskName = event.dataTransfer.getData("taskName");

    const newTasks: Task[] = tasks.filter((task) => {
      if (task.taskName === taskName) {
        task.type = cat;
      }
      return task;
    });

    setTasks([...newTasks]);
  };

  const handleRemoveTask = (id: number) => {
    const newTasks = tasks.filter((t: Task) => t.id !== id);

    setTasks([...newTasks]);
  };

  const handleAddTask = (task: Task) => {
    setTasks([task, ...tasks]);
    handleModal();
  };
  const handleModal = () => {
    toggleModal(!isOpen);
  };

  return (
    <>
      <div className="kanboard">
        <div className="drag-container">
          <h4 className="head">Project Tasks</h4>

          <div className="d-flex flex-auto flex-row mt-3">
            <KanbanColumn
              columnName="To Do"
              taskType={TaskType.toDo}
              tasks={tasks}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onDragStart={onDragStart}
              handleModal={handleModal}
              handleRemoveTask={handleRemoveTask}
            ></KanbanColumn>
            <KanbanColumn
              columnName="In Progress"
              taskType={TaskType.inProgress}
              tasks={tasks}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onDragStart={onDragStart}
              handleModal={handleModal}
              handleRemoveTask={handleRemoveTask}
            ></KanbanColumn>
            <KanbanColumn
              columnName="Done"
              taskType={TaskType.done}
              tasks={tasks}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onDragStart={onDragStart}
              handleModal={handleModal}
              handleRemoveTask={handleRemoveTask}
            ></KanbanColumn>
          </div>
        </div>

        <Modal show={isOpen} onHide={handleModal} centered animation={false}>
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Task
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddTask handleSubmit={handleAddTask}></AddTask>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
