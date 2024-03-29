import React from "react";
import tablet from "../../assets/images/tablet-img.png";
const Youth = () => {
  return (
    <section className="youth_athlete_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="athlete-img">
              <figure>
                <img src={tablet} className="img-fluid" alt="" />
              </figure>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="athlete-content pt-lg-5 text-right">
              <h2>
                Youth <span>Athletes</span>
              </h2>
              <p>
                Our strength and conditioning programmes have been designed by
                specialist coaches who’ve worked with some of the best youth
                athletes in the world. Let Prime Coach help you take your
                training to the next level with smart online strength and
                conditioning coaching specifically tailored to your sport and
                athletic ability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youth;
