import '../1-header/header-style.css';
import image2 from './bicon.png';
import image from './moon.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Project from '../8-project/Project';

const Header = () => {
    const [activeNav, setActiveNav] = useState('#home');

    useEffect(() => {
        const handleScroll = () => {
            const qwerty = document.getElementById('qwerty');
            if (window.scrollY >= 200) {
                qwerty.classList.add("nav-colored");
                qwerty.classList.remove("nav-transparent");
            } else {
                qwerty.classList.add("nav-transparent");
                qwerty.classList.remove("nav-colored");
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [menuActive, setMenuActive] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [title, setTitle] = useState("Suff's Portfolio");

 

 

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
    document.title = newTitle;
    setMenuActive(false);
    setNavHidden(true); 
  };



    return (
        <header id='qwerty' className="fixed-header">
            <div className="container">
                <div className="nav">
                <a href="/" className="footer-logo py-1">
                        <i className="fas fa-bold"></i>.
                    </a>
                    <div className="hidden">
                        <section className="top-nav">
                            <input id="menu-toggle" type="checkbox" />
                            <label className='menu-button-container' htmlFor="menu-toggle">
                                <div className='menu-button'></div>
                            </label>
                            <ul className="menu">
                            <li><a href="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>Home</a></li>
                                <li><a href="about" className={activeNav === '/about' ? 'active' : ''}>About</a></li>
                                <li><a href="Skills" className={activeNav === '/Skills' ? 'active' : ''}>Skills</a></li>
                                <li><a href="Contact" className={activeNav === '/Contact' ? 'active' : ''}>Contact</a></li>
                                <li><a href="Project" className={activeNav === '/Project' ? 'active' : ''}>Projects</a></li>
                                <li><a href="Service" className={activeNav === '/Service' ? 'active' : ''}>Services</a></li>
                            </ul>
                        </section>
                    </div>
                    <div className="nav-bar">
                        <ul>
                        <li><a href="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>Home</a></li>
                                <li><a href="about" className={activeNav === '/about' ? 'active' : ''}>About</a></li>
                                <li><a href="Skills" className={activeNav === '/Skills' ? 'active' : ''}>Skills</a></li>
                                <li><a href="Contact" className={activeNav === '/Contact' ? 'active' : ''}>Contact</a></li>
                                <li><a href="Project" className={activeNav === '/Project' ? 'active' : ''}>Projects</a></li>
                                <li><a href="Service" className={activeNav === '/Service' ? 'active' : ''}>Services</a></li>
                        </ul>
                        <div className="form1">
                            <input type="search" placeholder="Enter Keyword..." className="first-top-right-blank" />
                            <button type="submit" className="first-top-right-search">Search</button>
                        </div>
                    </div>
                    <div className="icon-2"><img src={image} alt="Icon" /></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
