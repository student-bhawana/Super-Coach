import React from "react";
import Athlete_login from "../../assets/images/Athlete-login-img.png";
import coach_login from "../../assets/images/coach-login-img.png";
const Loginselection = () => {
  return (
    <section class="selection-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-5 offset-md-1">
            <a href="login.php">
              <div class="athelete-login px-lg-4">
                <figure>
                  <img src={Athlete_login} class="img-fluid" alt="" />
                </figure>
              </div>
            </a>
          </div>
          <div class="col-lg-5 col-md-5">
            <a href="login.php">
              <div class="coach-login px-lg-4">
                <figure>
                  <img src={coach_login} class="img-fluid" alt="" />
                </figure>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loginselection;
