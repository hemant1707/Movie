import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    movies: [],
    searchKey: null,
    genres: [],
    directors: [],
    selectedGenres: [],
    selectedDirectors: []
};

const movieslice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setSearch: (state, action) => {
            state.searchKey = action.payload;
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        },
        setDirectors: (state, action) => {
            state.directors = action.payload;
        },
        selectedGenres: (state, action) => {
            state.selectedGenres = action.payload;
        },
        selectedDirectors: (state, action) => {
            state.selectedDirectors = action.payload;
        },
        toggleFav: (state, action) => {
            const record = state.movies.find((rec) => rec.title === action.payload);
            if (record) {
                record.isfav = !record.isfav;
            }
        }
    }
});
export const { setMovies, setSearch, setGenres, setDirectors, selectedGenres, selectedDirectors, toggleFav } = movieslice.actions;
export default movieslice.reducer;
