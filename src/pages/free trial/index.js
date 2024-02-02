import React from "react";
import Athletics from "../../assets/images/athletics-img.png";
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

const FreeTrial = () => {
  return (
    <section className="sport-wrapper">
      <div className="container">
        <div className="heading text-white text-center">
          <h2>Select Sport</h2>
        </div>
        <div className="inner_allsport">
          <div className="row text-center">
            <div className="col-lg-4 col-md-4">
              <a href="athelet_signup.php">
                <div className="game_play">
                  <div className="sports_title">Athletics</div>
                  <figure>
                    <img src={Athletics} className="img-fluid" alt="" />
                  </figure>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Badminton</div>
                <figure>
                  <img src={badminton} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Basketball</div>
                <figure>
                  <img src={basketball} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Body Transformation</div>
                <figure>
                  <img src={bodytransformation} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Cricket</div>
                <figure>
                  <img src={cricket} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Fencing</div>
                <figure>
                  <img src={fencing} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Football</div>
                <figure>
                  <img src={football} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Golf</div>
                <figure>
                  <img src={golf} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Handball</div>
                <figure>
                  <img src={handball} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Hockey</div>
                <figure>
                  <img src={hockey} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Ice Hockey</div>
                <figure>
                  <img src={icehockey} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Lacrosse</div>
                <figure>
                  <img src={lacrosse} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">MMA</div>
                <figure>
                  <img src={mma} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Netball</div>
                <figure>
                  <img src={netball} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Rowing</div>
                <figure>
                  <img src={rowing} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Rugby</div>
                <figure>
                  <img src={rugby} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Skiing</div>
                <figure>
                  <img src={skiing} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Squash</div>
                <figure>
                  <img src={squash} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Tennis</div>
                <figure>
                  <img src={tennis} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="game_play">
                <div className="sports_title">Volleyball</div>
                <figure>
                  <img src={volleyball} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
