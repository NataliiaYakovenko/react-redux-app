

const initialState = {
    count: 0,
    step: 1,
  };
  
  function counterReducer(state = initialState, action) {
    const { count, step } = state;
    const { type } = action;
  
    switch (type) {
      case "increment":
        return { count: count + step, step: step };
  
      case "decrement":
        return { count: count - step, step: step };
  
        case 'newStep':
          const {value} = action
          return {...state, step: value}
  
      default:
        return state;
    }
  }


  export default counterReducer
  