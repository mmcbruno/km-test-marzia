import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/campaigns/store';
import { setQuerySearch } from '../../store/campaigns/campaignsSlice';
import { useCallback } from 'react';

const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
   },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: '12ch',
         '&:focus': {
            width: '20ch',
         },
      },
   },
}));

export const Header = () => {
   const dispatch = useDispatch<AppDispatch>();
   const querySearch = useSelector(
      (state: RootState) => state.campaigns.filters.querySearch
   );

   const handleSetQuerySearch = useCallback(
      (ev: React.ChangeEvent<HTMLInputElement>) => {
         dispatch(setQuerySearch(ev.target.value));
      },
      [dispatch]
   );

   return (
      <Toolbar>
         <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
         >
            Campaigns
         </Typography>
         <Search>
            <SearchIconWrapper>
               <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
               value={querySearch}
               placeholder='Search…'
               inputProps={{ 'aria-label': 'search' }}
               onChange={handleSetQuerySearch}
            />
         </Search>
      </Toolbar>
   );
};
