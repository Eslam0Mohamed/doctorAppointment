import React from 'react'
import { Link } from 'react-router-dom'
import bg from "../assets/images/doctors_2.jfif"
const Home = () => {
  return (
    <>
      <section style={{ 
        backgroundImage:`linear-gradient( rgba(14,165,233,0.35),
      rgba(2,132,199,0.1)),url(${bg})`}} className='bg-cover bg-no-repeat bg-center min-h-screen'>
        <div className='h-screen content flex gap-2 flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold text-main'>welcome to our clinic</h1>
          <p className='text-black/70 text-2xl font-semibold max-w-7xl text-center'>Experience world-class medical services with state-of-the-art technology and compassionate care tailored to your unique health needs.</p>
          <div>
            <Link to={"/appointments"} className='block hover:scale-105 hover:transition-all mt-6 hover:duration-300 hover:text-main hover:bg-tertiary  px-8 py-2 rounded-md bg-main text-white font-semibold '>Book an appointment</Link>
            {/* <Link to={"/appointment"} className=''>Book an appointment</Link> */}
          </div>
        </div>

      </section>
    </>
  )
}

export default Home
