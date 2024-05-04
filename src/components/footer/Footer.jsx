import React from "react";
import "./footer.scss";
import logo01 from "../../assets/images/Logo01.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
//
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="mainFooter">
          <div className="top">
            <div className="first">
              <div className="logoContainer">
                <img src={logo01} alt="logo" className="logo" />
              </div>
              <div className="social">
                <span className="slogan">This is the slogan</span>
                {/* <span className="iconContainer">
                  <span className="icons">
                    <FaFacebookF className="icon" />
                  </span>
                  <span className="icons">
                    <FaInstagram className="icon" />
                  </span>
                  <span className="icons">
                    <SlSocialTwitter className="icon" />
                  </span>
                  <span className="icons">
                    <FaLinkedinIn className="icon" />
                  </span>
                </span> */}
              </div>
            </div>
            <div className="second">
              <h2 className="title">Liens Utiles</h2>
              <div className="liens">
                <div className="lien">
                  <span className="point"></span>
                  <Link className="desc01">Organigramme</Link>
                </div>
                <div className="lien">
                  <span className="point"></span>
                  <Link className="desc01">Candidature Spontanée</Link>
                </div>
                <div className="lien">
                  <span className="point"></span>
                  <Link className="desc01">Carrière</Link>
                </div>
                <div className="lien">
                  <span className="point"></span>
                  <Link className="desc01">Réalisations</Link>
                </div>
              </div>
            </div>
            <div className="third">
              <h2 className="title">Others</h2>
              <div className="liens">
                <div className="lien">
                  <span className="point"></span>
                  <Link className="desc01">Organigramme</Link>
                </div>
                <div className="lien">
                  <span className="point"></span>
                  <Link className="desc01">Candidature Spontanée</Link>
                </div>
                <div className="lien">
                  <span className="point"></span>
                  <Link className="desc01">Carrière</Link>
                </div>
                <div className="lien">
                  <span className="point"></span>
                  <Link className="desc01">Réalisations</Link>
                </div>
              </div>
            </div>
            <div className="four">
              <h2 className="title">Contact</h2>
              <div className="liens">
                <div className="lien">
                  <FaPhoneVolume className="iconContact" />
                  <span className="desc01">+237 693736463</span>
                </div>
                <div className="lien">
                  <IoMailUnreadOutline className="iconContact" />
                  <span className="desc01">info@awsd.org</span>
                </div>
                <div className="lien">
                  <IoLocationOutline className="iconContact" />
                  <span className="desc01">Yaoundé, rue 20 res</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="copyright" style={{ color: "gray" }}>
              © Copyright {new Date().getFullYear()} AWSD, Design by Gaimard F.
            </div>
            <span className="iconContainer">
              <span className="icons">
                <FaFacebookF className="icon" />
              </span>
              <span className="icons">
                <FaInstagram className="icon" />
              </span>
              <span className="icons">
                <SlSocialTwitter className="icon" />
              </span>
              <span className="icons">
                <FaLinkedinIn className="icon" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
