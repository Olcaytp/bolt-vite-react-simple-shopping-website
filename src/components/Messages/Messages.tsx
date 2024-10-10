import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

type Message = {
  id: string
  senderId: string
  receiverId: string
  content: string
  timestamp: Date
}

const Messages = () => {
  const { user } = useAuth()
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')

  // TODO: Implement API call to fetch messages

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim() === '') return

    // TODO: Implement API call to send message
    const message: Message = {
      id: Date.now().toString(),
      senderId: user?.id || '',
      receiverId: 'someReceiverId', // This should be dynamically set based on the conversation
      content: newMessage,
      timestamp: new Date()
    }

    setMessages([...messages, message])
    setNewMessage('')
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Messages</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="h-96 overflow-y-auto mb-4">
          {messages.map((message) => (
            <div key={message.id} className={`mb-2 ${message.senderId === user?.id ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-2 rounded-lg ${message.senderId === user?.id ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                {message.content}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {message.timestamp.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage}>
          <div className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Type a message..."
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Messages