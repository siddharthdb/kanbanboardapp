import React from "react";
import { Badge } from "react-bootstrap";
import { Task, TaskType } from "../models/Tasks";
import Remove from "./delete-bin.svg";

export const KanbanColumn = (props: any) => {
  const columnStyle = `${TaskType[props.taskType]} col-4 mr-2`;

  const deleteTask = (id: Number) => {
    props.handleRemoveTask(id);
  };

  return (
    <div
      className={columnStyle}
      onDragOver={(event) => props.onDragOver(event)}
      onDrop={(event) => {
        props.onDrop(event, props.taskType);
      }}
    >
      <div draggable={false} className="group-header mx-2">
        <Badge pill variant="secondary" className="px-2 py-1 my-3 mx-1">
          {props.tasks.filter((t: any) => t.type === props.taskType).length}
        </Badge>{" "}
        <span className="my-3 mx-1">{props.columnName}</span>
        <button
          className="float-right btn btn-light"
          style={{ padding: 0 }}
          onClick={props.handleModal}
          hidden={props.taskType !== TaskType.toDo}
        >
          <span className="px-2" style={{ fontSize: 28 }}>
            +
          </span>
        </button>
      </div>
      {props.tasks.map((task: Task, key: number) => {
        return task.type === props.taskType ? (
          <div
            draggable={true}
            onDragStart={(event) => props.onDragStart(event, task.taskName)}
            key={key}
            className="draggable card m-2 "
            style={{
              backgroundColor: "#eee",
            }}
          >
            <span className="title">
              <img
                alt="task"
                style={{ width: 22 }}
                className="mr-2"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0xMjMuMzksMzkxLjk1MmgxNy4yODR2My40NzZjMCwzMS45MzIsMjguMzA0LDU3LjkwMiw2My4wOTMsNTcuOTAyaDI3Ljk4M2gxMzMuNTQ0aDEyLjAwNkgzODguNiAgYzM0Ljc5OSwwLDYzLjEwNC0yNS45NzEsNjMuMTA0LTU3LjkwMlYxNzcuOTUyYzAtMzEuOTIzLTI4LjMwNS01Ny45MDMtNjMuMTA0LTU3LjkwM2gtMTcuMjgzdi0zLjQ3NSAgYzAtMzEuOTM1LTI4LjI5NS01Ny45MDQtNjMuMDk0LTU3LjkwNGgtMjMuMzA1SDE1MS4zNzNIMTIzLjM5Yy0zNC43ODksMC02My4wOTMsMjUuOTctNjMuMDkzLDU3LjkwNHYyMTcuNDc0ICBDNjAuMjk3LDM2NS45Nyw4OC42MDEsMzkxLjk1MiwxMjMuMzksMzkxLjk1MnogTTM4OC42LDEzOS4wMDRjMjMuNDQ1LDAsNDIuNDQ1LDE3LjQzOCw0Mi40NDUsMzguOTQ4djIxNy40NzYgIGMwLDIxLjUwOS0xOSwzOC45NDktNDIuNDQ1LDM4Ljk0OWgtMTEuMjk5aC0xMi4wMDZIMjMxLjc1MWgtMjcuOTgzYy0yMy40MzYsMC00Mi40MzUtMTcuNDQtNDIuNDM1LTM4Ljk0OXYtMy40NzZ2LTE4Ljk1NVYxNzcuOTUyICBjMC0yMS41MTEsMTguOTk5LTM4Ljk0OCw0Mi40MzUtMzguOTQ4aDI3Ljk4M2gxMTguOTE3aDE0LjYyN2g2LjAyMUgzODguNnogTTgwLjk0NCwxMTYuNTc0YzAtMjEuNTExLDE4Ljk5OS0zOC45NDksNDIuNDQ2LTM4Ljk0OSAgaDI3Ljk4M2gxMzMuNTQ1aDIzLjMwNWMyMy40NDcsMCw0Mi40NDUsMTcuNDM4LDQyLjQ0NSwzOC45NDl2My40NzVIMjMxLjc1MWgtMjcuOTgzYy0zNC43ODksMC02My4wOTMsMjUuOTgtNjMuMDkzLDU3LjkwM3YxOTUuMDQ1ICBIMTIzLjM5Yy0yMy40NDcsMC00Mi40NDYtMTcuNDQ5LTQyLjQ0Ni0zOC45NDlWMTE2LjU3NHoiLz48cGF0aCBkPSJNMTk2LjcwOCwxOTguMDM1Yy00LjUzNywwLTguMjEsMy42NzQtOC4yMSw4LjIxMWMwLDQuNTM2LDMuNjczLDguMjEsOC4yMSw4LjIxaDE2NC4yMjhjNC41MzcsMCw4LjIxMS0zLjY3NCw4LjIxMS04LjIxICBjMC00LjUzNy0zLjY3NC04LjIxMS04LjIxMS04LjIxMUgxOTYuNzA4eiIvPjxwYXRoIGQ9Ik0yMjIuNjU1LDI2Mi4wMzZjMCw0LjUzNywzLjY4NSw4LjIxMSw4LjIyMiw4LjIxMUgzODQuNzdjNC41MzcsMCw4LjIyMy0zLjY3NCw4LjIyMy04LjIxMXMtMy42ODYtOC4yMjEtOC4yMjMtOC4yMjEgIEgyMzAuODc3QzIyNi4zNCwyNTMuODE1LDIyMi42NTUsMjU3LjQ5OSwyMjIuNjU1LDI2Mi4wMzZ6Ii8+PHBhdGggZD0iTTM0OS4xNTMsMzE3LjgxNWMwLTQuNTM3LTMuNjc2LTguMjEtOC4yMTEtOC4yMUgxOTYuNzA4Yy00LjUzNywwLTguMjEsMy42NzMtOC4yMSw4LjIxYzAsNC41MzYsMy42NzMsOC4yMjMsOC4yMSw4LjIyMyAgaDE0NC4yMzRDMzQ1LjQ3NywzMjYuMDM4LDM0OS4xNTMsMzIyLjM1MSwzNDkuMTUzLDMxNy44MTV6Ii8+PHBhdGggZD0iTTM4NC43NywzNjUuMzk1SDI0OS42MWMtNC41MzYsMC04LjIxLDMuNjc1LTguMjEsOC4yMTJjMCw0LjUzNiwzLjY3NCw4LjIwOSw4LjIxLDguMjA5aDEzNS4xNiAgYzQuNTM3LDAsOC4yMjMtMy42NzMsOC4yMjMtOC4yMDlDMzkyLjk5MiwzNjkuMDcsMzg5LjMwNywzNjUuMzk1LDM4NC43NywzNjUuMzk1eiIvPjwvc3ZnPg=="
              />
              {task.taskName}
              <img
                src={Remove}
                onClick={() => deleteTask(task.id)}
                alt="remove task"
                className="float-right"
                style={{ width: 18, cursor: "pointer" }}
              ></img>
            </span>
            <span className="description">
              {task.description.substring(0, 50)}
              {"..."}
            </span>
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
};
