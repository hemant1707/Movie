import { createSlice } from '@reduxjs/toolkit';
const initialState ={
    movies: []
};

const movieslice = createSlice({
   name: 'movie',
   initialState,
   reducers:{
    setMovies: (state,action)=>{
        state.movies = action.payload;
    }
   } 
});
export const {setMovies} = movieslice.actions;
export default movieslice.reducer;