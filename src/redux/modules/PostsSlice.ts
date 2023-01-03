import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// createAsyncThunk types first argument is return type of the payload creator
// second argument is first argument to the payload creator
// third argument is thunkApi types
// to define the types of thunkApi types, pass an object as the third generic argument with type declarations for some or all of AsyncThunkConfig
// cf. https://redux-toolkit.js.org/usage/usage-with-typescript#createasyncthunk
export const __addPost = createAsyncThunk<
  any,
  string,
  { rejectValue: { message: string } }
>("addPost", async (post: string, thunkAPI) => {
  console.log("thunk payload: ", post);
  // TODO: add client post method
  // TODO: adjust return type of the payload creator to API response
  return thunkAPI.fulfillWithValue(post);
});

type PostsState = {
  posts: [];
  isLoading: boolean;
  error: string | null;
};

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      __addPost.fulfilled,
      (state, action: PayloadAction<string>) => {
        console.log("reducer payload:", action.payload);
      }
    );
  },
});

export default postsSlice.reducer;
