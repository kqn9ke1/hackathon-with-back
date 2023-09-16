import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import {
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBCard,
//   MDBCardText,
//   MDBCardBody,
//   MDBCardImage,
//   MDBBtn,
//   MDBTypography,
// } from "mdb-react-ui-kit";
// import CommentInput from "../../components/CommentInput";
import setting from "../../assets/settings.svg";
import flag from "../../assets/bookmark.svg";
import reels from "../../assets/reels.svg";
import "./ProfilePage.css";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { useProductContext } from "../../contexts/ProductContext/ProductContext";
import { posts } from "../../utils/consts";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import plus from "../../assets/plus.png";

export default function ProfilePage() {
  const { user } = useAuthContext();
  const { products } = useProductContext();
  const navigate = useNavigate();
  return (
    <div className="profile_header">
      <header>
        <div className="header_avatar">
          <div className="header_avatar_img" style={{ cursor: "pointer" }}>
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="avatar"
            />
          </div>
        </div>
        <section>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5 style={{ color: "black", cursor: "pointer" }}>
              {user?.email}nickname
            </h5>

            <Button
              component={Link}
              to="/edit"
              type="button"
              sx={{
                fontWeight: 500,
                padding: "5px 15px",
                border: "none",
                color: "black",
                backgroundColor: " rgb(237, 237, 237)",
                borderRadius: "8px",
                m: "0 10px",
                textTransform: "capitalize",

                "&:hover": { backgroundColor: "#e2e2e2", color: "black" },
              }}
            >
              Edit prolfile
            </Button>
            <div style={{ cursor: "pointer" }}>
              <img src={setting} alt="" width="30" height="30" />
            </div>
          </div>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              padding: 0,
              width: "250px",
            }}
            className="ul_profile"
          >
            <li>
              <span>9&nbsp;</span>Posts
            </li>
            <li style={{ cursor: "pointer" }}>
              &nbsp;&nbsp;<span>119&nbsp;</span>Follower
            </li>
            <li style={{ cursor: "pointer" }}>
              &nbsp;&nbsp;<span>119</span>&nbsp;Following
            </li>
          </ul>
        </section>
      </header>
      <section>
        <div className="hightLights">
          <div className="hightLight_add">
            <img src={plus} alt="" />
            <div className="hightLight_text">
              <span>new</span>
            </div>
          </div>
        </div>
      </section>
      <div className="profile_posts_sectors">
        <div className="absolute">
          <div className="post">
            <svg
              aria-label=""
              color="rgb(0, 0, 0)"
              fill="rgb(0, 0, 0)"
              height="25"
              role="img"
              viewBox="0 0 24 24"
              width="25"
            >
              <rect
                fill="none"
                height="18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                width="18"
                x="3"
                y="3"
              ></rect>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="9.015"
                x2="9.015"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="14.985"
                x2="14.985"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="21"
                x2="3"
                y1="9.015"
                y2="9.015"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="21"
                x2="3"
                y1="14.985"
                y2="14.985"
              ></line>
            </svg>
            <span>Post</span>
          </div>
          <div className="reels">
            <img src={reels} alt="" />
            <span>Reels</span>
          </div>
          <div className="elect">
            <img src={flag} alt="" />
            <span>Elect</span>
          </div>
        </div>
      </div>
      {/* <ProuctPage /> */}
      <div className="post_box">
        {posts.map((post) => (
          <>
            <img src={post.image} alt="" className="post_img" />
          </>
        ))}
      </div>
    </div>
  );
}
