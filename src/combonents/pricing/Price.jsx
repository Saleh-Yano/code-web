import React from 'react'
import PriceCard from './PriceCard'
import './price.css'
import Faq from './Faq'
import BackPrice from '../commen/back/BackPrice'

const price = () => {
return (
    <>
        <BackPrice title='Choose The Right Plan'/>
        <section className='price padding'>
        <div className='container grid'>
            <PriceCard/>
        </div>
    </section>
    <Faq/>
    </>

)
}

export default price