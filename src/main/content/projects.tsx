import { Grid, Box } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Projects(screen: IScreenSize) {
    const viewSite = (url: string) => {
        const newTab = window.open(url, '_blank', 'noopener,noreferrer');
        if(newTab) newTab.opener = null;
    };

    const projects = [
        {
            id: 'text-o-matic',
            imgUrl: './img/text-o-matic.png',
            siteUrl: 'https://github.com/NadzTiwing/text-o-matic',
            title: 'Text-o-matic',
            content: 'Web app that generates caption and checks spelling errors with OpenAI.',
            ongoing: false
        },
        {
            id: 'pic-share',
            imgUrl: './img/pic-share.png',
            siteUrl: 'https://github.com/NadzTiwing/picshare',
            title: 'Picshare',
            content: 'A simple app that saves, deletes and retrieves photos using Cloudinary API and MongoDB Atlas',
            ongoing: false
        },
        {
            id: 'learning-system',
            imgUrl: './img/projects-ongoing.jpg',
            siteUrl: '#',
            title: 'E-Learning System',
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
            { projects.map( project => (
                <Box gridColumn={screen.isMobile ? "span 12" : "span 5"} sx={{ mt: 3, mb: 14, mx: 1 }} key={ project.id } >
                    <Card sx={{ maxWidth: 345, p:2, bgcolor: 'primary.dark' }} className='customCard'>
                        <CardMedia
                            component="img"
                            height="180"
                            image={ project.imgUrl }
                            alt={ project.id+"-img" }
                        />
                        <CardContent sx={{ color:'primary.light' }}>
                            <Typography gutterBottom variant="h5" component="div">{ project.title }</Typography>
                            <Typography variant="body2" className="scrollable-body">{ project.content }</Typography>
                        </CardContent>
                        <CardActions>
                            { project.ongoing ? <Typography variant="h4" sx={{ color: 'primary.main' }} >ON GOING...</Typography> : <Button size="small" onClick={ () => viewSite(project.siteUrl) }>View Source Code</Button>}
                            
                        </CardActions>
                    </Card>
                </Box>
            )) }
        </>
    );
}
