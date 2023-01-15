import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './Cart.scss'
import { useDispatch, useSelector } from 'react-redux';
import { removeToCart, resetCart } from '../../redux/cartRedux';
import { useNavigate } from 'react-router-dom';

function Cart() {

    const products = useSelector(state => state.cart.products)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const total = () => {
        let total = 0;

        products.map(item => total += item.quantity * item.price)

        return total.toFixed(2)
    }


    return (
        <div className="cart">
            <h1>
                Products in your cart
            </h1>

            {products?.map(item => (
                <div className="item" key={item.id}>
                    <img src={process.env.REACT_APP_API_UPLOADURL + item.img} alt="" onClick={() => navigate(`/product/${item.id}`)} />

                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <span className="price">
                            {item.quantity} x ${item.price}
                        </span>
                    </div>

                    <div className="delete" onClick={() => dispatch(removeToCart(
                        { id: item.id }
                    ))}>
                        <DeleteOutlineIcon />
                    </div>
                </div>
            ))
            }

            <div className="total">
                <span>SUBTOTAL</span>
                <span>{total()}</span>
            </div>

            <div className="checkout">
                <button>
                    PROCEED TO CHECKOUT
                </button>

                <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
            </div>

        </div >
    )
}

export default Cart
