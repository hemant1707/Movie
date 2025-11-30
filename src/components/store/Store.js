import { configureStore } from '@reduxjs/toolkit';
import  movieReuducer  from '../slice/MovieSlice';
export const store = configureStore({
    reducer: {
        movie: movieReuducer
    }
});
