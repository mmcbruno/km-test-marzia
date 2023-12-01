import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

export const theme = createTheme({
    //
    palette: {
        background: {
            default: '#fff',
        },
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
        // primary?: PaletteColorOptions;
        //   secondary?: PaletteColorOptions;
        //   error?: PaletteColorOptions;
        //   warning?: PaletteColorOptions;
        //   info?: PaletteColorOptions;
        //   success?: PaletteColorOptions;
        //   mode?: PaletteMode;
        //   tonalOffset?: PaletteTonalOffset;
        //   contrastThreshold?: number;
        //   common?: Partial<CommonColors>;
        //   grey?: ColorPartial;
        //   text?: Partial<TypeText>;
        //   divider?: string;
        //   action?: Partial<TypeAction>;
        //   background?: Partial<TypeBackground>;
        //   getContrastText?: (background: string) => string;
    },
});
