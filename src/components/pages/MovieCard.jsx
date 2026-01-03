import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useDispatch } from 'react-redux';
import { toggleFav } from '../slice/MovieSlice';

export default function MovieCard(params) {
    const dispatch = useDispatch();
    return (
        <Card sx={{ maxWidth: 345 }}>
            <Typography>{params.movie.title}</Typography>
            <Typography>{params.movie.director}</Typography>
            <Typography>Genres: {params.movie.genres.join(', ')}</Typography>
            <CardMedia component="img" height="194" image={params.movie.image} alt="Paella dish" />
            <CardActions disableSpacing>
                <Typography>{params.movie.rating}</Typography>
                <IconButton
                    aria-label="add to favorites"
                    onClick={() => {
                        dispatch(toggleFav(params.movie.title));
                    }}
                >
                    <FavoriteIcon color={params.movie.isfav ? 'error' : 'disabled'} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
