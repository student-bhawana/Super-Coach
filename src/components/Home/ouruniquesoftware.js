import React from "react";
import screenshots_combined from "../../assets/images/screenshots_combined_img.png";

const OurUniqueSoftware = () => {
  return (
    <section id="software_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left_side_img">
              <figure>
                <img src={screenshots_combined} className="img-fluid" alt="" />
              </figure>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right_side_text">
              Our unique software is designed with athletes like you in mind.
              Our easy to follow, individually tailored programmes will help you
              to take your performance to the next level.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurUniqueSoftware;
