import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import sampleVideos from "../sampleVideos";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../App.css";

function Watch() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top when video changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const currentVideo = sampleVideos.find((v) => v.id === id) || {
    id: id,
    title: "YouTube Video",
    channelTitle: "YouTube Creator",
  };

  const recommendations = sampleVideos.filter((v) => v.id !== id);

  return (
    <div className="watch-page-container">
      <div className="watch-main-content">
        {/* Video Player */}
        <div className="player-container">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={currentVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Details */}
        <h1 className="watch-title">{currentVideo.title}</h1>

        {/* Channel Details & Actions */}
        <div className="watch-meta-actions">
          <div className="watch-channel-info">
            <div className="channel-avatar">
              {currentVideo.channelTitle.charAt(0)}
            </div>
            <div className="channel-text-details">
              <span className="channel-name">{currentVideo.channelTitle}</span>
              <span className="channel-subs">1.2M subscribers</span>
            </div>
            <button className="subscribe-btn">Subscribe</button>
          </div>

          <div className="watch-actions">
            <div className="action-button-group">
              <button className="action-btn like-btn">
                <ThumbUpOutlinedIcon fontSize="small" />
                <span>124K</span>
              </button>
              <button className="action-btn dislike-btn">
                <ThumbUpOutlinedIcon fontSize="small" style={{ transform: "rotate(180deg)" }} />
              </button>
            </div>
            <button className="action-btn share-btn">
              <ShareIcon fontSize="small" />
              <span>Share</span>
            </button>
            <button className="action-btn download-btn">
              <DownloadIcon fontSize="small" />
              <span>Download</span>
            </button>
            <button className="action-btn more-btn">
              <MoreHorizIcon fontSize="small" />
            </button>
          </div>
        </div>

        {/* Video Description */}
        <div className="video-description-box">
          <div className="description-stats">
            <span>2.4M views</span>
            <span>2 months ago</span>
            <span className="hashtag">#programming</span>
            <span className="hashtag">#coding</span>
          </div>
          <p className="description-text">
            This is a complete tutorial session detailing concepts of web development and programming paradigms. Learn the best practices, tips, and modern guidelines to structure your projects efficiently. Subscribe for more high-quality educational coding videos!
          </p>
        </div>
      </div>

      {/* Sidebar Recommendations */}
      <div className="watch-sidebar">
        <h3 className="sidebar-heading">Up Next</h3>
        <div className="recommendations-list">
          {recommendations.map((video) => (
            <div
              key={video.id}
              className="recommended-card"
              onClick={() => navigate(`/watch/${video.id}`)}
            >
              <div className="recommended-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
              </div>
              <div className="recommended-info">
                <span className="recommended-title">{video.title}</span>
                <span className="recommended-channel">{video.channelTitle}</span>
                <span className="recommended-meta">450K views • 1 year ago</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watch;

