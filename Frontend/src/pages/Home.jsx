import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Newsletter from '../components/Newsletter'

// Main home page layout component
const Home = () => {
  return (
    <>
    {/* Top navigation */}
    <Navbar/>

    {/* Hero banner section */}
    <Header/>

    {/* List of blog posts */}
    <BlogList/>

    {/* Email subscription form */}
    <Newsletter/>
    
    {/* Page footer */}
    <Footer/>
    </>
  )
}

export default Home