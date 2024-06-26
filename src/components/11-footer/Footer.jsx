import React from "react";
import "../11-footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer text-center py-5">
      <div className="container pt-4">
        <div className="mx-auto" style={{ maxWidth: "600px" }}>
          <a href="/" class="footer-logo py-1">
            <span class="icon-stylistic">MFK</span>
          </a>
          <p className="mt-4 text-white">
            Itaque earum rerum hic tenetur asaItaque earum rerum hic tenetur
            asap iente delectus ac elit in coeiciendis maiores.
          </p>
          <div className="social-icons-main mt-4 pb-3">
            <ul className="social-icons3">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=en #twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mohammed-faisal-khan-911a01245/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/mdfaiskhan">
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* copyright */}
        <p className="copy-right-w3 text-white mt-5 pt-4">
          © 2024 | Design by Mohammed Faisal khan.
          {/* <a href="https://w3layouts.com" target="_blank"> Mohammed Faisal khan.</a> */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
