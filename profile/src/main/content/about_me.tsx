import { Grid, Typography, Box, Link } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function AboutMe() {
    return(
        <Box sx={{
            width: 900,
            height: 300,
            //backgroundColor: 'primary.light',
        }} >
            <Typography variant='body1' sx={{ mb:4 }} >
                Currently working as a software engineer with a 3 years of experience in web developing, designing,  testing, and implementating a cutting-edge engineering solutions. Able to consults well with clients and enhances configuration for optimal customer satisfaction. And skilled at team collaboration while working independently in remote environments.
            </Typography>
            <Typography variant='h2'  >Details</Typography>
            <Grid justifyContent="flex-start" alignItems="flex-start" direction="row">
                <Grid item xs={6}>
                    <Typography variant='body1'>
                        <p>Birthdate: March 15,1998</p>
                        <p>Location: Manila Philippines</p>
                        <p>Email: tiwingnadia@gmail.com</p>
                        <p>Hobbies: Programming, Painting, Sketching, Reading</p>
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant='h2'  >Social</Typography>
            <Grid justifyContent="flex-start" alignItems="flex-start" direction="row">
                <Grid item>
                <Link href="https://www.linkedin.com/in/nadia-tiwing-06b733234" 
                target="_blank" rel="noopener" underline="none" sx={{ color: 'primary.light' }}>
                    <LinkedInIcon fontSize="large"/>
                </Link>
                </Grid>
            </Grid>
        </Box>
    );
}
