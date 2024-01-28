import { Grid, Box } from "@mui/material";
import { Suspense } from "react";
import Loader from "../components/loader";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { viewSite } from '../../util/helper';
import { blogs } from "../../data/articles";

export default function Blogs(screen: IScreenSize) {
    const customWidth = screen.isMobile ? '100%' : '25rem'
    return(
    <Grid container spacing={0}>
        { blogs.map( blog => (
        <Card sx={{ p:2, bgcolor: 'primary.dark', mr: 2, mb: 2, width: customWidth }} className='customCard' key={ blog.id }>
            <Suspense fallback={<Loader />}>
                <CardMedia
                    component="img"
                    height="180"
                    image={ blog.imgUrl }
                    alt={ blog.id+"-img" }
                />
            </Suspense>
            <CardContent sx={{ color:'primary.light' }}>
                <Typography gutterBottom variant="h6" component="div">{ blog.title }</Typography>
                <Typography variant="body2" className="scrollable-body">{ blog.content }</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={ () => viewSite(blog.siteUrl) }>View</Button>
            </CardActions>
        </Card>
        )) }
        </Grid>
    );
}
