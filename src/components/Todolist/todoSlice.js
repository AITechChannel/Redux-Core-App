import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default todoSlice;

// export const addTodo = (todo) => {
//   return function addTodoThunk(dispatch, getState) {
//     // if (todo.include("lon")) {
//     //   todo = ["***"];
//     // }
//     const state = getState();
//     console.log(state);
//     // if (state.reducer.includes("cc")) {
//     //   todo = ["***"];

//     // }

//     setTimeout(() => {
//       dispatch(todoSlice.actions.add(todo));
//     }, 3000);
//   };
// };
