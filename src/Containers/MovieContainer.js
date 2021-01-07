import React from 'react'
import SearchBar from '../Components/SearchBar.js'
import Results from '../Components/Results.js'
import Nominations from '../Components/Nominations.js'


const MovieContainer = (props)=> {

    return (
        <div>
            <SearchBar/>
            <Results/>
            <Nominations/>

        </div>
    )
}

export default MovieContainer