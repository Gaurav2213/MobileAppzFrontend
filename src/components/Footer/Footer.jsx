import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';
import { Form, Button } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        {/* Responsive grid: 1 column on xs, 2 on md, 4 on lg */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {/* Brand & Description */}
          <div className="col text-center text-md-start">
            <div className="d-inline-flex align-items-center mb-3">
              <img
                src="/logo.jpeg"
                alt="Logo"
                style={{ width: '32px', height: '32px', marginRight: '10px' }}
              />
              <span className="fw-bold fs-5">Mobile Appz</span>
            </div>
            <p className="small">
              Empowering citizens to improve their communities through technology-driven reporting.
            </p>
            <div>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-white me-3"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white me-3"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col text-center text-md-start">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link to="/dashboard" className="text-white text-decoration-none">
                  Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/report" className="text-white text-decoration-none">
                  New Report
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/login" className="text-white text-decoration-none">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div className="col text-center text-md-start">
            <h5 className="mb-3">Resources</h5>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link to="/privacy" className="text-white text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="text-white text-decoration-none">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe & Contact */}
          <div className="col text-center text-md-start">
            <h5 className="mb-3">Our Contact Details</h5>
            <div className="small">
              <p className="mb-2">
                <FaEnvelope className="me-2" /> support@mobileappz.com
              </p>
              <p className="mb-0">
                <FaPhone className="me-2" /> +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>

        <hr className="bg-light mt-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-3">
          <p className="mb-2 mb-md-0 small text-center text-md-start">
            &copy; {new Date().getFullYear()} Mobile Appz. All Rights Reserved.
          </p>
          <Button
            variant="link"
            className="text-white p-0 align-self-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </Button>
        </div>
      </div>
    </footer>
  );
}
