import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        width: { xs: "300px", md: "320px", sm: "320px" },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title}
          image={snippet?.thumbnails?.high?.url}
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: 180,
            borderRadius: "10px 10px 0 0",
          }}
        />
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: "100px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            sx={{ maxWidth: 358 }}
            variant="subtitle1"
            fontWeight="bold"
            color="#fff"
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId ? `/channel/${snippet?.channelId}` : demoVideoUrl
          }
        >
          <Typography
            sx={{ maxWidth: 358 }}
            variant="subtitle2"
            fontWeight="bold"
            color="gray"
          >
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
