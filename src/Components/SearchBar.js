import React from 'react'

//This component should only be responsible for taking in search text and setting the search state and passing it up
const SearchBar = ({search, setSearch}) =>{


        return (

                <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
        )


}



export default SearchBar