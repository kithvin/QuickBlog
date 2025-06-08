import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <BlogList/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Home