import React, { useState, useContext } from 'react'
import VariableContext from './Context'


const MovieCard = ({movieInfo})=> {
// console.log(movieInfo)
    const [nomBtn, setNomBtn] = useState(false)

    const context = useContext(VariableContext)

    const changeStatus = () => {
        const status = nomBtn
        setNomBtn(!nomBtn)
    }

    const variable = "james"
    console.log(context)
    return (
        <>
            <li>{movieInfo.Title}, {movieInfo.Year}, {variable}</li>
            <button onClick={() => changeStatus()}>
                {nomBtn ? "Nominated" : "Nominate"}
            </button>
        </>
    )
}

export default MovieCard