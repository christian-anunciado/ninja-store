import React, { useState } from 'react'
import './Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function Contact() {
    const [email, setEmail] = useState("")

    const handleEmailSend = (e) => {
        e.preventDefault();

        const data = {
            from_email: email,
            message: 'I am reaching out to you as I am highly interested in your Ninja-store and would like to learn more about its offerings. I am eager to explore the possibilities of doing business with you.'
        }

        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, 'template_ueihnyr', data, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                toast.success("Sent succesfully")
                setEmail('')
            }, (error) => {
                toast.error("Something went wrong")
            });
    }

    return (
        <div className="contact">
            <div className="wrapper">
                <div className="item">
                    <p>Be in <span>touch</span> with us.</p>
                </div>
                <div className="item">
                    <input type="text" name="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                    <button onClick={handleEmailSend}>Join us</button>
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
