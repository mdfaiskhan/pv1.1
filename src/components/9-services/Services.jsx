import React from 'react';
import '../9-services/Services.css'

const Services = () => {
  return (
    <section className="services py-5" id="services">
        <div className="container py-md-5 py-4">
            <div className="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 className="title-small mb-1">What i do?</h5>
                <h3 className="title-style">How I can help your next project</h3>
            </div>
            <div className="services-grids py-lg-4">
                <div className="fea-gd-vv row">
                    <div className="col-lg-3 col-md-6">
                        <div className="feature-gd icon-yellow">
                            <div className="icon">
                                <i className="fas fa-laptop"></i>
                            </div>
                            <div className="icon-info">
                                <a href="/">Web design<br/> and development </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                        <div className="feature-gd icon-vilot">
                            <div className="icon">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <div className="icon-info">
                                <a href="/">Mobile app<br/> development</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-md-5 mt-4">
                        <div className="feature-gd icon-blue">
                            <div className="icon">
                                <i className="fab fa-android"></i>
                            </div>
                            <div className="icon-info">
                                <a href="/">Android app<br/> development</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-md-5 mt-4">
                        <div className="feature-gd icon-red">
                            <div className="icon">
                                <i className="fab fa-php"></i>
                            </div>
                            <div className="icon-info">
                                <a href="/">Php Web<br/> development</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-md-5 mt-4">
                        <div className="feature-gd icon-light-green">
                            <div className="icon">
                                <i className="fab fa-apple"></i>
                            </div>
                            <div className="icon-info">
                                <a href="/">iOS App<br/> development </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-md-5 mt-4">
                        <div className="feature-gd icon-light-blue">
                            <div className="icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="icon-info">
                                <a href="/">JQuery & Java<br/> programming</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-md-5 mt-4">
                        <div className="feature-gd icon-dark-green">
                            <div className="icon">
                                <i className="fas fa-link"></i>
                            </div>
                            <div className="icon-info">
                                <a href="/">Blockchain<br/> development</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-md-5 mt-4">
                        <div className="feature-gd icon-pink">
                            <div className="icon">
                                <i className="fas fa-code-branch"></i>
                            </div>
                            <div className="icon-info">
                                <a href="/">.net program<br/> development</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <a href="services.html" className="btn btn-style">Learn More</a>
            </div>
        </div>
    </section>
  );
}

export default Services;
