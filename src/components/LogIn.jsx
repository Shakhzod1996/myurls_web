import React from 'react';
import './LogIn.css'
export default function LogIn() {
    return (
        <div className='login'>
            <div className='login-container'>
                <div className='m-b'>
                <a href="/" className='a-first'>
                    <div className='circle-1'><i className="fas fa-link"></i></div>
                    <p className='myurls'>my<span>urls</span></p>
                </a>
                </div>

                <div className='login-main'>
                    <h2>Sign In</h2>

                    <hr />

                    <form action="#">
                        <div className='block'>
                
                        <label htmlFor='email' >Email</label><br />
                        <input type="email" placeholder='enter your email' id='email' required/><br />

                        <label htmlFor="password" className='pas'>Password</label><br />
                        <input type="password" id='password' placeholder='enter your password' required />

                        <hr className='secondhr' />

                        <button className='sign-in'>Sign In</button>
                        </div>
                    </form>
                </div>

                <div className='account'>
                    <a href="/signup">Need an account? </a>
                    <a href="#">Forgot your password?</a>
                </div>
            </div>

        </div>
    )


}
