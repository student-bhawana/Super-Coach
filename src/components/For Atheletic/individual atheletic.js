import React from "react";
import mobile from "../../assets/images/mobile-img.png";
const IndividualAtheletic = () => {
  return (
    <div className="individual_athlete">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="athlete_left_img">
              <figure className="m-0">
                <img src={mobile} className="img-fluid" alt="" />
              </figure>
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="athlete_content text-right">
              <h2>
                Individual <span>Athletes</span>
              </h2>
              <p>
                From amateur to semi-professional and professional athletes,
                Prime Coach has a strength and conditioning program to fit your
                training needs. Self-screen your movements, select your training
                season period, set your training schedule, monitor your fatigue
                levels, assess your progress and connect with a sports specific
                coach to reach your full athletic potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualAtheletic;
