import React from "react";
import arrowrightblack from "../../assets/images/arrow-right-black-img.png";
import setimgpng from "../../assets/images/set-img.png";
import screenimgpng from "../../assets/images/screen-img.png";
import succes from "../../assets/images/succes.png";
import win from "../../assets/images/win-img.png";
const HomeBanner = () => {
  return (
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
                How <span>Prime Coach</span> Works?
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
                      Start your training journey by selecting your sport, your
                      preferred training location (gym or home), the number of
                      weekly sessions and the duration of your programme.
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
                      individual needs. Get in touch with your personal coach to
                      check your progress and form with the Feedback setting.
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
  );
};

export default HomeBanner;
