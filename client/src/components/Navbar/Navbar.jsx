import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';


function Navbar() {
    const [openCart, setOpenCart] = useState(false)

    return (
        <div className="navbar">
            <div className="wrapper">

                <div className="left">

                    <div className="item">
                        <img src="/img/en.png" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Children</Link>
                    </div>

                </div>

                <div className="center">

                    <Link className='link' to="/">Ninja Store</Link>

                </div>

                <div className="right">

                    <div className="item">
                        <Link className='link' to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteIcon />
                        <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
                            <ShoppingCartIcon />
                            <span>0</span>
                        </div>
                    </div>

                </div>

            </div>

            {openCart && <Cart />}
        </div>
    )
}

export default Navbar
