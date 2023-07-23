import React from 'react'
import Back from '../commen/back/Back'
import CoursesCard from './CoursesCard'
import OnlineCourses from './OnlineCourses'

const CoursesHome = () => {
  return (
    <>
    <Back title='Explore Courses' />
    <CoursesCard/>
    <OnlineCourses/>
    </>
  )
}

export default CoursesHome