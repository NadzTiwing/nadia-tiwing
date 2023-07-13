import { Grid, Box } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { viewSite } from '../../util/helper';
import { samples } from "../../data/samples";

export default function Portfolio(screen: IScreenSize) {
    
    return(
        <>
        { samples.map( sample => (
            <Box gridColumn={screen.isMobile ? "span 12" : "span 5"} sx={{ mt: 3, mb: 14, px:1 }}  key={ sample.id }>
                <Card sx={{ maxWidth: 345, p:2, bgcolor: 'primary.dark' }} className='customCard'>
                    <CardMedia
                        component="img"
                        height="180"
                        image={ sample.imgUrl }
                        alt={ sample.id+"-img" }
                    />
                    <CardContent sx={{ color:'primary.light' }}>
                        <Typography gutterBottom variant="h5" component="div">{ sample.title }</Typography>
                        <Typography variant="body2" className="scrollable-body">{ sample.content }</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={ () => viewSite(sample.siteUrl) }>View</Button>
                    </CardActions>
                </Card>
            </Box>
        )) }
        
        </>
    );
}
