import React from 'react'
import { Link } from 'react-router-dom'
import bg from "../assets/images/doctors_2.jfif"
import AboutUs from '../components/AboutUs.jsx'
import Statistics from '../components/Stati.jsx'
const Home = () => {
  return (
    <>
      <section  style={{ 
        backgroundImage:`linear-gradient( rgba(14,165,233,0.35),
      rgba(2,132,199,0.15)),url(${bg})`}} className='bg-cover bg-no-repeat bg-center min-h-screen py-12'>
        <div className='h-screen content max-w-4xl mx-auto flex gap-2 flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold text-main'>welcome to our clinic</h1>
          <p className='text-black/70 text-2xl font-semibold text-center'>Experience world-class medical services with state-of-the-art technology and compassionate care tailored to your unique health needs.</p>
          <div className="flex gap-4">
            <Link to={"/appointments"} className='btn'>Book an appointment</Link>
            <Link to={"/doctors"} className='btn bg-tertiary text-main'>View Doctors</Link>
            {/* <Link to={"/appointment"} className=''>Book an appointment</Link> */}
          </div>
        </div>

      </section>
      <AboutUs></AboutUs>
      <Statistics></Statistics>
    </>
  )
}

export default Home
