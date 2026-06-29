import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const VideoCard = ({ video }) => {
  const { id, snippet } = video;
  const videoId = id?.videoId || id; // safe extraction

  return (
    <Card sx={{ width: { xs: "100%", sm: "320px" }, background: "#181818", color: "#fff" }}>
      <CardActionArea component={Link} to={`/video/${videoId}`}>
        <CardMedia
          component="img"
          height="180"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
        />
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold" noWrap>
            {snippet?.title}
          </Typography>
          <Typography variant="subtitle2" color="gray" noWrap>
            {snippet?.channelTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoCard;
