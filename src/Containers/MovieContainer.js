import React, {useState} from 'react'
import Results from '../Components/Results.js'
import Nominations from '../Components/Nominations.js'


const MovieContainer = ({movieData})=> {

    //useState is the hook
    //search and setSearch are state variables within the useState hook where search is the value and setSearch is a function that allows you change the value of search

    const movieFilter = () => (
        movieData.filter(el => el.Title.toLowerCase().includes(search.toLowerCase()))
    )


    return (
        <div>
            <Results movieData={movieFilter()}/>
            <Nominations/>

        </div>
    )
}

export default MovieContainer