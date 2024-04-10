import React from 'react';
import '../4-exp/exp.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Exp = () => {
  return (
    <>
      <section className="w3l-bottom-grids-6 pt-sm-5 pb-5" id="features">
        <div className="container pt-lg-4">
          <div className="grids-area-hny main-cont-wthree-fea row">
            <div className="col-md-3 col-sm-4 ps-xl-5">
              <h4 className="ab-exper-count mb-sm-4 ps-lg-4" id='qwe'>22</h4>
              <p className="ab-content ps-lg-4" id='qwer'>years of experience working</p>
            </div>
            <div className="col-xl-8 col-md-9 col-sm-8 offset-xl-1 ps-xl-0 pe-xl-5 mt-sm-0 mt-4">
              <h3 className="title-style mb-sm-5 mb-4">I'm a designer & developer with a passion for web design</h3>
              <div className="row">
                <div className="col-lg-4 col-md-6 grids-feature">
                  <div className="area-box active">
                    <div className="icon-style">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <h4><a href="#feature" className="title-head">Creative Design</a></h4>
                    <a href="about.html" className="btn more p-0">Explore More<i
                      className="fas fa-long-arrow-alt-right ms-1"></i></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
                  <div className="area-box">
                    <div className="icon-style">
                      <i className="fas fa-laptop-code"></i>
                    </div>
                    <h4><a href="#feature" className="title-head">Web Design</a></h4>
                    <a href="about.html" className="btn more p-0">Explore More<i
                      className="fas fa-long-arrow-alt-right ms-1"></i></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
                  <div className="area-box">
                    <div className="icon-style">
                      <i className="fas fa-layer-group"></i>
                    </div>
                    <h4><a href="#feature" className="title-head">Brand Identity</a></h4>
                    <a href="about.html" className="btn more p-0">Explore More<i
                      className="fas fa-long-arrow-alt-right ms-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}></div>
    </>
  );
};

export default Exp;
