import React from 'react'
import MovieCard from './MovieCard'

const Results = (props)=> {
    console.log(props)

    const renderMovies = () =>{
        return props.movieData.map(movie => <MovieCard movieInfo={movie}/>)
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