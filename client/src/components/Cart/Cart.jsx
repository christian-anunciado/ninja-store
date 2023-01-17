import React, { useEffect, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './Cart.scss'
import { useDispatch, useSelector } from 'react-redux';
import { removeToCart, resetCart } from '../../redux/cartRedux';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import Api from '../../Api';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
function Cart() {

    const products = useSelector(state => state.cart.products)

    const [imageLoading, setImageLoading] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(0)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const totalQuantity = products.reduce((prev, current) => {
        return prev += current.quantity
    }, 0)

    const totalPrice = products.reduce((prev, current) => {
        return prev += current.quantity * current.price
    }, 0.0)

    const handleImageLoading = () => {
        setImageLoaded(prev => prev + 1)
    }

    useEffect(() => {
        if (imageLoaded === products.length) {
            setImageLoading(true)
        }
    }, [imageLoaded])

    const handleCheckout = async () => {
        try {
            const stripe = await stripePromise;

            const res = await Api.post("/orders", {
                products
            })

            stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })


        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="cart">
            <div className="headingTitle">
                <h1>
                    Your Cart
                </h1>
                <span>{totalQuantity} items</span>
            </div>

            <hr />

            {products?.map((item, index) => (
                <div className="item" key={item.id} >

                    <div style={{ display: imageLoading ? 'none' : 'block' }}>
                        <Loading
                            height={'100px'}
                            width={'80px'}
                            color={'#000'}
                            loadingHeight={'18px'}
                            loadingWidth={'18px'}
                        />
                    </div>


                    <img
                        src={process.env.REACT_APP_API_UPLOADURL + item.img}
                        alt=""
                        onClick={() => navigate(`/product/${item.id}`)}
                        loading="lazy"
                        onLoad={handleImageLoading}
                        onError={handleImageLoading}
                        style={{ display: imageLoading ? 'block' : 'none' }}
                    />

                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <p className="price">
                            {item.quantity} x <span className='currency'>$</span>{item.price.toFixed(2)}
                        </p>
                    </div>

                    <div className="delete" onClick={() => dispatch(removeToCart(
                        { id: item.id }
                    ))}>
                        <DeleteOutlineIcon />
                    </div>
                </div>
            ))
            }
            <hr />
            <div className="total">
                <p>SUBTOTAL</p>
                <p className='totalPrice'><span className='currency'>$</span>{totalPrice.toFixed(2)}</p>
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
