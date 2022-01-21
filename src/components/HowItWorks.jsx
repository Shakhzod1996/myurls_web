import React, {  useState, useEffect } from 'react'
import './HowItWorks.css'
import Vawe from '../assets/purole.svg';
import Ph1 from '../assets/ph1.png';
import Ph2 from '../assets/ph2.png';
import Ph3 from '../assets/ph3.png';



export default function HowItWorks() {
    
    let [headPad, setHeadPad] = useState(false)

    const func = () => {
        if (window.scrollY > 80) {
            setHeadPad(true);
        } else {
            setHeadPad(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', func)
    })

    let pad = ['pad-zero'];
    if (headPad) {
        pad.push('pad-top')
    }

    return (
        <div className={pad.join(' ')}>
            <div className='how-works-container'>
                <div className='how-works1'>
                    <h1>How It Works</h1>
                    <p>Our universal link provides your followers access to all of your content <br />
                    in one place, giving you the freedom to share more.</p>

                    <div className='how-works-grid'>
                        <div className='how-works-gr-content'>
                            <img src={Ph1} alt="ph1" />
                            <div className='number'>1</div>
                            <h3>Create your myurls account</h3>
                            <p>Choose a username, customize your profile, 
                            and add your links.</p>
                        </div>

                        <div className='how-works-gr-content'>
                            <img src={Ph2} alt="ph2" />
                            <div className='number'>2</div>
                            <h3>Get more out of your “link in bio”</h3>
                            <p>Copy your link and use it across any social platform.</p>
                            <p className='span-con'>7,472 people have signed up this week!</p>
                        </div>

                        <div className='how-works-gr-content'>
                            <img src={Ph3} alt="ph3" />
                            <div className='number'>3</div>
                            <h3>Share more of your content</h3>
                            <p>Give your followers access to more with one powerful link.</p>
                        </div>
                    </div>
                </div>

                <div className='height'></div>

                <div className='links'>
                    <div className='links-h1'>
                        <h1>Your Links. Your Content.</h1>
                        <p>Add a link from any platform. Below are some of our favorites.</p>
                    </div>

                    <ul className='links-ul'>
                        <li><a href="/"><i className="fab fa-amazon"></i> Amazon</a></li>
                        <li><a href="/"><i className="fab fa-amazon-pay"></i> Amino Apps</a></li>
                        <li><a href="/"><i className="fas fa-anchor"></i> Anchor</a></li>
                        <li><a href="/"><i className="fab fa-apple"></i> Apple App Store</a></li>
                        <li><a href="/"><i className="fas fa-music"></i> Apple Music</a></li>
                        <li><a href="/"><i className="fas fa-podcast"></i> Apple Podcast</a></li>
                        <li><a href="/"><i className="fas fa-volume-up"></i> Audiomack</a></li>
                        <li><a href="/"><i className="fab fa-bandcamp"></i> BandCamp</a></li>
                        <li><a href="/"><i className="fas fa-star-and-crescent"></i> BeatStars</a></li>
                        <li><a href="/"><i className="fab fa-bimobject"></i> Behance</a></li>
                        <li><a href="/"><i className="fab fa-amazon"></i> Amazon</a></li>
                        <li><a href="/"><i className="fab fa-amazon-pay"></i> Amino Apps</a></li>
                        <li><a href="/"><i className="fas fa-anchor"></i> Anchor</a></li>
                        <li><a href="/"><i className="fab fa-apple"></i> Apple App Store</a></li>
                        <li><a href="/"><i className="fas fa-music"></i> Apple Music</a></li>
                        <li><a href="/"><i className="fas fa-podcast"></i> Apple Podcast</a></li>
                        <li><a href="/"><i className="fas fa-volume-up"></i> Audiomack</a></li>
                        <li><a href="/"><i className="fab fa-bandcamp"></i> BandCamp</a></li>
                        <li><a href="/"><i className="fas fa-star-and-crescent"></i> BeatStars</a></li>
                        <li><a href="/"><i className="fab fa-bimobject"></i> Behance</a></li><li><a href="/"><i class="fab fa-amazon"></i> Amazon</a></li>
                        <li><a href="/"><i className="fab fa-amazon-pay"></i> Amino Apps</a></li>
                        <li><a href="/"><i className="fas fa-anchor"></i> Anchor</a></li>
                        <li><a href="/"><i className="fab fa-apple"></i> Apple App Store</a></li>
                        <li><a href="/"><i className="fas fa-music"></i> Apple Music</a></li>
                        <li><a href="/"><i className="fas fa-podcast"></i> Apple Podcast</a></li>
                        <li><a href="/"><i className="fas fa-volume-up"></i> Audiomack</a></li>
                        <li><a href="/"><i className="fab fa-bandcamp"></i> BandCamp</a></li>
                        <li><a href="/"><i className="fas fa-star-and-crescent"></i> BeatStars</a></li>
                        <li><a href="/"><i className="fab fa-bimobject"></i> Behance</a></li><li><a href="/"><i class="fab fa-amazon"></i> Amazon</a></li>
                        <li><a href="/"><i className="fab fa-amazon-pay"></i> Amino Apps</a></li>
                        <li><a href="/"><i className="fas fa-anchor"></i> Anchor</a></li>
                        <li><a href="/"><i className="fab fa-apple"></i> Apple App Store</a></li>
                        <li><a href="/"><i className="fas fa-music"></i> Apple Music</a></li>
                        <li><a href="/"><i className="fas fa-podcast"></i> Apple Podcast</a></li>
                        <li><a href="/"><i className="fas fa-volume-up"></i> Audiomack</a></li>
                        <li><a href="/"><i className="fab fa-bandcamp"></i> BandCamp</a></li>
                        <li><a href="/"><i className="fas fa-star-and-crescent"></i> BeatStars</a></li>
                        <li><a href="/"><i className="fab fa-bimobject"></i> Behance</a></li>

                    </ul>
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

