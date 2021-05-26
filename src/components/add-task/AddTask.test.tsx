import React from "react";
import { render, screen } from "@testing-library/react";
import { AddTask } from "./AddTask";

const props = {
    handleSubmit: jest.fn()
}

test("renders project task title", () => {
    render(<AddTask {...props} />);

    const taskName = screen.getByText(/Task Name/i);
    expect(taskName).toBeInTheDocument();

    const taskDescription = screen.getByText(/Task Description/i);
    expect(taskDescription).toBeInTheDocument();

    const addTask = screen.getByTestId("addTask");
    expect(addTask).toBeInTheDocument();
});
  