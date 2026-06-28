import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import VideoCard from "../components/VideoCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const featured = {
    id: "dQw4w9WgXcQ",
    title: "Featured: Welcome to the YouTube Clone",
    channelTitle: "Blackbox Channel",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  };

  const featuredVideo = {
    id: featured.id,
    snippet: {
      title: featured.title,
      channelTitle: featured.channelTitle,
      thumbnails: {
        high: { url: featured.thumbnail },
      },
    },
  };



  useEffect(() => {
    let cancelled = false;

    fetchFromAPI("search?part=snippet&q=trending")
      .then((data) => {
        if (cancelled) return;
        setVideos(Array.isArray(data?.items) ? data.items : []);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const showEmptyState = videos.length === 0;


  return (
    <Box sx={{ flex: 1, p: 2, color: "white" }}>
      <Box mb={2}>
        <Box
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            background: "#181818",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${featuredVideo.id}`}
            title={featuredVideo.snippet.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <Box p={2}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs>
                <Box component="h2" sx={{ m: 0, fontSize: 18 }}>
                  {featuredVideo.snippet.title}
                </Box>
                <Box sx={{ color: "gray", fontSize: 14 }}>
                  {featuredVideo.snippet.channelTitle}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2}>

        {videos.map((video, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
