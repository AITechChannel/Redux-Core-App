const initState = ["nhau"];

const rootReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default rootReducer;
