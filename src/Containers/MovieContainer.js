import React from 'react'
import SearchBar from '../Components/SearchBar.js'
import Results from '../Components/Results.js'
import Nominations from '../Components/Nominations.js'


const MovieContainer = ({movieData, changeHandler})=> {

    return (
        <div>
            <SearchBar changeHandler={changeHandler}/>
            <Results movieData={movieData}/>
            <Nominations/>

        </div>
    )
}

export default MovieContainer