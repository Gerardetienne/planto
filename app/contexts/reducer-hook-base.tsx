import { useReducer } from "react";

  enum CountActionKind {
    INCREASE = 'INCREASE',
    DECREASE = 'DECREASE',
  }
  
  // An interface for our actions
  interface CountAction {
    type: CountActionKind;
    payload: number;
  }
  
  // An interface for our state
  interface CountState {
    count: number;
  }
  
  // Our reducer function that uses a switch statement to handle our actions
  function counterReducer(state: CountState, action: CountAction) {
    // const { type, payload } = action;
    switch (action.type) {
      case CountActionKind.INCREASE:
        return {
          ...state,
          count: state.count + action.payload,
        };
      case CountActionKind.DECREASE:
        return {
          ...state,
          count: state.count - action.payload,
        };
      default:
        return state;
    }
  }
  

  export default function Todos() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
    return (
      <>
    <div>
      Count: {state.count}
      {/* Calling our actions on button click */}
      <button 
        onClick={() => dispatch({ type: CountActionKind.INCREASE, payload: 5 })}
      >
        {CountActionKind.INCREASE}
      </button>
      <button onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 5 })}>
        {CountActionKind.DECREASE}
      </button>
    </div>
      </>
    );
  }
  