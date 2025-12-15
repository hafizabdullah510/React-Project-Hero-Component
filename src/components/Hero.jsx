import React from "react";
import heroImage from "../images/hero-img.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="section-center">
        <article className="hero-info">
          <h3>Yes, I am a</h3>
          <h1>Full Stack Developer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            quis maxime saepe magni esse odio quas voluptas facere illum qui
            nemo.
          </p>
          <button className="btn hero-btn">Let's Connect</button>
          <ul className="hero-count">
            <li>
              up to
              <span> 50% </span>
              discount on first project
            </li>
            <li>
              up to
              <span> 99.9% </span>
              customer satisfaction
            </li>
          </ul>
        </article>
        <div className="hero-img">
          <img src={heroImage} alt="hero" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
