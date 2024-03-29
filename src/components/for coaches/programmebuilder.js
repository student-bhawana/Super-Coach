import React from "react";
import laptop_programe_builder from "../../assets/images/laptop-programe-builder-img.png";
const Programmebuilder = () => {
  return (
    <section className="team_wrapper programm_build_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="team_content pt-lg-4">
              <h2>
                Programme <span>Builder</span>
              </h2>
              <p>
                Create your own strength and training programmes based on over
                500 videos in the Prime Coach Exercise Library, or follow our
                pre-set performance programmes created by experienced sports and
                strengthening coaches.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="team_side_img">
              <figure className="m-0">
                <img
                  src={laptop_programe_builder}
                  className="img-fluid"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programmebuilder;
