import React, {useState, useEffect} from 'react'
import Results from '../Components/Results.js'
import Nominations from '../Components/Nominations.js'
import SearchBar from '../Components/SearchBar.js'
import ApiKey from '../Components/ApiKey.js'

const MovieContainer = ({movieData})=> {

    const [search, setSearch] = useState("")
    const [data, setData] = useState([])

    //useState is the hook
    //search and setSearch are state variables within the useState hook where search is the value and setSearch is a function that allows you change the value of search

    // const movieFilter = () => (
    //     data.filter(el => el.Title.toLowerCase().includes(search.toLowerCase()))
    // )

    const loadData = async () =>{
        //if search is empty string, break
        if (search === "") return 
        const query = search.replace(" ", "_")
        const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${ApiKey}&s=${query}`
        console.log(API_URL)
        
        const response = await fetch(API_URL)  
        const data = await response.json()
        if (data["Response"] === "False"){
            setData([])
        }
        else{setData(data["Search"])}
    }

    
    useEffect(() => {
        loadData()
      }, [search])

    // console.log(API_URL)

    return (
        
        <div>
            <SearchBar search={search} setSearch={setSearch}/>
            <Results movieData={data}/>
            <Nominations/>

        </div>
    )
}

export default MovieContainer