import React from "react";
import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { AddTask } from "./AddTask";
import { shallow } from "enzyme";

const props = {
  handleSubmit: jest.fn(),
};

test("renders project task title", () => {
  render(<AddTask {...props} />);

  const taskName = screen.getByText(/Task Name/i);
  expect(taskName).toBeInTheDocument();

  const taskDescription = screen.getByText(
    /Task Description/i
  );
  expect(taskDescription).toBeInTheDocument();

  const addTask = screen.getByTestId("addTask");
  expect(addTask).toBeInTheDocument();
});

/**
 * Testing using Enzyme
 */
test("should submit form", () => {
  const wrapper = shallow(<AddTask {...props} />);
  const form = wrapper.find("form");
  form.simulate("submit", {
    preventDefault: jest.fn(),
    target: { form },
  });

  expect(props.handleSubmit).toBeCalledTimes(1);
});

/**
 * Using React Testing Library
 */
test("should submit form on click", () => {
  const { getByTestId, getByLabelText } = render(<AddTask {...props} />);
  const button = getByTestId("addTask");
  const taskName = getByLabelText("taskName");
  const description = getByLabelText("description");

  fireEvent.change(taskName, {
    target: {
      value: "foo",
    },
  });

  fireEvent.change(description, {
    target: {
      value: "bar",
    },
  });

  fireEvent.click(button);
  
  expect(props.handleSubmit).toBeCalledTimes(1);
  expect(taskName.value).toBe("foo");
  expect(description.value).toBe("bar");
});
