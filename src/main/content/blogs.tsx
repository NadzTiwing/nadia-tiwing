import { Grid, Box } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Blogs(screen: IScreenSize) {
    const viewSite = (url: string) => {
        const newTab = window.open(url, '_blank', 'noopener,noreferrer');
        if(newTab) newTab.opener = null;
    };

    const blogs = [
        {
            id: 'object-detector',
            imgUrl: './img/object-detector.JPG',
            siteUrl: 'https://devdojo.com/mc4carpediem/simple-object-detector-with-nextjs',
            title: 'Simple Object Detector',
            content: 'A simple application that locates an object in the image using NextJS which can be also implemented in ReactJS.'
        },
    ];

    return(
        <>
            <Box gridColumn={screen.isMobile ? "span 12" : "span 4"} sx={{ mt: 3, mb: 14 }}>
                { blogs.map( blog => (
                    <Card key={ blog.id } sx={{ maxWidth: 345, p:2, bgcolor: 'primary.dark' }} className='customCard'>
                        <CardMedia
                            component="img"
                            height="180"
                            image={ blog.imgUrl }
                            alt={ blog.id+"-img" }
                        />
                        <CardContent sx={{ color:'primary.light' }}>
                            <Typography gutterBottom variant="h5" component="div">{ blog.title }</Typography>
                            <Typography variant="body2">{ blog.content }</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={ () => viewSite(blog.siteUrl) }>View</Button>
                        </CardActions>
                    </Card>
                )) }
            </Box>
        </>
    );
}
