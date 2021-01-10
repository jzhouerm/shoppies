import React, { useState } from 'react'

const MovieCard = ({movieInfo})=> {
// console.log(movieInfo)
    const [nomBtn, setNomBtn] = useState(false)

    const changeStatus = () => {
        const status = nomBtn
        setNomBtn(!nomBtn)
    }

    return (
        <>
            <li>{movieInfo.Title}, {movieInfo.Year}</li>
            <button onClick={() => changeStatus()}>
                {nomBtn ? "Nominated" : "Nominate"}
            </button>
        </>
    )
}

export default MovieCard