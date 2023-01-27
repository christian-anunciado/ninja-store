import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss"

function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>

                    <Link className='link' to="/products/women">
                        <span>Women</span>
                    </Link>

                    <Link className='link' to="/products/men">
                        <span>Men</span>
                    </Link>

                    <Link className='link' to="/products/shoes">
                        <span>Shoes</span>
                    </Link>

                    <Link className='link' to="/products/accesories">
                        <span>Accesories</span>
                    </Link>

                    <Link className='link' to="/products/new">
                        <span>New Arrivals</span>
                    </Link>
                </div>

                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>

                <div className="item">
                    <h1>About</h1>
                    <span>Our shop is dedicated to providing customers with a wide range of high-quality products across various categories, from the latest fashion trends to must-have home essentials, all at competitive prices, and with an exceptional shopping experience that is both easy and enjoyable.
                    </span>
                </div>

                <div className="item">
                    <h1>Contact</h1>
                    <span>If you have any questions or concerns about our products, shipping or returns, please don't hesitate to reach out to our friendly customer service team through our website's contact form, email, live chat or phone, we are available Monday to Friday from 9am to 5pm EST, Our team will be more than happy to assist you and ensure that your shopping experience with us is a positive one.

                    </span>
                </div>

            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Ninja Store</span>
                    <span className="copyright">© {new Date().getFullYear()} - All Rights Reserved.</span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
