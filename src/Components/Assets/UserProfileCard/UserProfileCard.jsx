import React from "react";
import "./UserProfileCard.css";
import profile_icon from "../Assets/R.Praneetha Reddy.jpg";

const UserProfileCard = () => {
  return (
    <div className="card-container">
      <div className="upc">
        <div className="gradient"></div>
        <div className="profile-down">
          <img src={profile_icon} alt="R. Praneetha Reddy" />
          
          <div className="profile-title">R. Praneetha Reddy</div>
          <p className="profile-role">Front-end Developer</p>
          
          <div className="profile-description">
            B.Tech Third Year Student passionate about web design and development. 
            I’m always eager to learn about AI tools and new technologies.
          </div>

          <h2 className="profile-heading">Skills</h2>
          <div className="profile-skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>PHP</span>
          </div>

          <div className="profile-button">
            <a href="mailto:praneetharamireddygari@gmail.com">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
