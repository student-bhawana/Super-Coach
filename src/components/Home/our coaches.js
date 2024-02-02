import React from "react";
import arrow_right_blue from "../../assets/images/arrow-right-blue-img.png";
import josh_resized_coach from "../../assets/images/josh-resized-coach.png";
import jamescoach from "../../assets/images/james-coach.png";
import piotrcoach from "../../assets/images/piotr-coach.png";
const OurCoaches = () => {
  return (
    <section id="our-coaches-wrapper">
      <div className="container">
        <div className="heading mb-4">
          <h2>Our Coaches</h2>
          <p>
            Created by our leading strength and conditioning coaches, our
            programmes are designed to help you reach your full athletic
            potential. You’ll be assigned an expert coach in your field who’ll
            provide advice and support to help you enhance your performance.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="coach_details">
              <figure>
                <img src={piotrcoach} className="img-fluid" alt="piotr-coach" />
              </figure>
              <div className="coach-name">Piotr Golaszczyk</div>
              <div className="role">
                Founder | Strength & Conditioning Coach
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="coach_details">
              <figure>
                <img src={jamescoach} className="img-fluid" alt="james-coach" />
              </figure>
              <div className="coach-name">James Meadows</div>
              <div className="role">Strength & Conditioning Coach</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="coach_details">
              <figure>
                <img
                  src={josh_resized_coach}
                  className="img-fluid"
                  alt="josh-resized-coach"
                />
              </figure>
              <div className="coach-name">Josh Gooden</div>
              <div className="role">Strength & Conditioning Coach</div>
            </div>
          </div>
        </div>
      </div>
      <div className="trial-wrapper">
        <div className="container">
          <div className="inner-text">
            Start your
            <span>14 day Free Trial</span>
            <a href="#" className="start_trial_btn">
              Start Now{" "}
              <img src={arrow_right_blue} className="img-fluid" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCoaches;
