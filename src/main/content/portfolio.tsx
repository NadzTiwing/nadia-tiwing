import { Grid, Box } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { viewSite } from '../../util/helper';

export default function Portfolio(screen: IScreenSize) {
    const samples = [
        {
            id: 'mint09-site',
            imgUrl: './img/mint09-site.png',
            siteUrl: 'https://mint09.com/',
            title: 'Mint09',
            content: 'Part of the Magicsoft team in developing of this e-learning system.'
        },
        {
            id: 'mint05-hr-site',
            imgUrl: './img/mint05.JPG',
            siteUrl: 'https://hr.mintlang.com/hr_portal/',
            title: 'Mint05',
            content: 'Part of the designing and front-end team that developed the HR Portal, a one-stop shop tool for all employees of Mint05/Infuturo, Inc..'
        },
    ];

    return(
        <>
        { samples.map( sample => (
            <Box gridColumn={screen.isMobile ? "span 12" : "span 4"} sx={{ mt: 3, mb: 14, px:1 }}  key={ sample.id }>
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
