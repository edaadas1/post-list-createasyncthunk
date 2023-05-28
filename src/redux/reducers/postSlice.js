import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
  posts : [],
}

export const getPosts = createAsyncThunk("getPosts",async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = response.json();
    return data
})

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    
  },
  extraReducers : (builder) => {
    builder
    .addCase(getPosts.fulfilled,(state,action)=>{
        state.posts = action.payload
    })
  }
})

export default postSlice.reducer