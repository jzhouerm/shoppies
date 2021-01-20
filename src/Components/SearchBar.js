import React, { useState, useEffect } from 'react'

const SearchBar = (props)=> {
    const [search, setSearch] = useState("")

    const changeHandler =(e) =>{
        // set the new state and send up to parent
        setSearch(e.target.value)
        // props.changeHandler(search)
    }

    useEffect(() => {
        props.changeHandler(search)
    },[search])

    return (
        <div>
            {/* <input type="text" placeholder="Search Movie by Title" value= {search} onChange={ (e) => setSearch(e.target.value)}/> */}
            <input type="text" placeholder="Search Movie by Title" value= {search} onChange={changeHandler}/>

        </div>
    )
}

export default SearchBar