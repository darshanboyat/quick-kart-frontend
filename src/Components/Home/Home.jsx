import Carousel from '../Carousel/Carousel'
import React from 'react'
import Categories from '../Category/Categories'
import About from '../About/About'
import Contact from '../Contact/Contact'
function Home() {
  return (
    <>
        <Carousel/>
        <Categories/>
        <About/>
        <Contact/>
    </>
  )
}

export default Home