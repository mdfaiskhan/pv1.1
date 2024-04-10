import React from 'react';
import '../1-header/header-style.css'; // Import your CSS file here
import  image2 from './bicon.png'
import  image from './moon.png'

const Header = () => {
    return (
        <header className="fixed-header">
            <div className="container">
                <div className="nav">
                    <div className="icon"><img src={image2} /></div>
                    <div className="hidden">
                        <section className="top-nav">
                            <input id="menu-toggle" type="checkbox" />
                            <label className='menu-button-container' htmlFor="menu-toggle">
                                <div className='menu-button'></div>
                            </label>
                            <ul className="menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">MyIntro</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Pages</a></li>
                            <li><a href="#">Contact</a></li>
                            </ul>
                        </section>
                    </div>
                    <div className="nav-bar">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">MyIntro</a></li>
                            <li><a href="services">Services</a></li>
                            <li><a href="pages">Pages</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                        <div className="form1">
                            <input type="search" placeholder="Enter Keyword..." className="first-top-right-blank" />
                            <button type="submit" className="first-top-right-search">Search</button>
                        </div>
                    </div>
                    <div className="icon-2"><img src={image} /></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
