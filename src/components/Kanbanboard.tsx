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
          <h4 className="head">
            Project Tasks
          </h4>        

          <div className="d-flex flex-auto flex-row mt-3">            
            <div
              className="toDo col-4 mr-2"
              onDragOver={(event) => onDragOver(event)}
              onDrop={(event) => {
                onDrop(event, "toDo");
              }}
            >
              <div draggable={false} className="group-header py-2 mx-2">To Do</div>
              {tasks.map((task: any, key: number) => {
                return task.type === "toDo" ? (
                  <div
                    draggable={true}
                    onDragStart={(event) =>
                      onDragStart(event, task.taskName)
                    }
                    key={task.taskName}
                    className="draggable card m-2 "
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
              className="inProgress col-4 mr-2"
              onDragOver={(event) => onDragOver(event)}
              onDrop={(event) => {
                onDrop(event, "inProgress");
              }}
            >
              <div draggable={false} className="group-header py-2 mx-2">In Progress</div>
              {tasks.map((task: any, key: number) => {
                return task.type === "inProgress" ? (
                  <div
                    draggable={true}
                    onDragStart={(event) =>
                      onDragStart(event, task.taskName)
                    }
                    key={task.taskName}
                    className="draggable card m-2"
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
              className="droppable done col-4 "
              onDragOver={(event) => onDragOver(event)}
              onDrop={(event) => {
                onDrop(event, "done");
              }}
            >
              <div draggable={false} className="group-header py-2 mx-2">Done</div>
              {tasks.map((task: any, key: number) => {
                return task.type === "done" ? (
                  <div
                    draggable={true}
                    onDragStart={(event) =>
                      onDragStart(event, task.taskName)
                    }
                    key={task.taskName}
                    className="card draggable m-2"
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
