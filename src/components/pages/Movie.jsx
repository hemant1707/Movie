import useLocalStorage from '../util/MovieLocalStorage';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import MovieCard from './MovieCard';
import MovieLIst from './MovieLIst';
import { getSearched } from '../util/MovieUtils';

export default function Movie({ view }) {
    const { movies, searchKey, selectedGenres, selectedDirectors } = useSelector((state) => state.movie);
    const [favorites, setFavorites] = useLocalStorage('favorites', []);

    const toggleFavorite = (title) => {
        const isFav = favorites.includes(title);
        if (isFav) {
            setFavorites(favorites.filter((fav) => fav !== title));
        } else {
            setFavorites([...favorites, title]);
        }
    };

    const searchedMovie = getSearched(movies, searchKey, selectedGenres, selectedDirectors).map(movie => ({
        ...movie,
        isfav: favorites.includes(movie.title)
    }));

    return (
        <Box sx={{ p: 2, pt: { xs: 10, sm: 12 } }}>
            {view === 'gallery' ? (
                <Grid container spacing={3} sx={{ pt: 2, px: 2 }}>
                    {searchedMovie?.length > 0 &&
                        searchedMovie.map((rec) => (
                            <Grid key={rec.title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                <MovieCard
                                    movie={rec}
                                    toggleFavorite={() => toggleFavorite(rec.title)}
                                />
                            </Grid>
                        ))}
                </Grid>
            ) : (
                <MovieLIst rowData={searchedMovie} />
            )}
        </Box>
    );
}


