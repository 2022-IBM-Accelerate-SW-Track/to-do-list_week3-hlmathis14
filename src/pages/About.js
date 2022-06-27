import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p>Design your About me page </p>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              // Image goes here
              src = {profile_pic}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Hyman Mathis</div>
            <div className="brief_description">
               I am Hyman Mathis, a Senior at Coastal Carolina University majoring in Information Systems with
               a minor in Business Administration. I'm from the small town of Camden, SC where I spent my entire life before
               undergrad. I find myself to be dedicated, driven, and open-minded. I believe that
               your results are always inevitable when you put in the time and effort for what you want to accomplish, so 
               in other words I believe in making the impossible, possible. Currently I am looking forward to a career opportunity
               in Software Development. Fun fact about me is my name is actually Hebrew for "life".
            </div>
          </div>
        </div> 
      </div>
    )
  }
}
