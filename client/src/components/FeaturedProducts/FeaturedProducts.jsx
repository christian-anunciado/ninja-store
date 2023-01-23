import React from 'react'
import Card from '../Card/Card'
import "./FeaturedProducts.scss"
import useFetch from '../../hooks/useFetch'

function FeaturedProducts({ type, msg }) {

    const { data, loading, error } = useFetch(`/products?populate=*&filters[type][$eq]=${type}`)




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
                    loading ? 'Loading' :
                        data.data?.map(item =>
                            <Card item={item.attributes} key={item.id} id={item.id} />
                        )}
            </div>
        </div>
    )
}

export default FeaturedProducts
