import { Grid, Box, Typography } from "@mui/material";

interface Content{
    id: string,
    title: string,
    details: any,
    isMobile: boolean
}

export default function Template(content: Content) {
    const customHeight: any = {
        'about_me': '100vh',
        'resume': '100%',
        'projects': '100%',
        'portfolio': '100vh',
        'blogs': '100vh'
    }

    const contentHeight = content.isMobile ? '100%' : customHeight[content.id] 
    return(
        <Box component="div" sx={{ bgcolor: 'primary.dark', height: contentHeight }}>
            <Grid container spacing={0} justifyContent="flex-start" alignItems="flex-start" direction="column" sx={ content.isMobile ? { mt: 3} : { mt: 0}}>
                <Grid item xs={6}>
                    <Typography variant={'h3'} className="section-title">{content.title.toUpperCase()}</Typography>
                </Grid>
                <Grid>
                    {content.details}
                </Grid>
            </Grid>
        </Box>
    );
}
