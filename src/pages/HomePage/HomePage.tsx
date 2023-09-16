import React, { useState } from "react";
import "./HomePage.css";
import Navbar from "../../components/common/Navbar/Navbar";
//! ----Icons----
import chat from "../../assets/chat.png";
import heart from "../../assets/heart.png";
import save from "../../assets/save-instagram.png";
import send from "../../assets/send.png";
import tick from "../../assets/verified.png";
import smile from "../../assets/smile.png";
import { posts } from "../../utils/consts";

export const HomePage = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <>
      <Navbar />
      {posts.map((post) => (
        <div key={post.id}>
          <div className="container_home" key={post.id}>
            <div className="posts_container">
              <div>
                <div className="posts_container_post">
                  <header className="container_header_onePost">
                    <div className="avatar_box">
                      <img src={post.avatar} alt="post image" />
                      <div className="nickName">
                        <h4>{post.author}</h4>
                        <img src={tick} alt="blue tick" />
                      </div>
                      <div className="blue_tick"></div>
                    </div>
                    <div className="setting">
                      <span>.</span>
                      <span>.</span>
                      <span>.</span>
                    </div>
                  </header>
                  <div className="container_image">
                    <img src={post.image} alt="" />
                  </div>
                  <div className="icons_box">
                    <div className="icons">
                      {isLiked ? (
                        <img
                          height="19"
                          src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
                          alt="red heart"
                          // onClick={() => setIsLiked(isLiked)}
                        />
                      ) : (
                        <img
                          src={heart}
                          alt="heart icon"
                          onClick={() => setIsLiked(!isLiked)}
                        />
                      )}
                      <img src={chat} alt="chat icon" />
                      <img src={send} alt="send icon" />
                    </div>
                    <img src={save} alt="save icon" />
                  </div>
                  <div className="post_likes">
                    <p>
                      100 like<span>s</span>
                    </p>
                  </div>
                  <div className="post_description">
                    <p>
                      <span>{post.author}</span> {post.description}
                    </p>
                  </div>
                  <div className="comments_container">
                    <div className="comm_count">
                      <p>
                        View all <span>24</span> comments
                      </p>
                    </div>
                    <div className="one_comm">
                      <p>Lorem ipsum dolor sit.</p>
                      <img src={heart} alt="heart icon" />
                    </div>
                    <div className="inp_comm">
                      <input type="text" placeholder="Add a comment..." />
                      <img src={smile} alt="smile icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
