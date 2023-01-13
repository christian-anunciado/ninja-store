import React from 'react'
import './Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import Twitter from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from 'react-router-dom';
function Contact() {
    return (
        <div className="contact">
            <div className="wrapper">
                <div className="item">
                    <p>Be in <span>touch</span> with us.</p>
                </div>
                <div className="item">
                    <input type="text" name="email" placeholder='Enter your email' />
                    <button>Join us</button>
                </div>
                <div className="item">
                    <div className="logos">
                        <div className="logo">
                            <Link className='link' target={'_blank'} to={'https://web.facebook.com/'} />
                            <FacebookIcon />
                            <Link />
                        </div>
                        <div className="logo">
                            <Link className='link' target={'_blank'} to={'facebook.com'} />
                            <InstagramIcon />
                            <Link />
                        </div>
                        <div className="logo">
                            <Link className='link' target={'_blank'} to={'facebook.com'} />
                            <TwitterIcon />
                            <Link />
                        </div>
                        <div className="logo">
                            <Link className='link' target={'_blank'} to={"https://www.google.com/"} />
                            <GoogleIcon />
                            <Link />
                        </div>
                        <div className="logo">
                            <Link className='link' target={'_blank'} to={'facebook.com'} />
                            <PinterestIcon />
                            <Link />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact