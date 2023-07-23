import React from 'react'
import BackPrivacy from '../commen/back/BackPrivacy'
import './privacy.css'
import Title from '../commen/title/Title'
import { pragraph } from '../../dummydata'

const Privacy = () => {
  return (
    <>
        <BackPrivacy title= "Privacy"/>
        
        <section className='priText'>
            <div className="container">
            <Title title='Privacy' />
            <div className='stylePrivacy'>
            
                {pragraph.map((val)=>(
                    <p>{val.para}</p>
                ))}
            
            </div>
            
            </div>
            
        </section>
    </>
  )
}

export default Privacy