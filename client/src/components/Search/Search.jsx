import React, { useState } from 'react'
import './Search.scss'
import SearchIcon from '@mui/icons-material/Search';
function Search() {
    const [clicked, setClicked] = useState(false)

    return (
        <div className="search" onBlur={() => setClicked(!clicked)}>
            {clicked
                ?
                <input type="text" name="search" id="search" placeholder='Search product' autoFocus={true} className="test" />
                :
                <SearchIcon onClick={() => setClicked(!clicked)} />
            }

        </div>
    )
}

export default Search
