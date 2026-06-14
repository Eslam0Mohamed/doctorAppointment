import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section style={{backgroundImage:".../assets/images"}} className=''>
<div className='content '>
  <h1>welcome to our clinic</h1>
  <p>Experience world-class medical services with state-of-the-art technology and compassionate care tailored to your unique health needs.</p>
<div>
  <Link to={"/appointment"} className=''>Book an appointment</Link>
  {/* <Link to={"/appointment"} className=''>Book an appointment</Link> */}
</div>
</div>

      </section>
    </>
  )
}

export default Home
