import React, { useState, useEffect } from 'react'
import './Header.css'



export default function Header() {

    let [header, setHeader] = useState(false);
    let [toggleHead, setToggleHead] = useState(false);

    function toggleBtn() {
        setToggleHead(!toggleHead)
        }

    const changeNavToFixed = () => {
        if (window.scrollY > 80 ) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    }
    useEffect(() => {
    window.addEventListener('scroll', changeNavToFixed);
    })

    let y = ['header'];
    if (header) {
        y.push('header-fixed')
    }

    return (
        <>
            <div className={y.join(' ')}>
                <div className='container'>
                    <a href="/" className='logo-a'>
                    <div className='logo'>
                        <div className='circle'>
                            <i className="fas fa-link"></i>
                        </div>

                        <div className='my'>my<span className='urls'>urls</span></div>
                    </div>
                    </a>
                    
                    <div className='toggle-btn' onClick={toggleBtn}>
                        <i className="fas fa-bars"></i>
                    </div>

                    <div className={toggleHead ? 'main-menu-active' : 'main-menu'}>
                        <div className='menu'>
                            <ul>
                                <li><a href="/howWorks">How It Works</a></li>
                                <li><a href="/features">Features</a></li>
                            </ul>
                        </div>

                        <div className='signs'>
                            <ul>
                                <li><a href="/login" className='log-in'>Log In</a></li>
                                <li><a href="/signup" className='sign-up'>Sign Up</a></li>
                            </ul>
                        </div>

                        <div className='close' onClick={toggleBtn}>
                        <i className="far fa-window-close"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}