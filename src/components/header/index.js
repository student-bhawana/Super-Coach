import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="web-logo">
            <a className="navbar-brand logo" href="#">
              <img src={logo} className="img-fluid" />
              <div>
                <span>Super</span>
                <br />
                Coach
              </div>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/*<!-- <span className="navbar-toggler-icon"></span> --> */}
            <span>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link home" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link athlete" href="forathlete.php">
             For Athletes
             </a> */}
                <Link className="nav-link athlete" to="/for-athelete">
                  {" "}
                  For Athletes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="for-coach">
                  For Coaches
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/free-trial">
                  Free Trial
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
