import React from 'react'
import BackBlog from '../commen/back/BackBlog'
import BlogCard from './BlogCard'
import "./blog.css"

const Blog = () => {
  return (
    <>
        <BackBlog title='Blog Posts'/>
        <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog