import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [
      {
        id: 1,
        name: "Adam",
        username: "West",
      },
      {
        id: 2,
        name: "Peter",
        username: "Griffen",
      },
    ],
    loading: false,
    error: null,
  },
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload;
    },
    createUser: (state, action) => {
      state.users.unshift(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUser, deleteUser, getUser } = userSlice.actions;

export default userSlice.reducer;
