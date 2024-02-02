import React from "react";
import laptop_team_builder from "../../assets/images/laptop-team-builder-img.png";
const IndividualAthlete = () => {
  return (
    <div className="individual_athlete team_build_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="athlete_left_img">
              <figure className="m-0">
                <img
                  src={laptop_team_builder}
                  className="img-fluid"
                  alt="laptop-team-builder-img"
                />
              </figure>
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="athlete_content text-right">
              <h2>
                Team <span>Builder</span>
              </h2>
              <p>
                Effortlessly build your coaching team and team of players with
                Prime Coach. Build your coaching team and assign them with
                custom roles and permissions. Plus create accounts for each team
                player and add their sports specific details, including their
                position played, fitness level, athletic experience and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualAthlete;
