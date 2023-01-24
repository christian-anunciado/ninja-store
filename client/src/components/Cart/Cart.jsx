import React, { useContext, useEffect, useRef, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './Cart.scss'
import { useDispatch, useSelector } from 'react-redux';
import { removeToCart, resetCart, updateQuantity } from '../../redux/cartRedux';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import Api from '../../Api';
import { CurrencyContext } from '../../context/currencyContext';
import useOutsideClick from '../../hooks/useOutsideClick';
import { Skeleton } from '@mui/material';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function Cart({ setToggle, handlerRef }) {

    const products = useSelector(state => state.cart.products)

    const [imageLoading, setImageLoading] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(0)
    const wrapperRef = useRef()

    const { convertedPrice, currency, unitPrice } = useContext(CurrencyContext)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const totalQuantity = products.reduce((prev, current) => {
        return prev += current.quantity
    }, 0) || 0

    const totalPrice = products.reduce((prev, current) => {
        return prev += current.quantity * current.price
    }, 0.0) || 0

    const handleImageLoading = () => {
        setImageLoaded(prev => prev + 1)
    }

    useEffect(() => {
        console.log(imageLoaded === products.length);
        if (imageLoaded === products.length) {
            setImageLoading(true)
        }
    }, [imageLoaded])


    useOutsideClick(wrapperRef, setToggle, handlerRef)

    const handleCheckout = async () => {
        try {
            const stripe = await stripePromise;

            const res = await Api.post("/orders", {
                products: products.map(item => ({
                    ...item, price: convertedPrice(item.price), currency: currency.toLowerCase()
                }))
            })

            stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="cart" ref={wrapperRef}>
            <div className="headingTitle">
                <h1>
                    Your Cart
                </h1>
                <span>{totalQuantity} items</span>
            </div>

            <hr />

            <div className="item-container">
                {products?.map((item, index) => (
                    <div className="item" key={item.id} >
                        {imageLoading ?
                            <img
                                src={process.env.REACT_APP_API_UPLOADURL + item.img}
                                alt=""
                                onClick={() => navigate(`/product/${item.id}`)}
                                loading="lazy"
                                onLoad={handleImageLoading}
                                onError={handleImageLoading}
                            // style={{ display: imageLoading ? 'block' : 'none' }}
                            /> : <Skeleton animation='wave' height={100} width={80} variant='rectangular'>
                                <img
                                    src={process.env.REACT_APP_API_UPLOADURL + item.img}
                                    alt=""
                                    onClick={() => navigate(`/product/${item.id}`)}
                                    loading="lazy"
                                    onLoad={handleImageLoading}
                                    onError={handleImageLoading}
                                // style={{ display: imageLoading ? 'block' : 'none' }}
                                />
                            </Skeleton>
                        }
                        <div className="details">
                            {imageLoading
                                ? <h1>{item.title}</h1>
                                : <Skeleton variant="text" sx={{ fontSize: '2.5rem' }} width="60%" />

                            }

                            {imageLoading
                                ? <p>{item.desc?.substring(0, 100)}</p>
                                : <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} width="100%" >
                                    <p>{item.desc?.substring(0, 100)}</p>
                                </Skeleton>
                            }

                            {imageLoading
                                ? <p className="price">
                                    {item.quantity} x {unitPrice(item.price)}
                                </p>
                                : <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} width="70%" />
                            }

                            <div className="quantity">
                                {imageLoading
                                    ? <button
                                        onClick={(e) => dispatch(updateQuantity({
                                            id: item.id,
                                            quantity: item.quantity === 1 ? 1 : item.quantity - 1
                                        }))}
                                    >
                                        -
                                    </button>
                                    : <Skeleton animation='wave'>
                                        <button
                                            onClick={(e) => dispatch(updateQuantity({
                                                id: item.id,
                                                quantity: item.quantity === 1 ? 1 : item.quantity - 1
                                            }))}
                                        >
                                            -
                                        </button>
                                    </Skeleton>
                                }

                                {imageLoading
                                    ? item.quantity
                                    : <Skeleton animation='wave'>

                                    </Skeleton>
                                }


                                {imageLoading
                                    ? <button onClick={(e) => dispatch(updateQuantity({
                                        id: item.id,
                                        quantity: item.quantity + 1
                                    }))}
                                    >
                                        +
                                    </button>
                                    : <Skeleton animation='wave'>
                                        <button onClick={(e) => dispatch(updateQuantity({
                                            id: item.id,
                                            quantity: item.quantity + 1
                                        }))}
                                        >
                                            +
                                        </button>
                                    </Skeleton>
                                }

                            </div>
                        </div>

                        {imageLoading
                            ? <div className="delete" onClick={() => dispatch(removeToCart(
                                { id: item.id }
                            ))}>
                                <DeleteOutlineIcon />
                            </div>
                            : <Skeleton animation='wave' height={28} width={24} variant='rounded'>
                                <div className="delete" onClick={() => dispatch(removeToCart(
                                    { id: item.id }
                                ))}>
                                    <DeleteOutlineIcon />
                                </div>
                            </Skeleton>
                        }


                    </div>
                ))
                }
            </div>

            <hr />
            <div className="total">
                <p>SUBTOTAL</p>
                {imageLoading
                    ? <p className='totalPrice'>{unitPrice(totalPrice)}</p>
                    : <Skeleton animation='wave'>
                        <p className='totalPrice'>{unitPrice(totalPrice)}</p>
                    </Skeleton>
                }


            </div>

            <div className="checkout">
                <button onClick={handleCheckout}>
                    PROCEED TO CHECKOUT
                </button>

                <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
            </div>

        </div >
    )
}

export default Cart
