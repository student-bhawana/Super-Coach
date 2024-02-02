import React from "react";
import newsletter from "../../assets/images/newsletter_icon.png";
import fb_icon from "../../assets/images/fb_icon.png";
import twitter_icon from "../../assets/images/twitter_icon.png";
import insta_icon from "../../assets/images/insta_icon.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer_menu">
              <h5>Information</h5>
              <ul>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Cookie Policy</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer_menu">
              <h5>Follow us</h5>
              <ul className="social_links">
                <li>
                  <a href="">
                    <img src={newsletter} className="img-fluid" alt="" />{" "}
                    <span>Newsletter</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={fb_icon} className="img-fluid" alt="" />{" "}
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={twitter_icon} className="img-fluid" alt="" />{" "}
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={insta_icon} className="img-fluid" alt="" />{" "}
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer_menu">
              <h5>Get in Touch</h5>
              <button type="button" className="btn btn-default contact_btn">
                contact us{" "}
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
