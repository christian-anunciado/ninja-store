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
import Favorites from '../Favorites/Favorites';


function Navbar() {
    const [openCart, setOpenCart] = useState(false)
    const [openFavorites, setOpenFavorites] = useState(false)

    const handlerRef = useRef(null)
    const favoritesRef = useRef(null)

    const products = useSelector(state => state.cart.products)

    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorLanguageEl, setAnchorLanguageEl] = useState(null);

    const open = Boolean(anchorEl);
    const languageOpen = Boolean(anchorLanguageEl);

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

                    <div className="item" id='menu-language'
                        onClick={(e) => setAnchorLanguageEl(e.currentTarget)}
                        aria-controls={languageOpen ? 'menu-language-position' : undefined}
                        aria-haspopup="true"
                        aria-expanded={languageOpen ? 'true' : undefined}
                    >
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
                        id="menu-language-position"
                        aria-labelledby="menu-language"
                        anchorEl={anchorLanguageEl}
                        open={languageOpen}
                        onClose={(e) => setAnchorLanguageEl(null)}
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
                        <MenuItem disabled>At this time, we are only able to support the English language</MenuItem>
                    </Menu>
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

                </div>

                <div className="center">

                    <Link className='link' to="/">Ninja Store</Link>

                </div>

                <div className="right">
                    <div className="icons">
                        <Search />
                        <FavoriteIcon onClick={() => setOpenFavorites(!openFavorites)} ref={favoritesRef} />
                        <div className="cartIcon" onClick={() => setOpenCart(!openCart)} ref={handlerRef}>
                            <ShoppingCartIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>

                </div>

            </div>

            {openCart && <Cart setToggle={setOpenCart} handlerRef={handlerRef} />}
            {openFavorites && <Favorites setToggle={setOpenFavorites} handlerRef={favoritesRef} />}
        </div>
    )
}

export default Navbar
