import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

const products = [
  { id: 1, name: 'Vintage Leather Jacket', price: 89.99, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', condition: 'Good', description: 'A classic leather jacket with a vintage look. Perfect for any casual outfit.', sellerId: '2', sellerName: 'Jane Smith' },
  { id: 2, name: 'Retro Record Player', price: 129.99, image: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', condition: 'Excellent', description: 'Bring back the golden age of music with this retro record player. Great sound quality and stylish design.', sellerId: '3', sellerName: 'Bob Johnson' },
  { id: 3, name: 'Antique Wooden Chair', price: 59.99, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', condition: 'Fair', description: 'Add a touch of history to your home with this antique wooden chair. Comfortable and full of character.', sellerId: '4', sellerName: 'Alice Brown' },
]

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const { user } = useAuth()
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')
  const product = products.find(p => p.id === Number(id))

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to submit review
    console.log('Review submitted:', { rating, review })
    setRating(0)
    setReview('')
  }

  const handleContactSeller = () => {
    // TODO: Implement messaging functionality
    console.log('Contacting seller:', product?.sellerName)
  }

  if (!product) {
    return <div className="container mx-auto px-4 py-16">Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-blue-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-4">Condition: {product.condition}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-gray-600 mb-4">Seller: {product.sellerName}</p>
          <div className="flex space-x-4 mb-6">
            <button 
              onClick={() => addToCart({ ...product, quantity: 1 })}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleContactSeller}
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300"
            >
              Contact Seller
            </button>
          </div>
          {user && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
              <form onSubmit={handleSubmitReview}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Rating</label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  >
                    <option value="0">Select rating</option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Review</label>
                  <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
                  Submit Review
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail