import React from "react";
import { Navbar } from "react-bootstrap";

import "./App.scss";
import brand from "./assets/brand.svg";

import { KanbanBoard } from "./components/kanban-board/Kanbanboard";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            src={brand}
            width="30"
            height="30"
            className="d-inline-block align-top brand-img"
            alt="React Bootstrap logo"
          />{" "}
          Kanban Board
        </Navbar.Brand>
      </Navbar>
      <KanbanBoard></KanbanBoard>
    </div>
  );
};

export default App;
