// State:Redux manages the entire state of your application in a single immutable state tree (object).
//Actions are plain JavaScript objects that represent payloads of information that send data from your application to your Redux store.
//Reducer is a pure Fn Reducers specify how the application's state changes in response to actions sent to the store.
// Reducers should not mutate the previous state; instead, they should return a new state object.
//Flow
// You dispatch an action to the Redux store.
// The Redux store calls the corresponding reducer function.
// The reducer calculates the new state based on the current state and the action.
// The Redux store updates the state with the new state returned by the reducer.
// React components connected to the store via connect or useSelector receive the updated state and re-render as necessary.

// Thunks allow you to handle asynchronous operations in Redux actions, such as fetching data, making API calls, or performing async computations.
// Thunks are functions that return functions. They are used to delay the execution of an action creator
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
  

//createSlice() to define reducers and action creators together
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;



//Create  a redux store
// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Other reducers can go here if needed
  },
});


//Provide reduX store to your app
// index.js (or App.js)
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


//User in component
// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Toolkit Example</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      </div>
    </div>
  );
}

export default App;
