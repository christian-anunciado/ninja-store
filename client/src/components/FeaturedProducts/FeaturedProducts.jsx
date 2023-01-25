import React from 'react'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'
import Slider from "react-slick";

import "./FeaturedProducts.scss"
import Loading from '../Loading/Loading';


function FeaturedProducts({ type, msg }) {

    const { data, loading, error } = useFetch(`/products?populate=*&filters[type][$eq]=${type}`)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: data?.data?.length > 2 ? 3 : 2,
        slidesToScroll: data?.data?.length > 2 ? 3 : 2,
        arrows: true,
        className: 'slides',
    };

    return (
        <div className="featuredProducts">

            <div className="top">
                <h1>{type} products</h1>
                <span>
                    {msg}
                </span>
            </div>
            <div className="bottom">
                {error ? 'Something went wrong!' :
                    loading
                        ? <Loading color={'black'} height={'200px'} width={'100%'} loadingHeight={'32px'} loadingWidth={'32px'} />
                        : <Slider {...settings}>

                            {data.data?.map((item, index) =>
                                <Card item={item.attributes} key={item.id} id={item.id} />
                            )}
                        </Slider>
                }
            </div>
        </div>
    )
}

export default FeaturedProducts
