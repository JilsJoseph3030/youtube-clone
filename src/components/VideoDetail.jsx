import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoCard from "./VideoCard";


const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: null });


  useEffect(() => {
    let mounted = true;

    setStatus({ loading: true, error: null });

    Promise.all([
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`),
      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`),
    ])
      .then(([detailData, relatedData]) => {
        if (!mounted) return;
        setVideoDetail(detailData?.items?.[0] ?? null);
        setRelatedVideos(Array.isArray(relatedData?.items) ? relatedData.items : []);
        setStatus({ loading: false, error: null });
      })
      .catch((err) => {
        console.error(err);
        if (!mounted) return;
        setStatus({ loading: false, error: "Failed to load video." });
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  if (status.loading) return <Typography color="white">Loading...</Typography>;
  if (status.error)
    return <Typography color="white">{status.error}</Typography>;
  if (!videoDetail)
    return <Typography color="white">Video not found.</Typography>;


  return (
    <Box p={2} sx={{ color: "white" }}>
      <Box mb={2}>
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${id}`}
          title={videoDetail.snippet.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <Typography variant="h6" mt={2}>
          {videoDetail.snippet.title}
        </Typography>
        <Typography variant="subtitle1" color="gray">
          {videoDetail.snippet.channelTitle} • {videoDetail.statistics?.viewCount ?? 0} views
        </Typography>

      </Box>

      <Typography variant="h6" mb={2}>Related Videos</Typography>
      <Grid container spacing={2}>
        {relatedVideos.map((video, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VideoDetail;
