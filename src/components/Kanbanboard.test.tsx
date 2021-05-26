import React from "react";
import { render, screen } from "@testing-library/react";

import { KanbanBoard } from "./Kanbanboard";

test('should have 3 columns', () => {
    render(<KanbanBoard />);
    const columns = screen.getAllByRole('kanbanColumn');
    expect(columns.length).toBe(3);
})