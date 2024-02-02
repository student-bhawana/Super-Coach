import React from "react";
import mobile from "../../assets/images/mobile-img.png";
import laptop from "../../assets/images/laptop-img.png";
import tablet from "../../assets/images/tablet-img.png";
const ForAtheletic = () => {
  return (
    <div className="athlete_page_wrapper">
      <section className="banner_wrapper athlete-banner">
        <div className="banner_content d-flex flex-column Hustify-content-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h1>
                  <span>For</span> Athletes
                </h1>
                <p>
                  Intelligent online strength and conditioning coaching for all
                  levels of athletes.
                </p>
              </div>
            </div>
          </div>
        </div>
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
                    Prime Coach has a strength and conditioning program to fit
                    your training needs. Self-screen your movements, select your
                    training season period, set your training schedule, monitor
                    your fatigue levels, assess your progress and connect with a
                    sports specific coach to reach your full athletic potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!------------banner_wrapper END--------------->*/}
      <section className="team_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="team_content">
                <h2>
                  For <span>Teams</span>
                </h2>
                <p>
                  No matter what your sport, Prime coach is the perfect addition
                  to your team. Our intelligent online strength and conditioning
                  programmes can be tailored to individual team members based on
                  fitness level and athletic ability. From selecting specific
                  training season periods and comparing test results to
                  monitoring fatigue levels and everything in-between, Prime
                  Coach helps your team members reach their fitness goals.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="team_side_img">
                <figure className="m-0">
                  <img src={laptop} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!------------team_wrapper END--------------->*/}

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
      {/*<!------------youth_athlete_wrapper END--------------->*/}
    </div>
  );
};

export default ForAtheletic;
