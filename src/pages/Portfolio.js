import React from 'react'
import { Helmet } from "react-helmet"; 

import { Link } from 'react-router-dom'

export default function Portfolio() {
  return (
    <React.Fragment>
         <Helmet>
        <title>Music Website</title>
        <meta
          name="description"
          content="Portfolio of Rukhsar Bano Shafeeque Ahmed Abdul Aziz"
        />
        <meta
          name="keywords"
          content="portfolio, webdeveloper,tsa, rukhsar's portfolio"
        />
      </Helmet>
         <header id="identity">
        <div className="logo">
            <Link to="/" className="logo-link" rel="home"><img src="assets/images/logo.png" className="logo" alt="" /> </Link>
        </div>
    </header>
    <div id="site-menu">
        <nav className="nav-menu">
            <ul>
                <li className="menu-item"><Link to="/">Home</Link></li>
                <li className="menu-item"><Link to="/resume">Resume</Link></li>
                <li className="menu-item current-menu-item"><Link to="/portfolio">Portfolio</Link></li>
                <li className="menu-item menu-item-has-children"><Link to="/blog">Blog</Link>
                    <Link to="/#" className="menu-expand mdi"></Link>
                    <ul className="sub-menu">
                        <li className="menu-item"><Link to="/post">Post</Link></li>
                        <li className="menu-item menu-item-has-children"> <Link to="#">Submenu - 1</Link>
                            <Link to="/#" className="menu-expand mdi"></Link>
                            <ul className="sub-menu">
                                <li className="menu-item"><Link to="#">Submenu - 2</Link></li>
                                <li className="menu-item"><Link to="#">Submenu - 2</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="menu-item"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
    <div className="menu-overlay"></div>
    <div className="site-menu-toggle">
        <Link to="/about#site-menu" className="ti"> <span className="screen-reader-text">Toggle navigation</span> </Link>
    </div>
    <div id="social-profiles">
    <nav className="social-menu">
            <ul>
                <li className="menu-item"><a href="http://facebook.com/" rel="noreferrer" target="_blank"><span className="ti"></span></a></li>
                <li className="menu-item"><a href="http://twitter.com/" rel="noreferrer" target="_blank"><span className="ti"></span></a></li>
                <li className="menu-item"><a href="http://instagram.com/" rel="noreferrer" target="_blank"><span className="ti"></span></a></li>
            </ul>
        </nav>
    </div>
    <div className="hero-media">
        <div className="owl-carousel" data-expand-duration="800">
            <div className="item owl-lazy" data-src="assets/images/slider.jpg"></div>
        </div> <span className="overlay"></span> <span className="ti ti-spin ti-loading"></span> </div>
    <div className="content-wrap clearfix">
        <div className="mccan page">
            <h3 className="title-small">Take A Look At</h3>
            <h2 className="title">Projects</h2>
            <div className="content">
                <div className="grid-container">
                    <div className="grid-column">
                        <div className="row">
                            <div className="col-md-6">
                                <Link to="/projects" className="desc">
                                    <div className="project"> <img src="assets/images/portfolio/02.jpg" className="img-fluid" alt="" />
                                        <div className="desc">
                                            <div className="con">
                                                <h3>Project 01</h3> <span>Box Mockup, Branding</span> </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="/projects" className="desc">
                                    <div className="project"> <img src="assets/images/portfolio/05.jpg" className="img-fluid" alt="" />
                                        <div className="desc">
                                            <div className="con">
                                                <h3>Project 02</h3> <span>Book Cover, Branding</span> </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="/projects" className="desc">
                                    <div className="project"> <img src="assets/images/portfolio/07.jpg" className="img-fluid" alt="" />
                                        <div className="desc">
                                            <div className="con">
                                                <h3>Project 03</h3> <span>Clock, Graphic Design</span> </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="/projects" className="desc">
                                    <div className="project"> <img src="assets/images/portfolio/01.jpg" className="img-fluid" alt="" />
                                        <div className="desc">
                                            <div className="con">
                                                <h3>Project 04</h3> <span>Logo, Branding Desing</span> </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="/projects" className="desc">
                                    <div className="project"> <img src="assets/images/portfolio/08.jpg" className="img-fluid" alt="" />
                                        <div className="desc">
                                            <div className="con">
                                                <h3>Project 05</h3> <span>Book Cover, Branding</span> </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="/projects" className="desc">
                                    <div className="project"> <img src="assets/images/portfolio/03.jpg" className="img-fluid" alt="" />
                                        <div className="desc">
                                            <div className="con">
                                                <h3>Project 06</h3> <span>Catalog, Branding</span> </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="/projects" className="desc">
                                    <div className="project"> <img src="assets/images/portfolio/06.jpg" className="img-fluid" alt="" />
                                        <div className="desc">
                                            <div className="con">
                                                <h3>Project 07</h3> <span>Tomongkol, Branding</span> </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="/projects" className="desc">
                                    <div className="project"> <img src="assets/images/portfolio/04.jpg" className="img-fluid" alt="" />
                                        <div className="desc">
                                            <div className="con">
                                                <h3>Project 08</h3> <span>Box Mockup, Branding</span> </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>&copy; 2022 <Link to="/">McCan</Link>. All Rights Reserved.</p>
        </div>
    </div>
    
    <div className="additional-menu-content">
        <h3 className="title-small">Web Designer</h3>
        <h2 className="title">Rory McCan</h2> <img src="assets/images/about.png" alt="" />
        <p>Hi, My name is Rory McCan. I am a Web Designer, and etiam accumsan scelerisque rhoncus. Nulla quis laoreet velit. Pelteqle quisu velleopha retra congue.</p> <Link to="#" className="btn ajax">Hire Me</Link>
        <div className="divider2"></div>
        <h3 className="title-small">@rorymccan</h3>
        <h2 className="title">Instagram</h2>
        <div className="sb-widget fl-wrap">
            <div className="insta-thumb">
                <Link to="#"><img src="assets/images/insta/01.jpg" alt="" /></Link>
                <Link to="#"><img src="assets/images/insta/02.jpg" alt="" /></Link>
                <Link to="#"><img src="assets/images/insta/03.jpg" alt="" /></Link>
                <Link to="#"><img src="assets/images/insta/04.jpg" alt="" /></Link>
                <Link to="#"><img src="assets/images/insta/05.jpg" alt="" /></Link>
                <Link to="#"><img src="assets/images/insta/06.jpg" alt="" /></Link>
            </div>
        </div>
    </div>
    
    <div className="my-info">
        <div className="box">
            <div className="field field-my-info field-separator">
                <h6>Location</h6>
                <p>California, USA</p>
            </div>
            <div className="field field-my-info field-separator">
                <h6>E-Mail</h6>
                <p>info@mccan.com</p>
            </div>
            <div className="field field-my-info field-separator">
                <h6>Phone</h6>
                <p>+1 123 000 4444</p>
            </div>
            <div className="clear"></div>
            <button type="submit" className="button-color"><span className="ti-download"></span> DOWNLOAD CV</button>
        </div>
    </div>
    </React.Fragment>
  )
}
