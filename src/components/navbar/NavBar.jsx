import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../slice/MovieSlice';
import { debounce } from '@mui/material/utils';
import SelectCmp from '../select/SelectCmp';
import { selectedGenres, selectedDirectors } from '../slice/MovieSlice';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto'
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch'
        }
    }
}));

export default function NavBar({ view, setView }) {
    const { genres, directors } = useSelector((state) => state.movie);
    const dispath = useDispatch();

    const handleViewChange = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
    };

    const onSearchChange = debounce((e) => {
        console.log(e.target.value);
        dispath(setSearch(e.target.value));
    }, 500);
    const onDirectorChange = debounce((value) => {
        dispath(selectedDirectors(value));
    }, 500);
    const onGenresChange = debounce((value) => {
        dispath(selectedGenres(value));
    }, 500);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        MoviesApp
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase 
                            placeholder="Search…" 
                            inputProps={{ 'aria-label': 'search' }} 
                            onChange={onSearchChange}
                        />
                    </Search>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <ToggleButtonGroup
                            value={view}
                            exclusive
                            onChange={handleViewChange}
                            aria-label="view toggle"
                            size="small"
                            sx={{ 
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                '& .MuiToggleButton-root': {
                                    color: 'white',
                                    '&.Mui-selected': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        color: 'white'
                                    }
                                }
                            }}
                        >
                            <ToggleButton value="gallery" title="Gallery View">
                                <ViewModuleIcon />
                            </ToggleButton>
                            <ToggleButton value="grid" title="Grid View">
                                <ViewListIcon />
                            </ToggleButton>
                        </ToggleButtonGroup>

                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                            <SelectCmp title="Genres" list={genres} onChange={onGenresChange} />
                            <SelectCmp title="Directors" list={directors} onChange={onDirectorChange} />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
