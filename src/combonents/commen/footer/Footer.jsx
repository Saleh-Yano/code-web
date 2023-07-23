import React from 'react'
import './footer.css'
import { blog } from '../../../dummydata'
import { Link } from 'react-router-dom'

const Footer = () => {
return (
    <>
    <section className='newletter'>
        <div className='container flexSB'>
        <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
        </div>
        <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
        </div>
        </div>
    </section>
    <footer>
        <div className='container padding'>
        <div className='box logo'>
            <Link to= "/">
            <h1 className='dark'>FRIST CODE</h1>
            </Link>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
        </div>
        <div className='box link'>
            <h3>Explore</h3>
            <ul>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
            <li><Link to='/journal'>Journal</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
        </div>
        <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
            <li>Terms & Conditions</li>

            <li><Link to= "/privacy">Privacy</Link></li>
            <li>Feedbacks</li>
            </ul>
        </div>
        <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
            <div className='items flexFB'>
                <div className='img'>
                <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                </span>
                <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                </span>
                <h4><a href ={val.URL} target='blank'>{val.title.slice(0, 40)}...</a></h4>
                </div>
            </div>
            ))}
        </div>
        <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
            <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
            </li>
            <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
            </li>
            <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
            </li>
            </ul>
        </div>
        </div>
    </footer>
    <div className='legal'>
        <p>
        Copyright ©2023 All rights reserved <i className='fa fa-heart'></i> 
        </p>
    </div>
    </>
)
}

export default Footer