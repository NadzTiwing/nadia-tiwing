// import react, { useState, useEffect } from 'react';
import { Grid, Typography, Box } from "@mui/material";
import { languages } from '../../data/me';

export default function AboutMe() {
    return(
        <Grid container spacing={0}>
            <Grid item className="intro-box">
                <div className="text-intro">
                    <Typography className="hi">HI THERE!</Typography>
                    <Typography className="name">I'M <span className="highlight">NADIA TIWING</span></Typography>
                    <Typography className="job-title"> SOFTWARE DEVELOPER </Typography>
                    <Typography className="summary" >
                        I'm passionate in developing a software application and has a 4 years experience in developing, designing,  testing, and implementing a cutting-edge engineering solutions. Also, I am able to consult well with clients and enhances configuration for optimal customer satisfaction. I am skilled at team collaboration while working independently in remote environments.
                    </Typography>
                </div>
            </Grid>
            <Grid item container className="skills">
                <Grid item>
                    <Typography className="hi">TECH SKILLS:</Typography>
                </Grid>
                <Grid container flexDirection="row" alignItems="center" justifyContent="start">
                    <Grid item pr={2}>
                        <Typography sx={{ opacity: "0.5"}}>Legends: </Typography>
                    </Grid>
                    <Grid item>
                        <Box className="legends" sx={{ opacity: "0.5"}}>
                            <span className="custom-badge expert"></span><label className="txt">Advanced</label>
                            <span className="custom-badge proficient"></span><label className="txt">Proficient</label>
                            <span className="custom-badge novice"></span><label className="txt">Novice</label>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item>
                    <div className='languages'>
                        {languages.map( lang => (
                            <div className="legends" key={lang.name}>
                                <span className={`custom-badge ${lang.level}`}></span><label className="txt">{lang.name}</label>
                            </div>
                        ))}
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}
