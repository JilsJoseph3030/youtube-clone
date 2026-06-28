import React from "react";
import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";

const posts = [
  {
    id: 1,
    author: "Tech Channel",
    avatar: "https://via.placeholder.com/40",
    content: "What feature should I add next?",
    image: "https://via.placeholder.com/400x200",
    likes: 120,
    comments: 45,
  },
  {
    id: 2,
    author: "Music Hub",
    avatar: "https://via.placeholder.com/40",
    content: "New album dropping soon!",
    image: "https://via.placeholder.com/400x200",
    likes: 300,
    comments: 80,
  },
];

const Community = () => (
  <Box p={2} sx={{ color: "white" }}>
    <Typography variant="h5" mb={2}>Community Posts</Typography>
    {posts.map((post) => (
      <Card key={post.id} sx={{ mb: 2, bgcolor: "#181818", color: "white" }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={1}>
            <Avatar src={post.avatar} sx={{ mr: 2 }} />
            <Typography variant="subtitle1">{post.author}</Typography>
          </Box>
          <Typography variant="body1" mb={1}>{post.content}</Typography>
          <img src={post.image} alt="post" style={{ width: "100%", borderRadius: 8 }} />
          <Typography variant="caption" color="gray">
            {post.likes} likes • {post.comments} comments
          </Typography>
        </CardContent>
      </Card>
    ))}
  </Box>
);

export default Community;
