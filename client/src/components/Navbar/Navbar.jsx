import React, { useRef, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
import { Menu, MenuItem } from '@mui/material';
import { useContext } from 'react';
import { CurrencyContext } from '../../context/currencyContext';
import Search from '../Search/Search';


function Navbar() {
    const [openCart, setOpenCart] = useState(false)

    const handlerRef = useRef(null)

    const products = useSelector(state => state.cart.products)

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        setAnchorEl(null);
        const curr = e.currentTarget.textContent
        changeCurrency((prev) => {

            return curr ? curr : prev

        })
    };
    const { changeCurrency, unitPrice, currency } = useContext(CurrencyContext)

    return (
        <div className="navbar">
            <div className="wrapper">

                <div className="left">

                    <div className="item">
                        <img src="/img/en.png" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item menu-currency" id='menu-currency' onClick={handleClick} aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}>
                        <span>{currency}</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="menu-currency"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        style={{
                            zIndex: '99999999'
                        }}
                    >
                        <MenuItem onClick={handleClose}>USD</MenuItem>
                        <MenuItem onClick={handleClose}>PHP</MenuItem>
                        <MenuItem onClick={handleClose}>AUD</MenuItem>
                        <MenuItem onClick={handleClose}>JPY</MenuItem>
                    </Menu>

                    {/* <div className="item">
                        <Link className='link' to="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Children</Link>
                    </div> */}

                </div>

                <div className="center">

                    <Link className='link' to="/">Ninja Store</Link>

                </div>

                <div className="right">

                    {/* <div className="item">
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
                    </div> */}
                    <div className="icons">
                        {/* <SearchIcon /> */}
                        <Search />
                        <PersonOutlineIcon />
                        <FavoriteIcon />
                        <div className="cartIcon" onClick={() => setOpenCart(!openCart)} ref={handlerRef}>
                            <ShoppingCartIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>

                </div>

            </div>

            {openCart && <Cart setToggle={setOpenCart} handlerRef={handlerRef} />}
        </div>
    )
}

export default Navbar
