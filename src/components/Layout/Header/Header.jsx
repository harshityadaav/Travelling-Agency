import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../../Style/Layout/Header/Header.css";
import logo from "../../../assets/Images/Layout/Header/logo.svg";
import Footer from "../Footer/Footer";
import Form from "../../ContactUs/Form";
import { motion, useAnimation } from "framer-motion";

const Header = () => {
  const [head, sethead] = useState(false);
  const navigate = useNavigate();
  const [headerVisible, setHeaderVisible] = useState(true);
  const [top, setTop] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    // console.log("Open modal button clicked");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // console.log("Close modal button clicked");
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setHeaderVisible(
        prevScrollPos > currentScrollPos || currentScrollPos <= 0
      );
      prevScrollPos = currentScrollPos;
      setTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(headerVisible);
  // console.log(top);

  const controls = useAnimation();
  useEffect(() => {
    // Animation when headerVisible changes
    controls.start({
      y: headerVisible ? 0 : -100,
      transition: { duration: 0.3, type: "tween" },
    });

    // Animation when top is 0
    if (top === 0) {
      controls.start({
        y: 0,
        transition: { duration: 0.3, type: "tween" },
      });
    } else if (!headerVisible) {
      // Animation when headerVisible is false
      controls.start({
        y: -100,
        transition: { duration: 0.3, type: "tween" },
      });
    }
  }, [headerVisible, top, controls]);

  return (
    <>
      <motion.header
        className={
          headerVisible ? "header_section header_scroll" : "header_section"
        }
        animate={controls}
      >
        <div
          className={
            headerVisible && top === 0 ? "account" : " account headings_hidden"
          }
        >
          <div className="account_left">
            <div>santour@example.com</div>
          </div>
          <div className="account_right">
            <div>(723)-700-1183</div>
          </div>
        </div>
        <div className={headerVisible ? "headings" : "headings "}>
          <div className="header_left" onClick={() => navigate("/")}>
            <img src={logo} className="header_logo" alt="" />
          </div>
          <div className={head ? "mobile_view c_primary" : "right"}>
            <li
              onClick={() => {
                navigate("/");
                sethead(false);
              }}
            >
              HOME
            </li>
            <div className="slash">/</div>
            <li
              onClick={() => {
                navigate("/about-us");
                sethead(false);
              }}
            >
              ABOUT
            </li>
            <div className="slash">/</div>
            <li
              onClick={() => {
                navigate("/packages");
                sethead(false);
              }}
            >
              PACKAGES
            </li>
            <div className="slash">/</div>
            <li
              onClick={() => {
                navigate("/gallery");
                sethead(false);
              }}
            >
              GALLERY
            </li>
            <div className="slash">/</div>
            <li
              onClick={() => {
                navigate("/contact");
                sethead(false);
              }}
            >
              CONTACT US
            </li>
            {head && (
              <div className="quote-borders">
                <div className="quotes" onClick={openModal}>
                  GET IN TOUCH
                </div>
              </div>
            )}
          </div>
          <div className="quote-border">
            <div className="quote" onClick={openModal}>
              GET IN TOUCH
            </div>
            <div className="mobile_menu" onClick={() => sethead(!head)}>
              <i className="fa fa-bars" style={{ fontSize: "24px" }}></i>
            </div>
          </div>
          {isModalOpen && <div className="overlay" onClick={closeModal}></div>}
          <div className={isModalOpen ? "Form open" : "Form"}>
            {isModalOpen && (
              <Form isOpen={isModalOpen} closeModal={closeModal} />
            )}
            {isModalOpen && (
              <div className="popup">
                <span onClick={closeModal}>x</span>
              </div>
            )}
          </div>
        </div>
      </motion.header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
