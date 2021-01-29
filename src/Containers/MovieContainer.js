import React, {useState, useEffect} from 'react'
import Results from '../Components/Results.js'
import Nominations from '../Components/Nominations.js'
import SearchBar from '../Components/SearchBar.js'
import ApiKey from '../../ApiKey.js'

const MovieContainer = ({movieData})=> {

    const [search, setSearch] = useState("")

    const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey="
    //useState is the hook
    //search and setSearch are state variables within the useState hook where search is the value and setSearch is a function that allows you change the value of search

    const movieFilter = () => (
        movieData.filter(el => el.Title.toLowerCase().includes(search.toLowerCase()))
    )
    
    useEffect(() => {
        

      }, [])

    return (
        <div>
            <SearchBar search={search} setSearch={setSearch}/>
            <Results movieData={movieFilter()}/>
            <Nominations/>

        </div>
    )
}

export default MovieContainer