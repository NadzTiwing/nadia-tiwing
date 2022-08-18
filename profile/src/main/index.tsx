import { createTheme, ThemeProvider } from '@mui/material';
import Sidebar from './sidebar'
import { orange, brown } from '@mui/material/colors';

export default function Main(){
    const theme = createTheme();
    const titleFont = 'Oswald';
    theme.typography.h2 = {
        fontFamily: titleFont,
        letterSpacing: 1.5
    };
    theme.typography.h4 = {
        fontFamily: titleFont,
        letterSpacing: 0.5
    };
    theme.palette.primary = {
        light:'white',
        main:brown[900],
        dark:orange[500],
        contrastText:'white'
    }

    return(
        <ThemeProvider theme={theme}>
            <Sidebar/>
        </ThemeProvider>
        
    );
}