import { Grid } from "@mui/material";

export default function Blogs() {
    return(
        <Grid container spacing={3}>
            <Grid item xs>
                <div>lorem50</div>
            </Grid>
            <Grid item xs={6}>
                <div>xs=6</div>
            </Grid>
            <Grid item xs>
                <div>xs</div>
            </Grid>
        </Grid>
    );
}
