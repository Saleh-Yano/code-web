import React from 'react'
import { useLocation } from 'react-router-dom'

const BackBlog = ({title}) => {
    const location = useLocation()
    return (
    <>
            <section className='backBlog'>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
        </section>
        <div className='margin'></div>
    </>
    )
}

export default BackBlog