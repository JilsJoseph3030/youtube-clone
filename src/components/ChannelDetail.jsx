import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Avatar, Grid } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoCard from "./VideoCard";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet,statistics&id=${id}`).then((data) =>
      setChannelDetail(data.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setChannelVideos(data.items)
    );
  }, [id]);

  if (!channelDetail) return <Typography color="white">Loading...</Typography>;

  return (
    <Box p={2} sx={{ color: "white" }}>
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar
          src={channelDetail.snippet.thumbnails.default.url}
          sx={{ width: 80, height: 80, mr: 2 }}
        />
        <Box>
          <Typography variant="h5">{channelDetail.snippet.title}</Typography>
          <Typography variant="subtitle1" color="gray">
            {channelDetail.statistics.subscriberCount} subscribers
          </Typography>
        </Box>
      </Box>

      <Typography variant="h6" mb={2}>Videos</Typography>
      <Grid container spacing={2}>
        {channelVideos.map((video, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChannelDetail;
