import React from 'react'
import "./hero.css"
import Title from '../../commen/title/Title'
import { Link } from 'react-router-dom'



const Hero = () => {
    
return (
    <>
        <section className='hero'>
        <div className="container">
            <div className="row">
            <Title subtitle='WELCOME TO FRIST CODE' title='Best Online Education Expertise' />
            
                <div className="button">
                    <Link to="/contact">
                    <button className='primary-btn'>
                        GET START NOW <i className='fa fa-long-arrow-alt-right'></i>
                    </button >
                    </Link>
                    <Link to= "/courses">
                    <button >
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                </Link>
                </div>
            </div>
        </div>
    </section>
    <div className='margin'></div>
    </>
)
}

export default Hero