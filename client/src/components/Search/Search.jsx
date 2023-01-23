import React, { useState } from 'react'
import './Search.scss'
import SearchIcon from '@mui/icons-material/Search';
function Search() {
    const [clicked, setClicked] = useState(false)
    const [searchedProduct, setSearchedProduct] = useState("")

    return (
        <div className="search" onBlur={() => setClicked(!clicked)}>
            {clicked
                ?
                <input type="search" name="search" id="search" placeholder='Search product' autoFocus={true} value={searchedProduct} onChange={(e) => setSearchedProduct(e.target.value)} />
                :
                <SearchIcon onClick={() => setClicked(!clicked)} />
            }

        </div>
    )
}

export default Search
