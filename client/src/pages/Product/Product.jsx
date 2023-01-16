import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

import "./Product.scss"
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartRedux';

function Product() {

    const [selectedImg, setselectedImg] = useState('img')
    const [quantity, setQuantity] = useState(1)
    const prodID = useParams().id

    const { data, loading, error } = useFetch(`/products/${prodID}?populate=*`)

    const dispatch = useDispatch()


    const handleAdd = () => {
        console.log("Clicked");
        dispatch(addToCart({
            id: data.data.id,
            title: data.data.attributes.title,
            desc: data.data.attributes.desc,
            price: data.data.attributes.price,
            img: data.data.attributes.img.data.attributes.url,
            quantity
        }))
    }

    return (
        <div className="product">
            {loading
                ? "Loading"
                : <>
                    <div className="left">
                        <div className="images">
                            <img src={`${process.env.REACT_APP_API_UPLOADURL}${data?.data?.attributes?.img?.data?.attributes?.url}`} alt="" onClick={(e) => setselectedImg('img')} />
                            {data?.data?.attributes?.img2?.data?.attributes?.url
                                ? <img src={`${process.env.REACT_APP_API_UPLOADURL}${data?.data?.attributes?.img2?.data?.attributes?.url}`} alt="" onClick={(e) => setselectedImg('img2')} />
                                : null
                            }

                        </div>

                        <div className="mainImg">
                            <img src={process.env.REACT_APP_API_UPLOADURL + data?.data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
                        </div>
                    </div>

                    <div className="right">
                        <h1>{data.data.attributes.title}</h1>
                        <span className='price'>${data.data.attributes.price}</span>
                        <p>
                            {data.data.attributes.desc}
                        </p>

                        <div className="quantity">
                            <button onClick={(e) => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}>-</button>
                            {quantity}
                            <button onClick={(e) => setQuantity(prev => prev + 1)}>+</button>
                        </div>

                        <button className='add' onClick={handleAdd}>
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
                </>
            }



        </div>
    )
}

export default Product
