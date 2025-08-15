import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import AITools from '../Components/AITools'
import Testimonial from '../Components/Testimonial'
import Plan from '../Components/Plan'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AITools/>
      <Testimonial/>
      <Plan/>
    </>
  )
}

export default Home