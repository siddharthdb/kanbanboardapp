import React from "react";
import { render, screen } from "@testing-library/react";
// import renderer from 'react-test-renderer';
import { KanbanBoard } from "./Kanbanboard";

// const component = renderer.create(<KanbanBoard />);

test('should have 3 columns', () => {
    render(<KanbanBoard />);
    const columns = screen.getAllByRole('kanbanColumn');
    expect(columns.length).toBe(3);
});