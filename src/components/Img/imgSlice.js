import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const imgSLice = createSlice({
  name: "fetchApi",
  initialState: { status: "idle", data: [] },
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchImg.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(fetchImg.fulfilled, (state, action) => {
      state.status = "loaded";
      state.data.push(action.payload);
    });
    builder.addCase(fetchImg.rejected, (state, action) => {
      state.status = "load fail";
    });
  },
});

export default imgSLice;

export const fetchImg = createAsyncThunk("users/fetchByIdStatus", async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=718ca6dfce46881e7e3f67da8daa3e77&language=en-US&page=2"
  );
  const data = await res.json();
  return data;
});
