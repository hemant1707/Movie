import React from 'react'
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { getSearched } from '../util/MovieUtils';
export default function Movie() {

    const { movies, searchKey, selectedGenres, selectedDirectors } = useSelector((state) => state.movie);
    const searchedMovie = getSearched(movies, searchKey, selectedGenres, selectedDirectors);
    console.log(movies);
    console.log(searchedMovie);
    return (
        <Grid container spacing={3} sx={{ pt: 2, px: 2 }}>
            {searchedMovie?.length > 0 &&
                searchedMovie.map((rec) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <MovieCard movie={rec} />
                    </Grid>
                ))}
        </Grid>
    );
}
