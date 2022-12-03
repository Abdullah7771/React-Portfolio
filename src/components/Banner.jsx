import React from "react";
import img from "../assets/dp.jpeg"


function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src={img}  alt="" height="500px" style={{paddingRight:'60px'}} />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Abdullah Yousuf</h6>
            <h3>Hybrid App Developer</h3>
            <p>
            A motivated individual with in-depth knowledge of languages and development tools, seeking a
             position in a growth-oriented company where i can use my skills to the advantage of the 
             company while having the scope to develop my own skills.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;