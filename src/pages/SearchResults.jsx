import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import VideoCard from "../components/VideoCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchResults = () => {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${query}`).then((data) =>
      setVideos(data.items)
    );
  }, [query]);

  return (
    <Box p={2}>
      <Stack direction="row" flexWrap="wrap" gap={2}>
        {videos.map((video, idx) => (
          <VideoCard key={idx} video={video} />
        ))}
      </Stack>
    </Box>
  );
};

export default SearchResults;
