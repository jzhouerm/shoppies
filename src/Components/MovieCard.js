import React from 'react'

const MovieCard = ({movieInfo})=> {
console.log(movieInfo)

    return (
        <>
            <li>{movieInfo.Title}, {movieInfo.Year}</li>
            <button>Nominate</button>
        </>
    )
}

export default MovieCard