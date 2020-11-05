import React, { useState } from "react";

export const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      taskName: "Read book",
      type: "toDo",
    },
    {
      id: "2",
      taskName: "Pay bills",
      type: "toDo",
    },
    {
      id: "3",
      taskName: "Go to the gym",
      type: "toDo",
    },
    {
      id: "4",
      taskName: "Play baseball",
      type: "toDo",
    },
  ]);

  const onDragStart = (event: any, taskName: any) => {
    event.dataTransfer.setData("taskName", taskName);
  };

  const onDragOver = (event: any) => {
    event.preventDefault();
  };

  const onDrop = (event: any, cat: any) => {
    let taskName = event.dataTransfer.getData("taskName");

    let newTasks: any = tasks.filter((task) => {
      if (task.taskName === taskName) {
        task.type = cat;
      }
      return task;
    });

    setTasks(newTasks);
  };

  return (
    <>
      <div className="kanboard">
        <div className="drag-container container">
          <h2 className="head">
            Kanban Tasks
          </h2>

          <div className="row">
            <div className="col-4">
              <span className="group-header">To Do</span>
            </div>
            <div className="col-4">
              <span className="group-header">
                In Progress
              </span>
            </div>
            <div className="col-4">
              <span className="group-header">Done</span>
            </div>
          </div>

          <div className="row">
            <div
              className="toDo col-4"
              onDragOver={(event) => onDragOver(event)}
              onDrop={(event) => {
                onDrop(event, "toDo");
              }}
            >
              {tasks.map((task: any, key: number) => {
                return task.type === "toDo" ? (
                  <div
                    draggable={true}
                    onDragStart={(event) =>
                      onDragStart(event, task.taskName)
                    }
                    key={task.taskName}
                    className="draggable card"
                    style={{
                      backgroundColor: "yellow",
                      
                    }}
                  >
                    {task.taskName}
                  </div>
                ) : (
                  ""
                );
              })}
            </div>

            <div
              className="inProgress col-4"
              onDragOver={(event) => onDragOver(event)}
              onDrop={(event) => {
                onDrop(event, "inProgress");
              }}
            >
              {tasks.map((task: any, key: number) => {
                return task.type === "inProgress" ? (
                  <div
                    draggable={true}
                    onDragStart={(event) =>
                      onDragStart(event, task.taskName)
                    }
                    key={task.taskName}
                    className="draggable card"
                    style={{
                      backgroundColor: "cyan",
                    }}
                  >
                    {task.taskName}
                  </div>
                ) : (
                  ""
                );
              })}
            </div>
            <div
              className="droppable col-4"
              onDragOver={(event) => onDragOver(event)}
              onDrop={(event) => {
                onDrop(event, "done");
              }}
            >
              {tasks.map((task: any, key: number) => {
                return task.type === "done" ? (
                  <div
                    draggable={true}
                    onDragStart={(event) =>
                      onDragStart(event, task.taskName)
                    }
                    key={task.taskName}
                    className="card draggable"
                    style={{
                      backgroundColor: "green",
                    }}
                  >
                    {task.taskName}
                  </div>
                ) : (
                  ""
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
