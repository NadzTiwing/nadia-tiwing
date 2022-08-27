import { createTheme, ThemeProvider } from '@mui/material';
import Sidebar from './sidebar'
import { orange, brown } from '@mui/material/colors';

export default function Main(){
    const titleFont = 'Oswald';
    const mainColor = orange[500];
    
    const theme = createTheme();
    theme.typography.h1 = {
        fontFamily: titleFont,
        color: mainColor
    };
    theme.typography.h2 = {
        fontFamily: titleFont,
        letterSpacing: 1.5,
        color: mainColor
    };
    theme.typography.h4 = {
        fontFamily: titleFont,
        letterSpacing: 1
    };
    theme.typography.body1 = {
        color: 'white',
        letterSpacing: 1,
        lineHeight: 2,
        alignSelf: 'flex-start'
    }
    theme.palette.primary = {
        light:'white',
        main:mainColor,
        dark:'#222222',
        contrastText:'white'
    }

    return(
        <ThemeProvider theme={theme}>
            <Sidebar/>
        </ThemeProvider>
        
    );
}