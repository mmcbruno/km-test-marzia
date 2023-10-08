import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const theme = createTheme({
   palette: {
      primary: {
         main: '#3f51b5',
         // main: '#D4AF37',
      },
      secondary: {
         main: '#5c5346',
      },
      error: {
         main: red['900'],
      },
   },
});
