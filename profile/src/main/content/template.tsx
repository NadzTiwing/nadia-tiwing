import { Grid, Divider, Box, Typography } from "@mui/material";

interface Content{
    title: string,
    details: any,
    isMobile: boolean
}

export default function Template(content: Content) {
    return(
        <Grid container spacing={0} justifyContent="flex-start" alignItems="flex-start" direction="column" sx={ content.isMobile ? { mt: 3} : { mt: 0}}>
            <Grid item xs={6}>
                <Typography variant={'h1'}>{content.title}</Typography>
                <Box
                sx={{
                    mt: 2,
                    width: 50,
                    height: 5,
                    backgroundColor: 'primary.main',
                }}
                />
            </Grid>
            <Grid>
                <Box 
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                >
                {content.details}
                </Box>
            </Grid>
        </Grid>
    );
}
