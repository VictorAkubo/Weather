import React from 'react'
import Hero from '../Component/hero/Hero'
import Popular from '../Component/Popular/Popular'
import Offers from '../Component/offers/Offers'
import NewCollections from '../Component/newCollections/NewCollections'
import NewsLetter from '../Component/newsLetter/NewsLetter'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop