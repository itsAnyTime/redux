const initialState = {
    count1: 0,
    count2: 0
  };
  function reducer(state = initialState, action) {
    switch (action.type) {
      case "INCREMENTX":
        return {
          ...state, count1: state.count1 + 1
          // count1: state.count1 + 1,
          // count2: state.count2
        };
      case "INCREMENTY":
        return {
          ...state, count2: state.count2 + 1
          // count2: state.count2 + 1,
          // count1: state.count1
        };
      default:
        return state;
    }
  }
export default reducer