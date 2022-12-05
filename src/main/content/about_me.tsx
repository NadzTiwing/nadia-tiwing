import * as React from 'react';
import { Grid, Typography, Box, Link, Badge, Button } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownIcon from '@mui/icons-material/ArrowDownward';

export default function AboutMe(screen: IScreenSize) {
    const [gridSize, setGridSize] = React.useState("span 6");

    React.useEffect(() => {
        let size = screen.isMobile ? "span 12": "span 6";
        setGridSize(size);
    }, [screen.isMobile]);

    const languages = [
        {
            name: "Javascript",
            level: "expert"
        },
        {
            name: "HTML5",
            level: "expert"
        },
        {
            name: "CSS/SCSS",
            level: "expert"
        },
        {
            name: "Bootstrap",
            level: "expert"
        },
        {
            name: "NextJs",
            level: "proficient"
        },
        {
            name: "ReactJs",
            level: "proficient"
        },
        {
            name: "ExpressJs/NodeJs",
            level: "proficient"
        },
        {
            name: "MySQL",
            level: "proficient"
        },
        {
            name: "MongoDB",
            level: "novice"
        },
        {
            name: "PostgreSQL",
            level: "novice"
        },
        {
            name: "Python",
            level: "novice"
        },
    ]; 

    return(
        <>
            <Box gridColumn="span 12" className="intro-box">
                <div className="text-intro">
                    <Typography className="hi">HI THERE!</Typography>
                    <Typography className="name">I'M <span className="highlight">NADIA TIWING</span></Typography>
                    <Typography className="job-title"> SOFTWARE DEVELOPER </Typography>
                    <Typography className="summary" >
                        I'm passionate in developing a software application and has a 3 years of experience in developing, designing,  testing, and implementing a cutting-edge engineering solutions. Also, I am able to consult well with clients and enhances configuration for optimal customer satisfaction. I am skilled at team collaboration while working independently in remote environments.
                    </Typography>
                    
                </div>
            </Box>
            <Box gridColumn="span 12" className="skills">
                <Typography className="hi">TECH SKILLS:</Typography>
                <Typography sx={{ opacity: "0.5"}}>Legends: </Typography>
                <Box className="legends" sx={{ opacity: "0.5"}}>
                    <span className="custom-badge expert"></span><label className="txt">Expert</label>
                    <span className="custom-badge proficient"></span><label className="txt">Proficient</label>
                    <span className="custom-badge novice"></span><label className="txt">Novice</label>
                </Box>
                <div className='languages'>
                    {languages.map( lang => (
                        <div className="legends" key={lang.name}>
                            <span className={`custom-badge ${lang.level}`}></span><label className="txt">{lang.name}</label>
                        </div>
                    ))}
                    
                </div>
                {/* <Button className="cta-btn mt-3" variant="contained">KNOW MORE ABOUT ME <ArrowDownIcon/></Button> */}
            </Box>

            
        </>
    );
}
