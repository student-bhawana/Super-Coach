import React from "react";
import arrowrightblack from "../../assets/images/arrow-right-black-img.png";
import jamescoach from "../../assets/images/james-coach.png";
import piotrcoach from "../../assets/images/piotr-coach.png";
import setimgpng from "../../assets/images/set-img.png";
import screenimgpng from "../../assets/images/screen-img.png";
import succes from "../../assets/images/succes.png";
import win from "../../assets/images/win-img.png";
import screenshots_combined from "../../assets/images/screenshots_combined_img.png";
import athletics from "../../assets/images/athletics-img.png";
import badminton from "../../assets/images/badminton-img.png";
import basketball from "../../assets/images/basketball-img.png";
import bodytransformation from "../../assets/images/body-transformation-img.png";
import cricket from "../../assets/images/cricket-img.png";
import fencing from "../../assets/images/fencing-img.png";
import football from "../../assets/images/football-img.png";
import golf from "../../assets/images/golf-img.png";
import handball from "../../assets/images/handball-img.png";
import hockey from "../../assets/images/hockey-img.png";
import icehockey from "../../assets/images/ice-hockey-img.png";
import lacrosse from "../../assets/images/lacrosse-img.png";
import mma from "../../assets/images/mma-img.png";
import netball from "../../assets/images/netball-img.png";
import rowing from "../../assets/images/rowing-img.png";
import rugby from "../../assets/images/rugby-img.png";
import skiing from "../../assets/images/skiing-img.png";
import squash from "../../assets/images/squash-img.png";
import tennis from "../../assets/images/tennis-img.png";
import volleyball from "../../assets/images/volleyball-img.png";
import josh_resized_coach from "../../assets/images/josh-resized-coach.png";
import arrow_right_blue from "../../assets/images/arrow-right-blue-img.png";

const Home = () => {
  return (
    <div className="page-wrapper">
      <section className="banner_wrapper">
        <div className="banner_content">
          <div className="banner_image d-flex flex-column justify-content-center">
            <div className="container">
              <h1>
                <span>Smart </span>
                Online Strength <span>&</span>
                Conditioning Coach
              </h1>
              <a href="" className="start_btn">
                start now{" "}
                <img src={arrowrightblack} className="img-fluid" alt="" />
              </a>
            </div>
          </div>
          <div className="how-it-work-wrapper">
            <div className="container">
              <div className="heading_text">
                <h2>
                  How <span>Super Coach</span> Works?
                </h2>
              </div>
              <div className="row text-center">
                <div className="col-lg-3">
                  <div className="inner_boxes">
                    <figure>
                      <img src={setimgpng} className="img-fluid" alt="" />
                    </figure>
                    <div className="details">
                      <div className="detail-title">SELECT</div>
                      <p>
                        Start your training journey by selecting your sport,
                        your preferred training location (gym or home), the
                        number of weekly sessions and the duration of your
                        programme.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="inner_boxes">
                    <figure>
                      <img src={screenimgpng} className="img-fluid" alt="" />
                    </figure>
                    <div className="details">
                      <div className="detail-title">SCREEN</div>
                      <p>
                        Perform self-screening so our smart technology can
                        identify any movement dysfunction. You’ll be assigned a
                        tailored pre-training corrective programme based on your
                        screening result.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="inner_boxes">
                    <figure>
                      <img src={succes} className="img-fluid" alt="" />
                    </figure>
                    <div className="details">
                      <div className="detail-title">TRAIN HARDER</div>
                      <p>
                        Become stronger, fitter and faster than ever before with
                        our unique, sports specific programme tailored to your
                        individual needs. Get in touch with your personal coach
                        to check your progress and form with the Feedback
                        setting.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="inner_boxes">
                    <figure>
                      <img src={win} className="img-fluid" alt="" />
                    </figure>
                    <div className="details">
                      <div className="detail-title">PERFORM</div>
                      <p>
                        Take your training to the next level so you perform at
                        your best. Become a better athlete with Prime Coach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="coach-athelete_wrapper">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-6 p-0 d-flex flex-column">
              <div className="athelete-section h-100">
                <h2>For Athelete</h2>
                <p>
                  Get fitter, stronger & faster using our intelligent online
                  software that offers individually tailored strength &
                  conditioning training plans for any athlete. Our programmes
                  are designed by accredited strength & conditioning coaches
                  with years of experience. Programmes are tailored specifically
                  to each athlete’s training needs & goals covering a range of
                  disciplines for amateur, semi-professional & professional
                  athletes.
                </p>
                <a href="#" className="learn_more">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6 p-0 d-flex flex-column">
              <div className="coach-section h-100">
                <h2>For Coaches</h2>
                <p>
                  Help your athletes train harder and perform better with our
                  smart strength & conditioning training plans. With programmes
                  designed by expert strength & conditioning coaches, you can
                  create a training plan that can be tailored specifically to
                  each of your athlete’s training needs & goals. Our programmes
                  cover a range of sports for amateur, semi-professional &
                  professional athletes.
                </p>
                <a href="#" className="learn_more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="software_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left_side_img">
                <figure>
                  <img
                    src={screenshots_combined}
                    className="img-fluid"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right_side_text">
                Our unique software is designed with athletes like you in mind.
                Our easy to follow, individually tailored programmes will help
                you to take your performance to the next level.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gaming_wrapper">
        <div className="container">
          <div className="heading">
            Simply <span>select your sport</span> and start your journey to
            become a faster, stronger, better athlete
          </div>
          <div className="row text-center">
            <div className="col-lg-2 col-md-2 offset-md-1">
              <div className="game_play">
                <figure>
                  <img src={athletics} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Athletics</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={badminton} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Badminton</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={basketball} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Basketball</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={bodytransformation} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Body Transformation</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={cricket} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Cricket</div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-2 col-md-2 offset-md-1">
              <div className="game_play">
                <figure>
                  <img src={fencing} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Fencing</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={football} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Football</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={golf} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Golf</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={handball} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Handball</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={hockey} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Hockey</div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-2 col-md-2 offset-md-1">
              <div className="game_play">
                <figure>
                  <img src={icehockey} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Ice Hockey</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={lacrosse} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Lacrosse</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={mma} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">MMA</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={netball} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Netball</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={rowing} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Rowing</div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-2 col-md-2 offset-md-1">
              <div className="game_play">
                <figure>
                  <img src={rugby} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Rugby</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={skiing} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Skiing</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={squash} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Squash</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={tennis} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Tennis</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="game_play">
                <figure>
                  <img src={volleyball} className="img-fluid" alt="" />
                </figure>
                <div className="sports_title">Volleyball</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <img
                    src={piotrcoach}
                    className="img-fluid"
                    alt="piotr-coach"
                  />
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
                  <img
                    src={jamescoach}
                    className="img-fluid"
                    alt="james-coach"
                  />
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
    </div>
  );
};

export default Home;
