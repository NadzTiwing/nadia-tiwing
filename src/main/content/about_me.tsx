import * as React from 'react';
import { Grid, Typography, Box, Link, Badge } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function AboutMe(screen: IScreenSize) {
    const [gridSize, setGridSize] = React.useState("span 6");

    React.useEffect(() => {
        let size = screen.isMobile ? "span 12": "span 6";
        setGridSize(size);
    }, [screen.isMobile]);

    return(
        <>
            <Box gridColumn="span 12">
                <Typography variant='body1' sx={{ mb:4 }} >
                    A passionate developer who has a 3 years of experience in web developing, designing,  testing, and implementing a cutting-edge engineering solutions. Able to consults well with clients and enhances configuration for optimal customer satisfaction. And skilled at team collaboration while working independently in remote environments.
                </Typography>
            </Box>
            <Box gridColumn="span 12">
                <Typography variant='h2'>Details</Typography>
                <Typography variant='body1'>
                    <p>Birthdate: March 15,1998</p>
                    <p>Location: Manila Philippines</p>
                    <p>Email: tiwingnadia@gmail.com</p>
                    <p>Interests: Programming, Networking, Painting, Sketching, Reading, Travelling</p>
                </Typography>
            </Box>
            <Box gridColumn={ gridSize } sx={{ mt: 2 }}>
                <Typography variant='h2'>Technical Skills</Typography>
                <Typography variant='body1'>
                    <p>Javascript: <span className="custom-badge expert">Expert</span></p>
                    <p>HTML: <span className="custom-badge proficient">Proficient</span></p>
                    <p>CSS/SCSS: <span className="custom-badge proficient">Proficient</span></p>
                    <p>Bootstrap: <span className="custom-badge proficient">Proficient</span></p>
                    <p>NextJs/ReactJs: <span className="custom-badge proficient">Proficient</span></p>
                </Typography>
            </Box>
            <Box gridColumn={ gridSize } sx={ screen.isMobile ? { mt: 0 } : { mt: 6 } }>
                <Typography variant='body1'>
                    <p>ExpressJs/NodeJs: <span className="custom-badge proficient">Proficient</span></p>
                    <p>MySQL: <span className="custom-badge proficient">Proficient</span></p>
                    <p>PHP: <span className="custom-badge novice">Novice</span></p>
                    <p>Python: <span className="custom-badge novice">Novice</span></p>
                </Typography>
            </Box>
            <Box gridColumn="span 12" sx={{ mt: 2 }}>
                <Typography variant='h2'  >Social</Typography>
                <Link href="https://www.linkedin.com/in/nadia-tiwing-06b733234" 
                target="_blank" rel="noopener" underline="none" sx={{ color: 'primary.light' }}>
                    <LinkedInIcon fontSize="large"/>
                </Link>
            </Box>
        </>
    );
}
