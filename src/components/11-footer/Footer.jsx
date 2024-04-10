import React from 'react';
import '../11-footer/footer.css'

const Footer = () => {
    return (
        <footer className="footer-w3ls text-center py-5">
            <div className="container pt-4">
                <div className="mx-auto" style={{ maxWidth: '600px' }}>
                    <a href="index.html" className="footer-logo py-1">
                        <i className="fas fa-bold"></i>.
                    </a>
                    <p className="mt-4 text-white">Itaque earum rerum hic tenetur asaItaque
                        earum rerum hic tenetur asap iente delectus ac elit in
                        coeiciendis maiores.</p>
                    <div className="social-icons-main mt-4 pb-3">
                        <ul className="social-icons3">
                            <li>
                                <a href="#facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#twitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#linkedinin">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#dribbble">
                                    <i className="fab fa-dribbble"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* copyright */}
                <p className="copy-right-w3 text-white mt-5 pt-4">© 2021 Biodata. All rights reserved | Design by
                    <a href="https://w3layouts.com" target="_blank"> W3layouts.</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;

