// Jest is a testing framework that provides utilities for asserting conditions in your tests, 
// while RTL focuses on testing components in a way that reflects how users interact with them.

// example Counter component 
// Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>The current count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;


// Counter.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';

test('renders Counter component', () => {
  render(<Counter />);
  // Check if the initial text is rendered
  expect(screen.getByText(/The current count is: 0/i)).toBeInTheDocument();
});

test('increments the count when the button is clicked', () => {
  render(<Counter />);
  
  // Find the button element
  const button = screen.getByText(/Increment/i);
  // Click the button
  fireEvent.click(button);
  
  // Check if the count is incremented
  expect(screen.getByText(/The current count is: 1/i)).toBeInTheDocument();
});


//Function test
// src/mathUtils.js
export const add = (a, b) => a + b;

// src/__tests__/mathUtils.test.js
import { add } from '../mathUtils';

describe('add function', () => {
  test('should return the correct sum of two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should return the correct sum of two negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('should return the correct sum when adding a positive number and a negative number', () => {
    expect(add(2, -3)).toBe(-1);
  });

  test('should return the correct sum when adding zero', () => {
    expect(add(0, 0)).toBe(0);
    expect(add(5, 0)).toBe(5);
  })
});
