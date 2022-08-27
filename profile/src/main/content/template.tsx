import { Grid, Divider, Box, Typography } from "@mui/material";

interface Content{
    title: string,
    details: any
}

export default function Template(content: Content) {
    return(
        <Grid container spacing={0} justifyContent="flex-start" alignItems="flex-start" direction="column">
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
                {content.details}
            </Grid>
        </Grid>
    );
}
