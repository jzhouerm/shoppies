import React from 'react'
import MovieCard from './MovieCard'

const Results = ({movieData})=> {
    // console.log(props)

    const renderMovies = () =>{
        return movieData.map(movie => <MovieCard movieInfo={movie}/>)
    }

    return (
        <div>
            <ul>
                {renderMovies()}
            </ul>
        </div>
    )
}

export default Results