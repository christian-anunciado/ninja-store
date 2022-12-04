import React from 'react'
import "./Footer.scss"

function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accesories</span>
                    <span>New Arrivals</span>
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
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus venenatis eleifend. In nec lacus lorem. Sed leo eros, commodo ut porta quis, rutrum sed quam. Donec a ligula non leo aliquet accumsan. Curabitur quis nibh gravida, vestibulum mi ac, varius erat. Duis volutpat et augue non consequat. Sed eget arcu id ipsum sollicitudin suscipit. Quisque justo nisi, dictum tristique orci in, pellentesque aliquet tortor. Vestibulum lacinia dui sed leo sollicitudin, ac accumsan turpis iaculis. Praesent consectetur aliquet massa, id ultricies tellus iaculis sed.

                    </span>
                </div>

                <div className="item">
                    <h1>Contact</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus venenatis eleifend. In nec lacus lorem. Sed leo eros, commodo ut porta quis, rutrum sed quam. Donec a ligula non leo aliquet accumsan. Curabitur quis nibh gravida, vestibulum mi ac, varius erat. Duis volutpat et augue non consequat. Sed eget arcu id ipsum sollicitudin suscipit. Quisque justo nisi, dictum tristique orci in, pellentesque aliquet tortor. Vestibulum lacinia dui sed leo sollicitudin, ac accumsan turpis iaculis. Praesent consectetur aliquet massa, id ultricies tellus iaculis sed.

                    </span>
                </div>

            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Ninja Store</span>
                    <span className="copyright">© 2022 - All Rights Reserved.</span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer