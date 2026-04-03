import React, { useEffect } from 'react'
import NavBar from '../navbar/NavBar'
import { useDispatch, } from 'react-redux';

import { getMovies } from '../api/movie';
import useLocalStorage from '../util/MovieLocalStorage';
import Movie from './Movie';

export default function Home() {
  const dispatch = useDispatch();
  const [view, setView] = useLocalStorage('movie-view', 'gallery');

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <NavBar view={view} setView={setView} />
      <Movie view={view} />
    </>
  )
}
