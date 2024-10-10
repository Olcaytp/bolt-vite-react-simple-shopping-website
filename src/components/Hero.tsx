import React from 'react'

const Hero = () => {
  return (
    <div className="bg-blue-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Tools for Every Job</h1>
        <p className="text-xl mb-8">Equip yourself with the best tools in the industry</p>
        <a href="#products" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
          Shop Now
        </a>
      </div>
    </div>
  )
}

export default Hero