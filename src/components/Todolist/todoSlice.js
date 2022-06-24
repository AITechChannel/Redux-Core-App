import { createSlice, current } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, name: "a", complete: false },
    { id: 2, name: "b", complete: false },
    { id: 3, name: "c", complete: false },
  ],
  reducers: {
    add: (state, action) => {
      console.log(current(state));
      state.push(action.payload);
      console.log(state);
    },
    del: (state, action) => {
      state.splice(
        state.findIndex((todo, i) => i === action.payload),
        1
      );
    },
    check: (state, action) => {
      const current = state.find((todo, i) => i === action.payload);

      current.complete = !current.complete;
      // return state;
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
