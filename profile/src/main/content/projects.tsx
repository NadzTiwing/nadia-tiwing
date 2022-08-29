import { Grid, Box } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Projects() {
    const viewSite = (url: string) => {
        const newTab = window.open(url, '_blank', 'noopener,noreferrer');
        if(newTab) newTab.opener = null;
    };

    const projects = [
        {
            id: 'learning-system',
            imgUrl: '/img/projects-ongoing.jpg',
            siteUrl: '#',
            title: 'Vocabulary Learning System',
            content: 'A simple application that saves word/s you want to learn then learn those word/s in a fun way.',
            ongoing: true
        },
    ];

    return(
        <>
            <Box gridColumn="span 12">
                <Typography variant='body1' sx={{ mb:4 }} >
                    Below are just my personal fun projects.
                </Typography>
            </Box>
            <Box gridColumn="span 4" sx={{ mt: 3, mb: 14 }}>
                { projects.map( project => (
                    <Card key={ project.id } sx={{ maxWidth: 345, p:2, bgcolor: 'primary.dark' }} className='customCard'>
                        <CardMedia
                            component="img"
                            height="180"
                            image={ project.imgUrl }
                            alt={ project.id+"-img" }
                        />
                        <CardContent sx={{ color:'primary.light' }}>
                            <Typography gutterBottom variant="h5" component="div">{ project.title }</Typography>
                            <Typography variant="body2">{ project.content }</Typography>
                        </CardContent>
                        <CardActions>
                            { project.ongoing ? <Typography variant="h4" sx={{ color: 'primary.main' }} >ON GOING...</Typography> : <Button size="small" onClick={ () => viewSite(project.siteUrl) }>View Source Code</Button>}
                            
                        </CardActions>
                    </Card>
                )) }
            </Box>
        </>
    );
}
