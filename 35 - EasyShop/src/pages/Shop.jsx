import React from 'react'
import Main from '../components/Main_banner/Main'
import Popo from '../components/popular_items/Populars'
import Offer from '../components/offers/Offer'
import Newcollection from '../components/NewCollection/Newcollection'
import NewsLetter from '../components/NewsLEtter/NewsLetter'
import Footer from '../components/Footer/Footer'

const shop = () => {
  return (
    <div>
      <Main/>
 <Popo/>
 <Offer/>
 <Newcollection/>
 <NewsLetter/>
 <Footer/>

    </div>
  )
}

export default shop
