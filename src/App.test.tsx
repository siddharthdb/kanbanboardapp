import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders project task title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Project Tasks/i);
  expect(linkElement).toBeInTheDocument();
});
