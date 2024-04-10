import '../1-header/header-style.css'; // Import your CSS file here
import  image2 from './bicon.png'
import  image from './moon.png'
import React, { useState } from 'react';

const Header = () => {
    const [activeNav, setActiveNav] = useState('#home');
    return (
        <header className="fixed-header">
            <div className="container">
                <div className="nav">
                    <div className="icon"><a href="/"><img src={image2} /></a></div>
                    <div className="hidden">
                        <section className="top-nav">
                            <input id="menu-toggle" type="checkbox" />
                            <label className='menu-button-container' htmlFor="menu-toggle">
                                <div className='menu-button'></div>
                            </label>
                            <ul className="menu">
                            <li><a href="/" onClick={()=> setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>Home</a></li>
                            <li><a href="#about" className={activeNav === '/About' ? 'active' : ''}>MyIntro</a></li>
                            <li><a href="#features">Services</a></li>
                            <li><a href="#second-page">Pages</a></li>
                            <li><a href="#contact">Contact</a></li>
                            </ul>
                        </section>
                    </div>
                    <div className="nav-bar">
                        <ul>
                        <li><a href="/" onClick={()=> setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>Home</a></li>
                            <li><a href="#about" className={activeNav === '/About' ? 'active' : ''}>MyIntro</a></li>
                            <li><a href="#features">Services</a></li>
                            <li><a href="#second-page">Pages</a></li>
                            <li><a href="#contact">Contact</a></li>
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
