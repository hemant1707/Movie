import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useDispatch } from 'react-redux';
import { toggleFav } from '../slice/MovieSlice';
import { Box, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
ModuleRegistry.registerModules([AllCommunityModule]);
const FavRenderer = (props) => {
    const dispatch = useDispatch();
    const isFav = props.data.isfav;
    return (
        <IconButton
            size="small"
            onClick={() => dispatch(toggleFav(props.data.title))}
        >
            <FavoriteIcon color={isFav ? 'error' : 'disabled'} />
        </IconButton>
    );
};

const MovieLIst = ({ rowData }) => {
    const columnDefs = useMemo(() => [
        { field: 'title', filter: true, flex: 2 },
        { field: 'director', filter: true, flex: 1.5 },
        {
            field: 'genres',
            headerName: 'Genres',
            valueFormatter: (params) => params.value?.join(', '),
            filter: true,
            flex: 2
        },
        { field: 'rating', filter: 'agNumberColumnFilter', flex: 1 },
        {
            field: 'isfav',
            headerName: 'Favorite',
            cellRenderer: FavRenderer,
            flex: 1,
            cellStyle: { display: 'flex', alignItems: 'center' }
        }
    ], []);

    const defaultColDef = useMemo(() => ({
        sortable: true,
        resizable: true,
        floatingFilter: true
    }), []);

    return (
        <Box className="ag-theme-quartz" sx={{ height: 600, width: '100%', mt: 2 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                pagination={true}
                paginationPageSize={20}
            />
        </Box>
    );
};

export default MovieLIst;