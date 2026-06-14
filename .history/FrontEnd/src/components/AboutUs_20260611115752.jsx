import React from 'react'
import about from "../assets/images/aboutUs.jfif"
const AboutUs = () => {
    return (
        <>
            <section className='bg-tertiary py-12'>
                <div className='container w-10/12 mx-auto '>
                <div className="text-center py-10">
                    <h2 className='heading'>About Us</h2>
                    <p className='heading-description'>Learn More about our clinic and our commitment to provideing exceptionel healthcare</p>
                </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className='img overflow-hidden rounded-md'>
                            <img src={about} alt="about us image " />
                        </div>
                        <div className='content'>
                            <h3 className='text-2xl font-bold text-main mb-4'>Our Mission</h3>
                            <p className='text-black/70 mb-6'>Our mission is to provide compassionate, high-quality healthcare services that improve the lives of our patients and their families. We are dedicated to delivering personalized care, utilizing advanced medical technology, and fostering a supportive environment for both patients and staff.</p>
                            <h3 className='text-2xl font-bold text-main mb-4'>Our Vision</h3>
                            <p className='text-black/70 mb-6'>Our vision is to be a leading healthcare provider recognized for excellence in patient care, innovation, and community engagement. We strive to create a healthier future by continuously improving our services, embracing new technologies, and fostering a culture of compassion and respect.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
