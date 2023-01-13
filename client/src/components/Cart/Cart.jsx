import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './Cart.scss'

function Cart() {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1",
            img2: "https://images.pexels.com/photos/1972112/pexels-photo-1972112.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1",
            title: "Sports",
            isNew: true,
            oldPrice: 19,
            price: 12,
            desc: 'Mollit ullamco ad Lorem aute aute amet cillum voluptate cillum magna nisi.'
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1",
            img2: "https://images.pexels.com/photos/1972112/pexels-photo-1972112.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1",
            title: "Sports",
            isNew: true,
            oldPrice: 19,
            price: 12,
            desc: 'Mollit ullamco ad Lorem aute aute amet cillum voluptate cillum magna nisi.'
        }
    ]

    return (
        <div className="cart">
            <h1>
                Products in your cart
            </h1>

            {data?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />

                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <span className="price">
                            1 x ${item.price}
                        </span>
                    </div>

                    <div className="delete">
                        <DeleteOutlineIcon />
                    </div>
                </div>
            ))}

            <div className="total">
                <span>SUBTOTAL</span>
                <span>${19.9}</span>
            </div>

            <div className="checkout">
                <button>
                    PROCEED TO CHECKOUT
                </button>

                <span className='reset'>Reset Cart</span>
            </div>

        </div>
    )
}

export default Cart
