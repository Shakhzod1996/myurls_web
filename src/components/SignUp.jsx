import React from 'react';
import './LogIn.css';
import './SignUp.css'

export default function SignUp() {
    return (
        <div className='sing-main'>
            <div className='sign-container'>
                <div className='m-b'>
                    <a href="/" className='a-first'>
                        <div className='circle-1'><i className="fas fa-link"></i></div>
                        <p className='myurls'>my<span>urls</span></p>
                    </a>
                </div>

                <div className='login-main'>
                    <h2>Sign Up</h2>

                    <hr />

                    <form action="#">
                        <div className='block'>
                
                        <label htmlFor='email' >Email</label><br />
                        <input type="email" placeholder='enter your email' id='email' required/><br />

                        <label htmlFor="password" className='pas'>Password</label><br />
                        <input type="password" id='password' placeholder='enter something secretive' required />

                        <label htmlFor="username">Username</label>
                        <div className='user'><p>myurls.co/</p><input type="text" id='username' placeholder='SHakh.Muradov' required /></div>

                        <div className='clicking'>
                            <p>By clicking, you agrre to our <a href="/privacy">Privacy Policy</a>  and <a href="/terms">Terms of Services</a></p>
                        </div>

                        <hr className='secondhr' />

                        <button className='sign-Up'>Sign In</button>
                        </div>
                    </form>
                </div>

                <div className='all'>
                    <a href="/login">Already have an account ? </a>
                </div>
            </div>
        </div>
    );
}
