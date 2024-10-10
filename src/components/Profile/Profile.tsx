import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Profile = () => {
  const { user } = useAuth()

  if (!user) {
    return <div>Please log in to view your profile.</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Seller Status:</strong> {user.isSeller ? 'Seller' : 'Buyer'}</p>
        {!user.isSeller && (
          <Link to="/become-seller" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
            Become a Seller
          </Link>
        )}
        {user.isSeller && (
          <Link to="/list-item" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition duration-300">
            List New Item
          </Link>
        )}
      </div>
    </div>
  )
}

export default Profile