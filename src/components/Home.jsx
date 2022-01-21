import React, { useState, useEffect } from 'react';
import Phone from '../assets/zeropng.jpg'
import firstImg from '../assets/firstpng.svg';
import GirlImg from '../assets/girl.jpg';
import PerImg from '../assets/secondpng.svg';
import LeftImg from '../assets/left-phone1.jpg';
import LeftImg2 from '../assets/left-phone2.jpg';
import LastHome from '../assets/last-home.svg';
import Vawe from '../assets/purole.svg';
import './Home.css'



export default function Home() {
    let [padTop, setPadTop] = useState(false);


    const changePadding = () => {
        if (window.scrollY > 80) {
            setPadTop(true);
        } else {
            setPadTop(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changePadding);
    })


    let pad = ['home'];
    if (padTop) {
        pad.push('home-padding')
    }
    return (
        <div className={pad.join(' ')} >
            <div className='home-container'>
                <div className="home-grid">
                    <div className="left-grid">
                        <div className='left-gr-content'>
                            <h1>Now, you only need one link. </h1>
                            <p>Share more with your followers in a single click.
                                Myurls makes it easy to link to all of your content in one place.</p>

                            <a href="/">Use myurls for Free</a> <br />

                            <div className="span">
                                <span>5,645 people have signed up this week!</span>
                            </div>
                        </div>
                    </div>

                    <div className="right-grid">
                        <div className='right-gr-content'>
                            <img src={Phone} alt="phone" />
                            <img src={GirlImg} alt="girl" className='girl' />

                            <ul className='social-absolute'>
                                <li><i className="fab fa-bandcamp"></i> BandCamp</li>
                                <li><i className="fab fa-github"></i>Github</li>
                                <li><i className="fab fa-app-store"></i>Google App Store</li>
                                <li><i className="fab fa-soundcloud"></i>Sound Cloud</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className='handle'>
                    <h1>Get your myurls handle</h1>
                    <p>Enter your username below to claim your link.</p>
                    <div className='handle-input'>
                        <div className='sec-circle'><i className="fas fa-link"></i></div>
                        <input type="text" value='myurls.co/' />
                    </div>
                </div>

                <div className='use'>
                    <div className="use-container">
                        <div className='use-grid'>
                            <div className='left-use'>
                                <div className="left-use-content">
                                    <h1>Use Anywhere</h1>
                                    <p>Share all of your content, everywhere.
                                        There is no limit to where your myurls link can be used.</p>
                                </div>

                            </div>

                            <div className='right-use'>
                                <div className='shape'>
                                    <img src={firstImg} alt="" className='one' />
                                </div>

                                <div className='use-links'>
                                    <ul>
                                        <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="/"><i className="fab fa-telegram-plane"></i></a></li>
                                        <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="/"><i className="fab fa-viber"></i></a></li>
                                        <li><a href="/"><i className="fab fa-whatsapp"></i></a></li>
                                        <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                    <div className='handle-input inp'>
                                        <div className='sec-circle'><i className="fas fa-link"></i></div>
                                        <input type="text" value='myurls.co/' />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="personalize">
                    <div className="personalize-grid">
                        <div className="left-pers" id='item1'>
                            <img src={PerImg} alt="perImg" />


                            <div className='perspective'>
                                <div className='phone1'>
                                    <div>
                                        <div className='imgd'>
                                            <img src={LeftImg} alt="leftimg" />
                                        </div>

                                        <h3>Sean</h3>
                                        <span><i className="fas fa-map-marker-alt"></i>Los Angeles|New York</span>
                                        <div className='pp'>
                                            <p className='first-p'><i className="fas fa-map-marker-alt"></i>Entrepreneur</p>
                                            <p> <i className="fas fa-dolly-flatbed"></i>Investor</p>
                                        </div>

                                        <ul className='social-lins'>
                                            <li><i className="fab fa-bandcamp"></i> BandCamp</li>
                                            <li><i className="fab fa-github"></i>Github</li>
                                            <li><i className="fab fa-app-store"></i>Google App Store</li>
                                            <li><i className="fab fa-soundcloud"></i>Sound Cloud</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className='perspective2'>
                                <div className='phone2'>
                                    <div>
                                        <div className='imgd'>
                                            <img src={LeftImg2} alt="leftimg" />
                                        </div>

                                        <h3>Sean</h3>
                                        <span><i className="fas fa-map-marker-alt"></i>Los Angeles|New York</span>
                                        <div className='pp'>
                                            <p className='first-p'><i className="fas fa-map-marker-alt"></i>Entrepreneur</p>
                                            <p> <i className="fas fa-dolly-flatbed"></i>Investor</p>
                                        </div>

                                        <ul className='social-lins2'>
                                            <li><i className="fab fa-bandcamp"></i> BandCamp</li>
                                            <li><i className="fab fa-github"></i>Github</li>
                                            <li><i className="fab fa-app-store"></i>App Store</li>
                                            <li><i className="fab fa-soundcloud"></i>Sound Cloud</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-pers" id='item2'>
                            <h1>Personalize Your Profile</h1>

                            <p>Make your profile as unique as you are.
                                Customize colors, fonts, background images, and more.</p>
                        </div>
                    </div>
                </div>

                <div className='analytics'>
                    <div className='analytics-grid'>
                        <div className="left-anal">
                            <div className='left-a-content'>
                                <h1>Get Real-Time Analytics</h1>

                                <p>Track profile views and individual
                                    link clicks to see what content your audience is most interested in.</p>
                            </div>

                        </div>

                        <div className='right-anal'>
                            <img src={LastHome} alt="last-home" />
                            <div className='s-link2 l1'>
                                <i className="fab fa-youtube"></i>
                                <p>752</p>
                            </div>

                            <div className='s-link2 l2'>
                                <i className="fab fa-facebook"></i>
                                <p>342</p>
                            </div>

                            <div className='s-link2 l3'>
                                <i className="fab fa-instagram"></i>
                                <p>54</p>
                            </div>

                            <div className='s-link2 l4'>
                                <i className="fab fa-linkedin"></i>
                                <p>801</p>
                            </div>

                            <div className='s-link2 l5'>
                                <i className="fab fa-twitter"></i>
                                <p>620</p>
                            </div>

                            <div className='s-link2 l6'>
                                <i className="fab fa-viber"></i>
                                <p>165</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='not-seeing'>
                    <h1>Not seeing everything you want? <br /> View the rest of our <a href="/features">features</a></h1>
                </div>
            </div>

            <div className='join'>
                <img src={Vawe} alt="vawe" />

                <div className='community-center'>
                    <h1>Join the myurls community today</h1>
                    <p className='fpp'>Join the thousands of users who use myurls
                        to help their followers discover all of their content.</p>

                    <a href="/" className='use-a'>Use myurls for Free</a>
                    <p className='num'>6,896 people have signed up this week!</p>

                    <div className="footer">
                        <ul>
                            <li><a href="/howWorks">How it works</a></li>
                            <li><a href="/features">Features</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/terms">Terms of Services</a></li>
                            <li><a href="/privacy">Privance Policy</a></li>
                        </ul>
                    </div>
                    <p className='copy'>Copyright © 2022 myurls. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}
