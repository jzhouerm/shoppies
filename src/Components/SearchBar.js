import React, { useState } from 'react'

const SearchBar = (props)=> {
    const [search, setSearch] = useState("James")
    console.log(search)
    return (
        <div>
            <input type="text" placeholder="Search Movie by Title" value= {search} onChange={ (e) => setSearch(e.target.value)}/>
            <input type="text" placeholder="Search Movie by Title" value= {search} onChange={ (e) => setSearch(e.target.value)}/>
        </div>
    )
}

export default SearchBar