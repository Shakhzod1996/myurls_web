import React, { useState, useEffect} from 'react';
import './Features.css';
// img 
import rightFirstSvg from '../assets/right-feature1.svg';
import rightFirstPng from '../assets/right-feature-png1.png';
import reallyFirstSvg from '../assets/relfirst.svg';
import reallyFirstJpg from '../assets/relfirst.jpg';
import Vawe from '../assets/purole.svg'



export default function Features() {

    let [padTop, SetPadTop] = useState(false);

    const changePadding = () => {
        if (window.scrollY > 80) {
            SetPadTop(true);
        } else {
            SetPadTop(false);
        }
    }

    let y = ['features'];

    if (padTop) {
        y.push('features-pad')
    }

    useEffect(() => {
        window.addEventListener('scroll', changePadding);
    })
    return (
        <div className={y.join(' ')}>
            <div className="features-container">
                <div className='features-heading'>
                    <h1>Features</h1>
                    <p>More power in one link.</p>
                </div>

                <div className='features-first-grid'>
                    <div className="feature-left-grid" id='first'>
                        <div className='fe-left-content'>
                            <h2>Single Link <br /> Multiple Destinations</h2>
                            <p>Unleash the power to share more content than ever before. 
                            Link your Facebook, Instagram, personal website, merch store,
                            or any project you may be working on all in one place. 
                            You’ll never have to decide which URL to put in your bio again.</p>
                        </div>
                    </div>

                    <div className='feature-right-grid' id='second'>
                        <div className='fe-right-content'>
                            <div className='img-div'>
                            <img src={rightFirstSvg} alt="svg" />
                            </div>

                            <div className='img-div2'>
                            <img src={rightFirstPng} alt="png" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='featured-second-grid'>
                    <div className='re-left'>
                        <img className='re-img1' src={reallyFirstSvg} alt="svg" />
                        <img className='re-img2' src={reallyFirstJpg} alt="png" />
                    </div>

                    <div className='rel-right'>
                        <h2>Real-Time Analytics</h2>
                        <p>Maximize your growth potential by tracking 
                        profile views and individual link clicks. 
                        With insight into the performance of your profile, 
                        discover which links your audience is interested in.</p>
                    </div>
                </div>

                <div className='features-first-grid'>
                    <div className="feature-left-grid">
                        <div className='fe-left-content'>
                            <h2>Single Link <br /> Multiple Destinations</h2>
                            <p>Unleash the power to share more content than ever before. 
                            Link your Facebook, Instagram, personal website, merch store,
                            or any project you may be working on all in one place. 
                            You’ll never have to decide which URL to put in your bio again.</p>
                        </div>
                    </div>

                    <div className='feature-right-grid'>
                        <div className='fe-right-content'>
                            <div className='img-div'>
                            <img src={rightFirstSvg} alt="svg" className='im' />
                            </div>

                            <div className='img-div2'>
                            <img src={rightFirstPng} alt="png" className='im2' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='featured-second-grid'>
                    <div className='re-left'>
                        <img className='re-img1' src={reallyFirstSvg} alt="svg" />
                        <img className='re-img2' src={reallyFirstJpg} alt="png" />
                    </div>

                    <div className='rel-right'>
                        <h2>Real-Time Analytics</h2>
                        <p>Maximize your growth potential by tracking 
                        profile views and individual link clicks. 
                        With insight into the performance of your profile, 
                        discover which links your audience is interested in.</p>
                    </div>
                </div>

                <div className='features-first-grid'>
                    <div className="feature-left-grid">
                        <div className='fe-left-content'>
                            <h2>Single Link <br /> Multiple Destinations</h2>
                            <p>Unleash the power to share more content than ever before. 
                            Link your Facebook, Instagram, personal website, merch store,
                            or any project you may be working on all in one place. 
                            You’ll never have to decide which URL to put in your bio again.</p>
                        </div>
                    </div>

                    <div className='feature-right-grid'>
                        <div className='fe-right-content'>
                            <div className='img-div'>
                            <img src={rightFirstSvg} alt="svg" className='img1' />
                            </div>

                            <div className='img-div2'>
                            <img src={rightFirstPng} alt="png" className='img2' />
                            </div>
                        </div>
                    </div>
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

