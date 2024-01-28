import { Grid } from "@mui/material";
import { Suspense } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { projects } from "../../data/samples";
import Loader from "../components/loader";

export default function Projects(screen: IScreenSize) {
    const viewSite = (url: string) => {
        const newTab = window.open(url, '_blank', 'noopener,noreferrer');
        if(newTab) newTab.opener = null;
    };
    const customWidth = screen.isMobile ? '100%' : '25rem';
    return(
        <Grid container spacing={0}>
            { projects.map( project => (
                <Card sx={{ p:2, bgcolor: 'primary.dark', mr: 2, mb: 2, width: customWidth }} className='customCard' key={ project.id }>
                    <Suspense fallback={<Loader />}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={ project.imgUrl }
                            alt={ project.id+"-img" }
                        />
                    </Suspense>
                    <CardContent sx={{ color:'primary.light' }}>
                        <Typography gutterBottom variant="h5" component="div">{ project.title }</Typography>
                        <Typography variant="body2" className="scrollable-body">{ project.content }</Typography>
                        <Typography variant="caption">Tools used: 
                            {project.tools.map((tool) => (
                                <span className="tool-name">
                                    {tool}
                                </span>
                            ))}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        { project.ongoing ? <Typography variant="h4" sx={{ color: 'primary.main' }} >ON GOING...</Typography> : <Button size="small" onClick={ () => viewSite(project.siteUrl) }>View Source Code</Button>}
                        
                    </CardActions>
                </Card>
            )) }
        </Grid>
    );
}
