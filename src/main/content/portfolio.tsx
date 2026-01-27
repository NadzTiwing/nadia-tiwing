import { Grid, Chip } from "@mui/material";
import { Suspense } from "react";
import Loader from "../components/loader";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { viewSite } from "../../util/helper";
import { samples } from "../../data/samples";

export default function Portfolio(screen: IScreenSize) {
  const customWidth = screen.isMobile ? "100%" : "25rem";
  return (
    <Grid container spacing={0}>
      {samples.map((sample) => (
        <Card
          sx={{
            p: 2,
            bgcolor: "primary.dark",
            mr: 2,
            mb: 2,
            width: customWidth,
          }}
          className="customCard"
          key={sample.id}
        >
          <Suspense fallback={<Loader />}>
            {sample.displayType === "image" ? (
              <CardMedia
                component="img"
                height="180"
                image={sample.mediaUrl}
                alt={sample.id + "-img"}
              />
            ) : (
              <video width="100%" height="100%" controls>
                <source src={sample.mediaUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Suspense>
          <CardContent sx={{ color: "primary.light" }}>
            <Typography gutterBottom variant="h5" component="div">
              {sample.title}
            </Typography>
            <Typography variant="body2" className="scrollable-body">
              {sample.content}
            </Typography>

            <Typography variant="caption" sx={{ marginRight: "0.5em" }}>
              Tech stacks:
            </Typography>

            {sample.techStack.map((tech) => (
              <Chip
                label={tech}
                variant="outlined"
                sx={{
                  color: "primary.light",
                  borderColor: "primary.main",
                  fontSize: "0.5em",
                  marginRight: "0.5em",
                }}
              />
            ))}
          </CardContent>
          {sample.siteUrl && (
            <CardActions>
              <Button size="small" onClick={() => viewSite(sample.siteUrl)}>
                View
              </Button>
            </CardActions>
          )}
        </Card>
      ))}
    </Grid>
  );
}
