import React, { useEffect } from 'react'
import NavBar from '../navbar/NavBar'
import { useDispatch, } from 'react-redux';

import { getMovies } from '../api/movie';
import Movie from './Movie';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getMovies());
  },[]);
  return (
    <>
    <NavBar />
   <Movie />
    </>
  )
}
