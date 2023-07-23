import React from 'react'
import { useLocation } from 'react-router-dom'

const BackTeam = ({title}) => {
    const location = useLocation()
    return (
    <>
            <section className='backTeam '>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
        </section>
        <div className='margin'></div>
    </>
    )
}

export default BackTeam