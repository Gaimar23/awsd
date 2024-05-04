import React, { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/images/Logo.jpg";
//
import ReactCountryFlag from "react-country-flag";
import LanguageContext from "../../utilis/context/LanguageContext";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [menuState, SetMenuState] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const [languageContainer, setLanguageContainer] = useState("");
  const [languageContainerMobile, setLanguageContainerMobile] = useState("");
  const [subListNav, setSubListNav] = useState("");
  const [sideNavMobile, setSideNavMobile] = useState("");

  // const currentLanguage = document.querySelector(".currentLanguage");
  // const languageContainer = document.querySelector(".languageContainer");

  useEffect(() => {
    setLanguageContainer(document.querySelector(".languageContainer"));
    setLanguageContainerMobile(
      document.querySelector(".languageContainerMobile")
    );
    setSubListNav(document.querySelector(".listMobile"));
    setSideNavMobile(document.querySelector(".sideNavMobile"));
  }, []);

  // let translator = language == "fr"? translation.fr : translation.en

  const changeLanguageFr = () => {
    // setLanguage((prev) => (prev == "fr" ? "en" : "fr"));
    setLanguage(() => "fr");

    languageContainer.classList.contains("active")
      ? languageContainer.classList.remove("active")
      : languageContainer.classList.add("active");
    //
    languageContainerMobile.classList.contains("active")
      ? languageContainerMobile.classList.remove("active")
      : languageContainerMobile.classList.add("active");
  };

  const changeLanguageEn = () => {
    setLanguage(() => "en");

    languageContainer.classList.contains("active")
      ? languageContainer.classList.remove("active")
      : languageContainer.classList.add("active");

    languageContainerMobile.classList.contains("active")
      ? languageContainerMobile.classList.remove("active")
      : languageContainerMobile.classList.add("active");
  };

  const listLanguage = () => {
    // currentLanguage.classList.contains("list")
    //   ? currentLanguage.classList.remove("list")
    //   : currentLanguage.classList.add("list");

    //
    languageContainer.classList.contains("active")
      ? languageContainer.classList.remove("active")
      : languageContainer.classList.add("active");
    //
    languageContainerMobile.classList.contains("active")
      ? languageContainerMobile.classList.remove("active")
      : languageContainerMobile.classList.add("active");
  };

  // Mobile Navbar dropdown
  const mobileDropdown = () => {
    subListNav.classList.contains("open")
      ? subListNav.classList.remove("open")
      : subListNav.classList.add("open");
  };

  function handleSideNavMobile() {
    sideNavMobile.classList.contains("open")
      ? sideNavMobile.classList.remove("open")
      : sideNavMobile.classList.add("open");
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="firstNavbar">
          <div className="navTop">
            <span className="slogan">We fight for a better world...</span>
            <div className="languageContainer">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                }}
                className="currentLanguage"
                onClick={listLanguage}
              >
                {language == "fr" ? (
                  <ReactCountryFlag countryCode="FR" svg />
                ) : (
                  <ReactCountryFlag countryCode="GB" svg />
                )}

                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  <span>{language == "fr" ? "Français" : "English"}</span>
                </span>
              </div>
              <div className="listDeroulante">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "7px 4px",
                    borderBottom: "1px solid gray",
                    cursor: "pointer",
                  }}
                  onClick={changeLanguageEn}
                >
                  <ReactCountryFlag countryCode="GB" svg />
                  <span
                    style={{
                      color: "black",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    English
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "7px 4px",
                    borderBottom: "1px solid gray",
                    cursor: "pointer",
                  }}
                  onClick={changeLanguageFr}
                >
                  <ReactCountryFlag countryCode="FR" svg />
                  <span
                    style={{
                      color: "black",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    Français
                  </span>
                </div>
              </div>
            </div>
            <span className="ourLocation">
              <IoLocationOutline className="socialIcon" />
              Our location
            </span>
            <div className="others">
              <div className="social">
                <FaFacebookF className="socialIcon" />
                <FaInstagram className="socialIcon" />
                <SlSocialTwitter className="socialIcon" />
                <FaLinkedinIn className="socialIcon" />
              </div>
            </div>
          </div>
          <div className="navBottom">
            <img src={Logo} alt="logo" className="logo" />
            {/*  */}
            <ul className="menu">
              <li className="main">
                <Link to="/" className="LinkNav">
                  Accueil
                </Link>
              </li>
              <li className="dropdown">
                AWSD
                <ul className="list">
                  <li className="list-item">
                    <Link to="/projects" className="subLinkNav">
                      Projets
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link to="/organigramme" className="subLinkNav">
                      Organigramme
                    </Link>
                  </li>
                  <li className="list-item">third element</li>
                  <li className="list-item">fourth element</li>
                </ul>
              </li>
              <li className="main">Réalisations</li>
              <li className="main">
                <Link to="/recrutement" className="LinkNav">
                  Recrutement
                </Link>
              </li>
              <li className="main">
                <Link to="/contact" className="LinkNav">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mybtn">A venir</div>
            <div className="nav-icon-menu" onClick={handleSideNavMobile}>
              <FiMenu className="nav-icon-menu-sub" />
            </div>
          </div>
        </div>
        <div className="second sideNavMobile">
          <ul className="menu">
            <li className="main">
              <Link to="/" className="LinkNav">
                Accueil
              </Link>
            </li>
            <li className="dropdown">
              <span
                className="LinkNav"
                onClick={mobileDropdown}
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                AWSD
                <FaAngleDown size={15} />
              </span>
              <ul className="listMobile">
                <li className="list-item">
                  <Link to="/projects" className="subLinkNav">
                    Projets
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/organigramme" className="subLinkNav">
                    Organigramme
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/organigramme" className="subLinkNav">
                    third element
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/organigramme" className="subLinkNav">
                    Fourth element
                  </Link>
                </li>
              </ul>
            </li>
            <li className="main">
              <Link to="/recrutement" className="LinkNav">
                Réalisations
              </Link>
            </li>
            <li className="main">
              <Link to="/recrutement" className="LinkNav">
                Recrutement
              </Link>
            </li>
            <li className="main">
              <Link to="/contact" className="LinkNav">
                Contact
              </Link>
            </li>
          </ul>
          <div className="languageContainerMobile">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
              }}
              className="currentLanguage"
              onClick={listLanguage}
            >
              {language == "fr" ? (
                <ReactCountryFlag countryCode="FR" svg />
              ) : (
                <ReactCountryFlag countryCode="GB" svg />
              )}

              <span
                style={{
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                <span>{language == "fr" ? "Français" : "English"}</span>
              </span>
            </div>
            <div className="listDeroulante">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "7px 4px",
                  borderBottom: "1px solid gray",
                  cursor: "pointer",
                }}
                onClick={changeLanguageEn}
              >
                <ReactCountryFlag countryCode="GB" svg />
                <span
                  style={{
                    color: "black",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  English
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "7px 4px",
                  borderBottom: "1px solid gray",
                  cursor: "pointer",
                }}
                onClick={changeLanguageFr}
              >
                <ReactCountryFlag countryCode="FR" svg />
                <span
                  style={{
                    color: "black",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  Français
                </span>
              </div>
            </div>
          </div>

          <div className="mybtn">A venir</div>
          <div className="nav-icon-close" onClick={handleSideNavMobile}>
            <ImCross className="nav-icon-close-sub" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
