import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import postSlice from "./features/post/postSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
  },
});
