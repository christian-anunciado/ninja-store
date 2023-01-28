import React, { useContext, useRef } from 'react'
import './Favorites.scss'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeToFavorites, resetFavorites } from '../../redux/favoritesRedux';
import { CurrencyContext } from '../../context/currencyContext';
import useOutsideClick from '../../hooks/useOutsideClick';
import WishList from './wishlist.png'

function Favorites({ setToggle, handlerRef }) {
    const { unitPrice } = useContext(CurrencyContext)

    const wrapperRef = useRef()

    const favorites = useSelector(state => state.favorites.products)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useOutsideClick(wrapperRef, setToggle, handlerRef)

    return (
        <div className="favorites" ref={wrapperRef}>
            <div className="headingTitle">
                <h1>
                    Your Wishlist
                </h1>
                <span>{favorites.length} {favorites.length > 1 ? 'items' : 'item'}</span>
            </div>

            <hr />

            {favorites.length === 0
                ? <div className="empty-wishlist">
                    <img src={WishList} alt="" />
                    <h1>Your WishList is empty!</h1>
                    <p>Seems like you don't have a wish yet.</p>
                    <p>Make a wish</p>
                </div>

                : <>

                    <div className="item-container">
                        {favorites?.map((item) => (
                            <div className="item">
                                <img
                                    src={process.env.REACT_APP_API_UPLOADURL + item.img}
                                    alt=""
                                    onClick={() => navigate(`/product/${item.id}`)}
                                    loading="lazy"
                                />

                                <div className="details">
                                    <h1>{item.title}</h1>
                                    <p>{item.desc?.substring(0, 100)}</p>

                                    <div className="remove" onClick={() => dispatch(removeToFavorites({ id: item.id }))}>
                                        <RemoveCircleOutlineIcon className='icon' />
                                        Remove from wishlist
                                    </div>
                                </div>

                                <span className="price">{unitPrice(item.price)}</span>
                            </div>
                        ))

                        }

                    </div>

                    <hr />

                    <span className='reset' onClick={() => dispatch(resetFavorites())}>
                        Reset Wishlist
                    </span>
                </>

            }
        </div>
    )
}

export default Favorites
