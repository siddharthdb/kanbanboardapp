import React from "react";
import { Navbar } from "react-bootstrap";
import "./App.scss";
import { KanbanBoard } from "./Kanbanboard";
// import { KanbanTask } from "./KanbanTask";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
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
        {/* <KanbanTask></KanbanTask> */}
      </div>     
    </div>
  );
}

export default App;
