// for managing complex state logic in functional components. It is an alternative to useState for managing state that involves multiple sub-values or when the next state depends on the previous one. Here's how you can use useReducer in a React component:

// useReducer is a React hook that is used for managing complex state logic in functional components. It is an alternative to useState for managing state that involves multiple sub-values or when the next state depends on the previous one. Here's how you can use useReducer in a React component:
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
