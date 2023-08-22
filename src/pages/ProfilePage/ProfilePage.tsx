import React from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const handleDoubleClick = () => {
    console.log("double clicked");
  };

  return (
    <div className="profile_avatar">
      <div className="profile_avatar_container">
        <img
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          alt="eyes"
          onDoubleClick={handleDoubleClick}
        />
        <h1>Justin Biber</h1>
      </div>
      <button className="btn">Edit</button>
      <div className="grid_card">
        <div className="profile_post">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt="the way"
          />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="profile_post">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt="the way"
          />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="profile_post">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt="the way"
          />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="profile_post">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt="the way"
          />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="profile_post">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt="the way"
          />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="profile_post">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt="the way"
          />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
