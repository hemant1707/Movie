import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import MovieCard from './MovieCard';
import MovieLIst from './MovieLIst';
import { getSearched } from '../util/MovieUtils';

export default function Movie() {
    const { movies, searchKey, selectedGenres, selectedDirectors } = useSelector((state) => state.movie);
    const searchedMovie = getSearched(movies, searchKey, selectedGenres, selectedDirectors);
    const [view, setView] = useState('gallery');

    const handleViewChange = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
    };

    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <ToggleButtonGroup
                    value={view}
                    exclusive
                    onChange={handleViewChange}
                    aria-label="view toggle"
                    size="small"
                >
                    <ToggleButton value="gallery" title="Gallery View">
                        <ViewModuleIcon sx={{ mr: 1 }} />
                        <Typography variant="button">Gallery</Typography>
                    </ToggleButton>
                    <ToggleButton value="grid" title="Grid View">
                        <ViewListIcon sx={{ mr: 1 }} />
                        <Typography variant="button">Grid</Typography>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            {view === 'gallery' ? (
                <Grid container spacing={3} sx={{ pt: 2, px: 2 }}>
                    {searchedMovie?.length > 0 &&
                        searchedMovie.map((rec) => (
                            <Grid key={rec.title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                <MovieCard movie={rec} />
                            </Grid>
                        ))}
                </Grid>
            ) : (
                <MovieLIst rowData={searchedMovie} />
            )}
        </Box>
    );
}


