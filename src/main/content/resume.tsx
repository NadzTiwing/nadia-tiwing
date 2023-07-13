import React from 'react';
import { Box, Typography, Link } from "@mui/material";
import { experiences, schools, seminars } from '../../data/me';

export default function Resume(screen: IScreenSize) {
    // const [gridSize, setGridSize] = React.useState("span 6");

    // React.useEffect(() => {
    //     let size = screen.isMobile ? "span 12": "span 6";
    //     setGridSize(size);
    // }, [screen.isMobile]);

    return(
        <>
            <Box gridColumn="span 12">
                <Typography variant='h2'>Work Experiences</Typography>
            </Box>
            { experiences.map(exp => (
                <Box gridColumn="span 12" mb={3}>
                    <i>{ exp.dateRange }</i>  
                    <Typography variant='h4' sx={{ color: 'primary.main' }}>{ exp.position }</Typography>
                    <strong><i>{ exp.company }</i></strong>
                    <ul>
                        { exp.desc.map( (did, i) => (
                            <li key={ exp.id+'-'+'list-'+i}>{ did }</li>
                        )) }
                    </ul>
                </Box>
            )) }

            <Box gridColumn="span 12" sx={{ mt: 5 }}>
                <Typography variant='h2'>Education, Honors and Awards</Typography>
            </Box>
            { schools.map(school => (
                <React.Fragment key={`school-${school.id}`}>
                    <Box gridColumn={screen.isMobile ? "span 12":"span 2"}>
                        <i>{ school.year }</i>  
                    </Box>
                    <Box gridColumn={screen.isMobile ? "span 12":"span 10"} mb={2}>
                        <Typography variant='h4' sx={{ color: 'primary.main' }}>{ school.name }</Typography>
                        <strong><i>{ school?.degree }</i></strong>
                        <ul>
                            { school.awards.map( (award, i) => (
                                <li key={ school.id+'-'+'list-'+i}>{ award }</li>
                            )) }
                        </ul>
                    </Box>
                </React.Fragment>
            )) }

            <Box gridColumn="span 12" sx={{ mt: 5 }}>
                <Typography variant='h2'>Seminars and Trainings Attended</Typography>
            </Box>
            { seminars.map(seminar => (
                <>
                    <Box gridColumn={screen.isMobile ? "span 12":"span 3"}>
                        <i>{ seminar.date }</i>  
                    </Box>
                    <Box gridColumn={screen.isMobile ? "span 12":"span 9"} sx={{ mb:2 }}>
                        <Link href={ seminar.link } target="_blank" rel="noopener"  >
                            <Typography variant='h4' sx={{ color: 'primary.main' }}>{ seminar.title }</Typography>
                        </Link>
                        
                        <strong><i>{ seminar.company }</i></strong>
                    </Box>
                </>
            )) }
            <Box gridColumn="span 12" sx={{ mt: 5 }}>
                <Link href="./cv_resume_NadiaTiwing_WebDev.pdf" target="_blank" rel="noopener"  >
                    <Typography variant='body1' sx={{ color: 'yellow' }}>Download Resume</Typography>
                </Link>
                
            </Box>
        </>
    );
}
