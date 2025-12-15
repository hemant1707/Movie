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
      <Grid container spacing={1}>
          {searchedMovie?.length > 0 &&
              searchedMovie.map((rec) => (
                  <Grid size={{ xs: 4, md: 4 }}>
                      <div>
                          <MovieCard movie={rec} />
                      </div>
                  </Grid>
              ))}
      </Grid>
  );
}
