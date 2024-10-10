import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-blue-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Next Treasure</h1>
        <p className="text-xl mb-8">Discover amazing second-hand items at unbeatable prices</p>
        <Link to="/products" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
          Start Shopping
        </Link>
      </div>
    </div>
  )
}

export default Home