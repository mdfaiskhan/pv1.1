import React from 'react';
import faisal from '../5-about/pic2.jpeg'
import '../5-about/about.css'
import RS from '../5-about/resume.pdf'




const About = () => {
    return (
        <section className="w3l-aboutblock1 pt-lg-5 pt-2 pb-5" id="about">
            <div className="container py-md-5 py-4">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="position-relative">
                            <img src={faisal} alt="" className="radius-image img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-8 ps-lg-5 mt-lg-0 mt-5">
                        <h5 className="title-small mb-1">My Intro</h5>
                        <h3 className="title-style">About Me</h3>
                        <p className="mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                            ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur
                            adipisicing
                            elit. Non quae, fugiat consequatur voluptatem nihil ad. Lorem ipsum dolor sit amet.</p>
                        <div className="my-info mt-md-5 mt-4">
                            <ul className="single-info">
                                <li className="name-style">Name</li>
                                <li>:</li>
                                <li>
                                    <p>Mary Ateer</p>
                                </li>
                            </ul>
                            <ul className="single-info">
                                <li className="name-style">Age</li>
                                <li>:</li>
                                <li>
                                    <p>26 Years</p>
                                </li>
                            </ul>
                            <ul className="single-info">
                                <li className="name-style">From</li>
                                <li>:</li>
                                <li>
                                    <p>London, UK</p>
                                </li>
                            </ul>
                            <ul className="single-info">
                                <li className="name-style">Email</li>
                                <li>:</li>
                                <li>
                                    <p><a href="/cdn-cgi/l/email-protection#6b060a19120a1f0e0e192b060a020745080406"><span className="__cf_email__" data-cfemail="d0bdb1a2a9b1a4b5b5a290bdb1b9bcfeb3bfbd">[email&#160;protected]</span></a></p>
                                </li>
                            </ul>
                        </div>
                        <a href={RS} download className="btn btn-style mt-5">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

