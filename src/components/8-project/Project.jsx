import React from 'react';
import f from '../8-project/g1.jpg';
import a from '../8-project/g2.jpg';
import i from '../8-project/g3.jpg';
import s from '../8-project/g4.jpg';
import l from '../8-project/g5.jpg';
import k from '../8-project/g6.jpg';
import './Project.css';

const Project = () => {
  return (
    <>
      <section className="Project pb-5" >
        <div className="container py-md-5 py-4">
          <div className="title-heading-w3 text-center mb-sm-5 mb-4">
            <h5 className="title-small mb-1">Portfolio</h5>
            <h3 className="title-style">Some of my most recent projects</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 item">
              <a href={f} data-lightbox="example-set" data-title="Project 1" className="zoom d-block">
                <img className="card-img-bottom d-block" src={f} alt="Card image cap"></img>
                <span className="overlay__hover"></span>
                <span className="hover-content">
                <span className="main">Project 1</span>
                  <span className="down"><br />Quisque ut lectus, eros et, sed commodo risus.</span>
                </span>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 item mt-md-0 mt-4">
              <a href={a} data-lightbox="example-set" data-title="Project 2" className="zoom d-block">
                <img className="card-img-bottom d-block" src={a} alt="Card image cap"></img>
                <span className="overlay__hover"></span>
                <span className="hover-content">
                  <span className="main">Project 2</span>
                  <span className="down"><br />Quisque ut lectus, eros et, sed commodo risus.</span>
                </span>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 item mt-lg-0 mt-4">
              <a href={i} data-lightbox="example-set" data-title="Project 3" className="zoom d-block">
                <img className="card-img-bottom d-block" src={i} alt="Card image cap"></img>
                <span className="overlay__hover"></span>
                <span className="hover-content">
                <span className="main">Project 3</span>
                  <span className="down"><br />Quisque ut lectus, eros et, sed commodo risus.</span>
                </span>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 item mt-4 pt-lg-2">
              <a href={s} data-lightbox="example-set" data-title="Project 4" className="zoom d-block">
                <img className="card-img-bottom d-block" src={s} alt="Card image cap"></img>
                <span className="overlay__hover"></span>
                <span className="hover-content">
                <span className="main">Project 4</span>
                  <span className="down"><br />Quisque ut lectus, eros et, sed commodo risus.</span>
                </span>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 item mt-4 pt-lg-2">
              <a href={l} data-lightbox="example-set" data-title="Project 5" className="zoom d-block">
                <img className="card-img-bottom d-block" src={l} alt="Card image cap"></img>
                <span className="overlay__hover"></span>
                <span className="hover-content">
                <span className="main">Project 5</span>
                  <span className="down"><br />Quisque ut lectus, eros et, sed commodo risus.</span>
                </span>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 item mt-4 pt-lg-2">
              <a href={k} data-lightbox="example-set" data-title="Project 6" className="zoom d-block">
                <img className="card-img-bottom d-block" src={k} alt="Card image cap"></img>
                <span className="overlay__hover"></span>
                <span className="hover-content">
                <span className="main">Project 6</span>
                  <span className="down"><br />Quisque ut lectus, eros et, sed commodo risus.</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
