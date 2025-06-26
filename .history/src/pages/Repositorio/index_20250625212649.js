
import React from "react"

export default function Repositorio({match}) {
    return (
        <h1 style={{ color: '#FFF' }}>
            
            {decodeURI( match.params.repositorio)}
        </h1>
    )
}