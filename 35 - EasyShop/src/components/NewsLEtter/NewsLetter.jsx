import React from 'react'
import './NEws.css'
const NewsLetter = () => {
  return (
<section>
    <div className="container mt-lg-5 news_letter_container">
        <div className="row">
            <div className="col-lg-12 news_letter  text-center">
                <h1>Get Exclusive Offers On your Email</h1>
                <p>Subscribe  to our  newsletter and stay updated</p>
                <div className='input_field'>
                    <input type="email" placeholder='Your Email id' /><button className='subscribe_btn'>Subscribe</button>

                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default NewsLetter
