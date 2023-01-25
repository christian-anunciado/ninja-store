import React, { useEffect, useState } from 'react'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import './SearchPage.scss'
import { useParams } from 'react-router-dom';

function SearchPage() {
    const name = useParams().name
    const [fetch, setFetch] = useState(null)

    useEffect(() => {

    }, [name])

    return (
        <div>SearchPage: {name}</div>
    )
}

export default SearchPage
