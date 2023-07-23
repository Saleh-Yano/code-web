import React from 'react'
import TeamCard from './TeamCard'
import "./team.css"
import BackTeam from '../commen/back/BackTeam'

const Team = () => {
  return (
    <>
        <BackTeam title="Team"/>
        <section className='team padding'>
            <div className="container grid">
                <TeamCard/>
            </div>
        </section>
    </>
  )
}

export default Team