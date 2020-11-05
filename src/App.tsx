import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import "./App.scss";
import { KanbanBoard } from "./components/Kanbanboard";
import { KanbanTask } from "./components/KanbanTask";
import logo from "./logo.svg";

const App = () => {

  const handleSubmit = () => {

  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          {' '}
      Kanban Board
        </Navbar.Brand>
      </Navbar>
      <div className="container">
        <KanbanBoard></KanbanBoard>
        {/* <KanbanTask handleSubmit={handleSubmit}></KanbanTask> */}
      </div>     
    </div>
  );
}

export default App;
