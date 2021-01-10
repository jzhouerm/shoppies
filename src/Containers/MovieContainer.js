import React from 'react'
import SearchBar from '../Components/SearchBar.js'
import Results from '../Components/Results.js'
import Nominations from '../Components/Nominations.js'


const MovieContainer = ({movieData, string})=> {

    console.log(string)
    return (
        <div>
            <SearchBar/>
            <Results movieData={movieData}/>
            <Nominations/>

        </div>
    )
}

export default MovieContainer