import React from "react";
import "./footer.component.css";
/*import facebook from "./img/Facebook Pink 1.png";
import instagram from "./img/Instagram Pink 1.png";
import linkedin from "./img/Social Pink 1.png";
import twitter from "./img/Twitter Pink 1.png";*/
import facebook from "./img/Facebook Black&Yellow.png";
import instagram from "./img/Instagram Black&Yellow.png";
import linkedin from "./img/Linkdn Black&Yellow.png";
import twitter from "./img/Twitter Black&Yellow.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Donations</h4>
            <a href="/employer">
              <p>Social Help</p>
            </a>
            <a href="/Health Plan">
              <p>Health Plan</p>
            </a>
            <a href="/Individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Volunteer</h4>
            <a href="/resource">
              <p>Center</p>
            </a>
            <a href="/resource">
              <p>Testimonials</p>
            </a>
            <a href="/resource">
              <p>Join</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Partners</h4>
            <a href="/employer">
              <p>MigraCode</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/About">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
          </div>

          <div className="sb__footer-links_div">
            <h4> Coming Soon</h4>
            <div className="socialmedia">
              <p>
                <img
                  src={facebook}
                  alt="facebook"
                />
              </p>
              <p>
                <img
                  src={instagram}
                  alt="Instagram"
                />
              </p>
              <p>
                <img
                  src={linkedin}
                  alt="linkdn"
                />
              </p>
              <p>
                <img
                  src={twitter}
                  alt="twitter"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="sb__footer-below">
        <div className="sb__footer-copyright">
          <p>
            Copyright @{new Date().getFullYear()} Soul Plates. All rights
            reserved.
          </p>
        </div>
        <div className="sb__footer-below-links">
          <a href="/terms">
            <div>
              <p>Terms & Conditions</p>
            </div>
          </a>
          <a href="/privacy">
            <div>
              <p>Privacy</p>
            </div>
          </a>
          <a href="/security">
            <div>
              <p>Security</p>
            </div>
          </a>
          <a href="/cookies">
            <div>
              <p>Cookies</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
/*test*/