import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

export const KanbanTask = () => {
  return (
    <>
      <Form>
        <Form.Group as={Row}>
              <Form.Label column sm="1">Add Task</Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="e.g.: Bug Fix - For some ABCD item"></Form.Control>
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                    Add Task
                </Button>
              </Col>
          </Form.Group>
      </Form>
    </>
  );
};
