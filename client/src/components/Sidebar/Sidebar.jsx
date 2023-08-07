import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoCallIcon from "@mui/icons-material/VideoCall";

const Sidebar = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {currentUser ? (
          <div
            className="user"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Link
              to={`channel/${currentUser._id}`}
              style={{
                color: "inherit",
                textDecorationColor: "none",
                marginBottom: "10px",
              }}
            >
              <img
                className="userImage"
                style={{
                  height: "40px",
                  width: "40px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                src={currentUser.profile_image}
                alt=""
              />
            </Link>
            <h3
              className="userName"
              style={{
                fontSize: "17px",
                fontWeight: "500",
                cursor: "pointer",
                marginBottom: "10px",
              }}
            >
              {currentUser.name}
            </h3>
          </div>
        ) : (
          <></>
        )}

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="sidebarWrapperItem">
            <HomeIcon style={{ fill: "#3ea6ff" }} />
            Home
          </div>
        </Link>

        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="sidebarWrapperItem">
            <ExploreIcon style={{ fill: "#3ea6ff" }} />
            Explore
          </div>
        </Link>

        {currentUser ? (
          <Link
            to="subscriptions"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="sidebarWrapperItem">
              <SubscriptionsIcon style={{ fill: "#3ea6ff" }} />
              Subscriptions
            </div>
          </Link>
        ) : (
          <></>
        )}

        <hr className="sidebarHr"></hr>

        {currentUser ? (
          <Link
            to="create/video"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "10px 0px",
                padding: "10px",
                backgroundColor: "transparent",
                border: "1px solid #373737",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              <VideoCallIcon />
              Add Video
            </button>
          </Link>
        ) : (
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="sidebarSignIn">
              <span className="sidebarSignInText">
                Sign in to like, share and comment videos.
              </span>
              <button className="sidebarSignInButton">
                <HomeIcon style={{ fill: "#3ea6ff" }} />
                Sign In
              </button>
            </div>
          </Link>
        )}

        <hr className="sidebarHr"></hr>
      </div>
    </div>
  );
};

export default Sidebar;
