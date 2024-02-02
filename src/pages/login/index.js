import React from "react";
import AthleteLoginImage from "../../assets/images/Athlete-login-img.png";
import CoachLoginImage from "../../assets/images/coach-login-img.png";
const Login = () => {
  return (
    <div className="login-page-wrapper">
      <section className="login_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <form action="" className="login_form">
                <div className="heading text-center">LOGIN</div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>

                <div className="page_links mt-4">
                  <a href="forgot_password.php" className="forgot_password">
                    Forgot Password ?
                  </a>
                  <a href="sport_selection.php" className="forgot_password">
                    New User
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="selection-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 offset-md-1">
              <a href="login.php">
                <div className="athelete-login px-lg-4">
                  <figure>
                    <img src={AthleteLoginImage} className="img-fluid" alt="" />
                  </figure>
                </div>
              </a>
            </div>
            <div className="col-lg-5 col-md-5">
              <a href="login.php">
                <div className="coach-login px-lg-4">
                  <figure>
                    <img src={CoachLoginImage} className="img-fluid" alt="" />
                  </figure>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
