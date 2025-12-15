import { setMovies, setGenres, setDirectors } from '../slice/MovieSlice';
import movielist from '../resources/movieList.json';
import { getGeners, getDirectors } from '../util/MovieUtils';
export const getMovies =( )=> async dispatch => {
    //const {data} = await axios.get('');
    // giving only single movie
    dispatch(setMovies(movielist));
    dispatch(setGenres(getGeners(movielist)));
    dispatch(setDirectors(getDirectors(movielist)));
}