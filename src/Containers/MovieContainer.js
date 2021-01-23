import React, {useState} from 'react'
import SearchBar from '../Components/SearchBar.js'
import Results from '../Components/Results.js'
import Nominations from '../Components/Nominations.js'


const MovieContainer = ({movieData})=> {

    const [search, setSearch] = useState("")
    //useState is the hook
    //search and setSearch are state variables within the useState hook where search is the value and setSearch is a function that allows you change the value of search

    const movieFilter = () => (
        movieData.filter(el => el.Title.toLowerCase().includes(search.toLowerCase()))
    )

    // console.log(movieFilter(), movieData[0].Title)

    return (
        <div>
            <SearchBar search={search} setSearch={setSearch}/>
            <Results movieData={movieFilter()}/>
            <Nominations/>

        </div>
    )
}

export default MovieContainer