import React, { useContext, useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./Product.scss"
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartRedux';
import { CurrencyContext } from '../../context/currencyContext';
import Loading from '../../components/Loading/Loading';
import { addToFavorites } from '../../redux/favoritesRedux';
import useIfItemAdded from '../../hooks/useIfItemAdded';

function Product() {

    const [selectedImg, setselectedImg] = useState('img')
    const [quantity, setQuantity] = useState(1)
    const prodID = useParams().id
    const { unitPrice } = useContext(CurrencyContext)

    const { data, loading, error } = useFetch(`/products/${prodID}?populate=*`)
    const favorites = useSelector(state => state.favorites.products)
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()

    const addedToFavorites = useIfItemAdded(favorites, prodID)
    const addedToCart = useIfItemAdded(products, prodID)

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: data.data.id,
            title: data.data.attributes.title,
            desc: data.data.attributes.desc,
            price: data.data.attributes.price,
            img: data.data.attributes.img.data.attributes.url,
            quantity
        }))
    }

    const handleAddToFavorites = () => {
        dispatch(addToFavorites({
            id: data.data.id,
            title: data.data.attributes.title,
            desc: data.data.attributes.desc,
            price: data.data.attributes.price,
            img: data.data.attributes.img.data.attributes.url,
        }))
    }

    return (
        <div className="product">
            {loading
                ? <>
                    <Loading color={'black'} height={'60vh'} width={'100%'} loadingHeight={'32px'} loadingWidth={'32px'} />
                </>
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
                        <span className='price'>{unitPrice(data.data.attributes.price)}</span>
                        <p>
                            {data.data.attributes.desc}
                        </p>

                        <div className="quantity">
                            <button onClick={(e) => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}>-</button>
                            {quantity}
                            <button onClick={(e) => setQuantity(prev => prev + 1)}>+</button>
                        </div>

                        <button className='add' onClick={handleAddToCart}>
                            {addedToCart
                                ? <>
                                    <ShoppingCartIcon />
                                    ADDED TO CART
                                </>
                                : <>
                                    <ShoppingCartOutlinedIcon />
                                    ADD TO CART
                                </>
                            }
                        </button>

                        <div className="buttons">
                            <div className="items" onClick={handleAddToFavorites}>
                                {addedToFavorites
                                    ? <>
                                        <FavoriteIcon /> ADDED TO WISH LIST
                                    </>
                                    : <>
                                        <FavoriteBorderIcon /> ADD TO WISH LIST
                                    </>
                                }
                            </div>

                            {/* <div className="items">
                                <BalanceIcon /> ADD TO COMPARE
                            </div> */}
                        </div>

                        <div className="info">
                            <span>Vendor: Ninja Store</span>
                            <span>Product Type:
                                <span className="capitalize"> {data.data.attributes.subcategories
                                    .data[0].attributes.title}
                                </span>
                            </span>
                            <span>Tag:
                                <span className="capitalize">
                                    {data.data.attributes.categories.data.map(
                                        (cat, index) => {
                                            if (index === 0) {
                                                return " " + cat.attributes.title
                                            } else {
                                                return ", " + cat.attributes.title
                                            }
                                        }
                                    )}

                                </span>


                            </span>

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
