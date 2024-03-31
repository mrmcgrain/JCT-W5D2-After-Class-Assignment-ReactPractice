import React from 'react'

const Card = ( { item }) => {
    return (
        <>
        <div style={{ border: '2px white solid' }}>
            <h3>{item.title}</h3>
            <p>{item.author}</p>
            <p>{item.pages} pages</p>
            <p>{item.year}</p>
            <p>{item.country}</p>
            <a href={item.link}>link</a>
        </div>
        <br />
    </>    )
}

export default Card