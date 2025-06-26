import React, { useEffect, useState } from 'react';
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/boxicons.min.css";
import "../assets/css/meanmenu.min.css";
import "../assets/css/nice-select.min.css";
import "../assets/css/odometer.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/responsive.css";
import "../assets/css/style.css";
import "../assets/css/dark.css";
import "../assets/css/flaticon.css";
import logo from '../assets/imgs/logo.png';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import AnchorTemporaryDrawer from './ResponsiveNav';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authDropdownOpen, setAuthDropdownOpen] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkAuth(); // initial check
    window.addEventListener("authChanged", checkAuth);
    return () => {
      window.removeEventListener("authChanged", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    // Dispatch custom event after logout
    window.dispatchEvent(new Event("authChanged"));
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <header className="header-area">
        <div className="navbar-area">
          {/* Mobile Nav */}
          <div className="mobile-nav">
            <div className="container">
              <div className="mobile-menu">
                <div className="logo">
                  <a onClick={() => navigate("/")} className="navbar-brand2" href="#">
                    <img className='mobile-logo' style={{ width: "80px", marginTop: '1rem' }} src={logo} alt="logo" />
                  </a>
                </div>
                <div className="sidebar-menu">
                  <a href="#" className="burger-menu">
                    <AnchorTemporaryDrawer />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="desktop-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <a onClick={() => navigate("/")} className="navbar-brand" href="#">
                  <img style={{ width: "100px" }} src={logo} alt="logo" />
                </a>
                <div className="collapse navbar-collapse mean-menu">
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item"><a onClick={() => navigate("/")} className="nav-link active">Home</a></li>
                    <li className="nav-item"><a onClick={() => navigate("/aboutus")} className="nav-link">About Us</a></li>
                    <li className="nav-item"><a onClick={() => navigate("/implementationProcess")} className="nav-link">Implementation Process</a></li>
                    <li className="nav-item">
                      <a className="nav-link">How to get<br />involved <i className="bx bx-chevron-down" /></a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><a onClick={() => navigate("/discipleRegistration")} className="nav-link">SP Disciple</a></li>
                        <li className="nav-item"><a onClick={() => navigate("/Volunteer")} className="nav-link">Become a Volunteer</a></li>
                        <li className="nav-item"><a onClick={() => navigate("/donation")} className="nav-link">Donation</a></li>
                        <li className="nav-item"><a onClick={() => navigate("/Host")} className="nav-link">Become a host</a></li>
                      </ul>
                    </li>
                    <li className="nav-item"><a onClick={() => navigate("/events")} className="nav-link">Success Stories</a></li>
                    <li className="nav-item"><a onClick={() => navigate("/contactus")} className="nav-link">Contact Us</a></li>

                    {/* User Auth Section */}
                    <li style={{ position: "absolute", top: "20px", right: "40px", listStyle: "none" }}>
                      {isLoggedIn ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                          <button
                            onClick={() => navigate('/myaccount')}
                            style={{
                              padding: "0.5rem 1rem",
                              backgroundColor: "#fff",
                              color: "#f99115",
                              border: "2px solid #f99115",
                              borderRadius: "10px",
                              fontWeight: 500,
                              cursor: "pointer",
                              marginBottom: '2px',
                              width: '100%'
                            }}
                          >
                            My Account
                          </button>
                          <button
                            onClick={handleLogout}
                            style={{
                              padding: "0.5rem 1rem",
                              backgroundColor: "#f99115",
                              color: "white",
                              borderRadius: "10px",
                              fontWeight: 500,
                              border: "none",
                              marginTop: "3px",
                              cursor: "pointer",
                              width: '100%'
                            }}
                          >
                            Logout
                          </button>
                        </div>
                      ) : (
                        <div
                          className="nav-item"
                          style={{ position: "relative" }}
                          onMouseEnter={() => setAuthDropdownOpen(true)}
                          onMouseLeave={() => setAuthDropdownOpen(false)}
                        >
                          <a className="nav-link" style={{ cursor: "pointer" }}>
                            <FaUserCircle size={40} color="#f99115" />
                          </a>
                          <ul
                            className="dropdown-auth"
                            style={{
                              display: authDropdownOpen ? "block" : "none",
                              position: "absolute",
                              top: "70px",
                              right: 0,
                              background: "white",
                              padding: "1rem",
                              borderRadius: "12px",
                              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                              zIndex: 999,
                              minWidth: "150px"
                            }}
                          >
                            <li style={{ listStyle: "none", marginBottom: "10px" }}>
                              <button
                                onClick={() => navigate("/login")}
                                style={{
                                  width: "100%",
                                  padding: "0.5rem 1.5rem",
                                  backgroundColor: "#f99115",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "10px",
                                  fontWeight: 500,
                                  cursor: "pointer"
                                }}
                              >
                                SignIn
                              </button>
                            </li>
                            <li style={{ listStyle: "none" }}>
                              <button
                                onClick={() => navigate("/register")}
                                style={{
                                  width: "100%",
                                  padding: "0.5rem 1.5rem",
                                  backgroundColor: "#f99115",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "10px",
                                  fontWeight: 500,
                                  cursor: "pointer"
                                }}
                              >
                                SignUp
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
