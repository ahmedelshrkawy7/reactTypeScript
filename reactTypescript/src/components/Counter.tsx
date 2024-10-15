import { useReducer } from "react";

const Counter = () => {
  type countType = {
    count: number;
  };
  type counterAction = {
    type: "increment" | "decrement";
    payload?: number;
  };
  const initialState = { count: 0 };
  function reducer(state: countType, action: counterAction) {
    switch (action.type) {
      case "increment":
        return { count: state.count + action.payload || 0 };
      case "decrement":
        return { count: state.count - action.payload || 0 };

      default:
        return state;
    }
    console.log(state, action);
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        decrement 10
      </button>
      <h1>{state.count}</h1>
    </div>
  );
};

export default Counter;
