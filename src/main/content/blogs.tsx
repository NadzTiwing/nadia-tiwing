import { Grid, Box } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { viewSite } from '../../util/helper';
import { blogs } from "../../data/articles";

export default function Portfolio(screen: IScreenSize) {
    return(
        <>
        { blogs.map( blog => (
            <Box gridColumn={screen.isMobile ? "span 12" : "span 5"} sx={{ mt: 3, mb: 14, px:1 }}  key={ blog.id }>
                <Card sx={{ maxWidth: 345, p:2, bgcolor: 'primary.dark' }} className='customCard'>
                    <CardMedia
                        component="img"
                        height="180"
                        image={ blog.imgUrl }
                        alt={ blog.id+"-img" }
                    />
                    <CardContent sx={{ color:'primary.light' }}>
                        <Typography gutterBottom variant="h6" component="div">{ blog.title }</Typography>
                        <Typography variant="body2" className="scrollable-body">{ blog.content }</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={ () => viewSite(blog.siteUrl) }>View</Button>
                    </CardActions>
                </Card>
            </Box>
        )) }
        
        </>
    );
}
