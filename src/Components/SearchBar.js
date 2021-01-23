import React, { useState, useEffect } from 'react'

const SearchBar = ({search, setSearch})=> 
    
    (
        <div>
            <input type="text" placeholder="Search Movie by Title" value= {search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    )


export default SearchBar