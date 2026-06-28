import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const getVideoId = (video) => {
  // YouTube API can return different shapes depending on endpoint
  // - videos.list: { id: string }
  // - search.list: { id: { videoId, kind } }
  // - sometimes: { id: { kind, videoId } }
  return (
    video?.id?.videoId ||
    video?.id ||
    video?.contentDetails?.videoId ||
    ""
  );
};

const VideoCard = ({ video }) => {
  const { snippet } = video || {};
  const videoId = getVideoId(video);

  if (!videoId) return null;

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "320px" },
        background: "#181818",
        color: "#fff",
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        "&:hover": { transform: "scale(1.02)", transition: "0.3s" },
      }}
    >
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
