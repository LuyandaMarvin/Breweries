import React from 'react'

function View({params}) {
    console.log(params)
    return (
        <div>
            <h1>{params}</h1>
        </div>
    )
}

export default View
