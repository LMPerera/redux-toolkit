import { createSlice } from "@reduxjs/toolkit";
import { GetPosts, CreatePost } from "../../services";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [GetPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.data;
    },
    [GetPosts.rejected]: (state, action) => {
      state.posts = [];
    },
    [CreatePost.fulfilled]: (state, action) => {
      state.posts.unshift(action.payload.data);
    },
  },
});

export default postSlice.reducer;
