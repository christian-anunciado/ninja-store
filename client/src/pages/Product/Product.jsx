import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

import "./Product.scss"

function Product() {

    const [selectedImg, setselectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const images = [
        "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&dpr=1",
        "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1"
    ]

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    {images?.map((item, index) => {
                        return (
                            <img src={item} alt="" key={item} onClick={(e) => setselectedImg(index)} />
                        )
                    }
                    )}
                </div>

                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>

            <div className="right">
                <h1>Title</h1>
                <span className='price'>$199</span>
                <p>
                    Velit eiusmod est eu aliqua irure tempor in sint ut proident tempor dolore labore reprehenderit. Voluptate non sint ipsum excepteur cupidatat exercitation voluptate voluptate id duis anim officia. Ad non cupidatat ea in quis esse et aliqua elit veniam tempor deserunt consectetur. Dolore esse esse ipsum ex sunt voluptate minim cillum enim dolore minim. Elit eiusmod ut veniam duis cillum aute reprehenderit incididunt nisi tempor nisi. Aute ut duis in nulla nisi deserunt veniam ad cupidatat.
                </p>

                <div className="quantity">
                    <button onClick={(e) => setQuantity(prev => (prev === 1 ? 1 : prev = 1))}>-</button>
                    {quantity}
                    <button onClick={(e) => setQuantity(prev => prev + 1)}>+</button>
                </div>

                <button className='add'>
                    <AddShoppingCartIcon /> ADD TO CART
                </button>

                <div className="buttons">
                    <div className="items">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>

                    <div className="items">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>

                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>

                </div>

                <hr />

                <div className="details">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>

            </div>


        </div>
    )
}

export default Product
