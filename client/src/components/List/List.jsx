import React from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'
import Loading from '../Loading/Loading'
import './List.scss'

function List({ fetch }) {

    const { data, loading, error } = useFetch(
        fetch
    )

    return (
        <>
            {loading
                ? <Loading color={'black'} height={'200px'} width={'auto'} loadingHeight={'32px'} loadingWidth={'32px'} />
                :
                <div className="list">
                    {data?.data?.map(items =>
                        <Card item={items.attributes} key={items.id} id={items.id} />
                    )}
                </div>
            }

        </>
    )
}

export default List
