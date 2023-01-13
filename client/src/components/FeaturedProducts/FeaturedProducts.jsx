import React, { } from 'react'
import Card from '../Card/Card'
import "./FeaturedProducts.scss"
import useFetch from '../../hooks/useFetch'

function FeaturedProducts({ type }) {

    const { data, loading, error } = useFetch(`/products?populate=*&filters[type][$eq]=${type}`)


    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus venenatis eleifend. In nec lacus lorem. Sed leo eros, commodo ut porta quis, rutrum sed quam. Donec a ligula non leo aliquet accumsan. Curabitur quis nibh gravida, vestibulum mi ac, varius erat. Duis volutpat et augue non consequat. Sed eget arcu id ipsum sollicitudin suscipit.
                </span>
            </div>
            <div className="bottom">
                {error ? 'Something went wrong!' :
                    loading ? 'Loading' :
                        data.data?.map(item =>
                            <Card item={item.attributes} key={item.id} />
                        )}
            </div>
        </div>
    )
}

export default FeaturedProducts
