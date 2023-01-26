import React from 'react'
import Card from '../Card/Card'
import Loading from '../Loading/Loading'
import './List.scss'
import NoResult from './no-results.png'

function List({ data, loading }) {

    const count = data?.data?.length;

    return (
        <>
            {loading
                ? <Loading color={'black'} height={'200px'} width={'auto'} loadingHeight={'32px'} loadingWidth={'32px'} />
                : count !== 0
                    ? <div className="list">
                        {data?.data?.map(items =>
                            <Card item={items.attributes} key={items.id} id={items.id} />
                        )}
                    </div>
                    : <div className="no-result">
                        <img src={NoResult} alt="" srcset="" />
                        <span>Sorry! No results found &#128543; </span>
                        <p>We apologize, but the requested product is currently unavailable.</p>
                        <p>Please consider searching for a similar product or check back at a later date for availability.</p>
                    </div>
            }

        </>
    )
}

export default List
