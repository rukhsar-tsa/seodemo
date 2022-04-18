import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
   <React.Fragment>
       {/* <h1>Contact</h1> */}
       <header id="identity">
        <div class="logo">
            <Link to="/" class="logo-link" rel="home"><img src="assets/assets/images/logo.png" class="logo" alt="" /></Link>
        </div>
    </header>
    <div id="site-menu">
        <nav class="nav-menu">
            <ul>
                <li class="menu-item"><Link to="/">Home</Link></li>
                <li class="menu-item"><Link to="/resume">Resume</Link></li>
                <li class="menu-item"><Link to="/portfolio">Portfolio</Link></li>
                <li class="menu-item menu-item-has-children"><Link to="/blog">Blog</Link>
                    <Link to="/" class="menu-expand mdi"></Link>
                    <ul class="sub-menu">
                        <li class="menu-item"><Link to="/post">Post</Link></li>
                        <li class="menu-item menu-item-has-children"> <Link to="#">Submenu - 1</Link>
                            <Link to="/" class="menu-expand mdi"></Link>
                            <ul class="sub-menu">
                                <li class="menu-item"><Link to="#">Submenu - 2</Link></li>
                                <li class="menu-item"><Link to="#">Submenu - 2</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="menu-item current-menu-item"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
    <div class="menu-overlay"></div>
    <div class="site-menu-toggle">
        <Link to="/contact" class="ti"> <span class="screen-reader-text">Toggle navigation</span> </Link>
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
    <div class="hero-media">
        <div class="owl-carousel" data-expand-duration="800">
            <div class="item owl-lazy" data-src="assets/images/slider.jpg"></div>
        </div> <span class="overlay"></span> <span class="ti ti-spin ti-loading"></span> </div>
    <div class="content-wrap">
        <div class="mccan page">
            <h3 class="title-small">LOCATION</h3>
            <h2 class="title">Contact Me</h2>
            <div class="content">
                <div class="row">
                    <div class="col-md-12">
                        <p>If you’d like to talk about a project, our work or anything else then get in touch.</p>
                        <div class="list">
                            <ul>
                                <li><strong>Phone :</strong> +1 123 000 4444</li>
                                <li><strong>Email :</strong> info@mccan.com</li>
                                <li><strong>Address :</strong> 2 Curiosity Way, San Mateo, CA 94403, US.</li>
                                <li><strong>Map :</strong> <Link to="#">via Google Maps</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="divider1"></div>
                <div class="row">
                    <div class="col-md-8">
                        <h6 class="mb-20"><strong>Get in touch</strong></h6>
                        <form method="post" class="contact__form" action="http://duruthemes.com/demo/html/mccan/light/mail.php">
                            <div class="row">
                                <div class="col-12">
                                    <div>
                                    {/* <div class="alert alert-success contact__msg" style="display: none" role="alert"> */}
                                        Your message was sent successfully.
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <input name="name" type="text" placeholder="Your Name *" required /> 
                                </div>
                                <div class="col-md-6 form-group">
                                    <input name="email" type="email" placeholder="Your Email *" required /> 
                                </div>
                                <div class="col-md-6 form-group">
                                    <input name="phone" type="text" placeholder="Your Number *" required /> 
                                </div>
                                <div class="col-md-6 form-group">
                                    <input name="subject" type="text" placeholder="Subject *" required /> 
                                </div>
                                <div class="col-md-12 form-group">
                                    <textarea name="message" id="message" cols="30" rows="4" placeholder="Message *" required></textarea>
                                </div>
                                <div class="col-md-12">
                                    <input name="submit" type="submit"  value="Send Message" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2022 <Link to="index.html">McCan</Link>. All Rights Reserved.</p>
        </div>
    </div>
    <div class="additional-menu-content">
        <h3 class="title-small">Web Designer</h3>
        <h2 class="title">Rory McCan</h2> <img src="assets/images/about.png" alt="" />
        <p>Hi, My name is Rory McCan. I am a Web Designer, and etiam accumsan scelerisque rhoncus. Nulla quis laoreet velit. Pelteqle quisu velleopha retra congue.</p> <Link to="#" class="btn ajax">Hire Me</Link>
        <div class="divider2"></div>
        <h3 class="title-small">@rorymccan</h3>
        <h2 class="title">Instagram</h2>
        <div class="sb-widget fl-wrap">
            <div class="insta-thumb">
                <Link to="#"><img src="assets/images/insta/01.jpg" alt="" /></Link>
                <Link to="#"><img src="assets/images/insta/02.jpg" alt="" /></Link>
                <Link to="#"><img src="assets/images/insta/03.jpg" alt="" /></Link>
                <Link to="#"><img src="assets/images/insta/04.jpg" alt="" /></Link>
                <Link to="#"><img src="assets/images/insta/05.jpg" alt="" /></Link>
                <Link to="#"><img src="assets/images/insta/06.jpg" alt="" /></Link>
            </div>
        </div>
    </div>
    
    <div class="my-info">
        <div class="box">
            <div class="field field-my-info field-separator">
                <h6>Location</h6>
                <p>California, USA</p>
            </div>
            <div class="field field-my-info field-separator">
                <h6>E-Mail</h6>
                <p>info@mccan.com</p>
            </div>
            <div class="field field-my-info field-separator">
                <h6>Phone</h6>
                <p>+1 123 000 4444</p>
            </div>
            <div class="clear"></div>
            <button type="submit" class="button-color"><span class="ti-download"></span> DOWNLOAD CV</button>
        </div>
    </div>
   </React.Fragment>
  )
}
