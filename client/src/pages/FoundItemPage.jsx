import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FoundItemPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [filters, setFilters] = useState({
    category: '',
    building: '',
    date: ''
  })

  // Sample found items data
  const foundItems = [
    {
      id: 1,
      name: 'iPhone 13',
      color: 'Black',
      foundOn: '16 Dec 2024',
      location: 'Library - Study Room 3',
      image: '📱',
      description: 'Black iPhone with blue case'
    },
    {
      id: 2,
      name: 'Laptop Charger',
      color: 'White',
      foundOn: '17 Dec 2024',
      location: 'Computer Lab',
      image: '🔌',
      description: 'MacBook Pro charger'
    },
    {
      id: 3,
      name: 'Student ID Card',
      color: 'Blue/White',
      foundOn: '13 Dec 2024',
      location: 'Cafeteria',
      image: '🎫',
      description: 'Student ID with photo'
    },
    {
      id: 4,
      name: 'Backpack',
      color: 'Gray',
      foundOn: '19 Dec 2024',
      location: 'Gym Locker Room',
      image: '🎒',
      description: 'Gray Nike backpack with books'
    },
    {
      id: 5,
      name: 'Sunglasses',
      color: 'Black',
      foundOn: '15 Dec 2024',
      location: 'Student Center',
      image: '🕶️',
      description: 'Ray-Ban style sunglasses'
    },
    {
      id: 6,
      name: 'Watch',
      color: 'Silver',
      foundOn: '12 Dec 2024',
      location: 'Basketball Court',
      image: '⌚',
      description: 'Silver digital watch'
    }
  ]

  const handleFileClaim = (item) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleClaimSubmit = (e) => {
    e.preventDefault()
    console.log('Claim filed for:', selectedItem)
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-indigo-700">CampusConnect</Link>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
              <Link to="/lost-items" className="text-gray-700 hover:text-indigo-600 font-medium">Lost Items</Link>
              <Link to="/found-items" className="text-indigo-600 font-medium">Found Items</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Filters</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  >
                    <option value="">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="accessories">Accessories</option>
                    <option value="documents">Documents</option>
                    <option value="clothing">Clothing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Building</label>
                  <select
                    value={filters.building}
                    onChange={(e) => setFilters({ ...filters, building: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  >
                    <option value="">All Buildings</option>
                    <option value="library">Library</option>
                    <option value="main">Main Building</option>
                    <option value="cafeteria">Cafeteria</option>
                    <option value="gym">Gym</option>
                    <option value="student-center">Student Center</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date Found</label>
                  <select
                    value={filters.date}
                    onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  >
                    <option value="">Any Date</option>
                    <option value="today">Today</option>
                    <option value="yesterday">Yesterday</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                  </select>
                </div>

                <button
                  onClick={() => setFilters({ category: '', building: '', date: '' })}
                  className="w-full text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Found Items</h1>
              <p className="text-gray-600">Items that have been found and are waiting to be claimed</p>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {foundItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="bg-gradient-to-br from-purple-100 to-indigo-100 h-48 flex items-center justify-center text-6xl">
                    {item.image}
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Color:</span> {item.color}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Found on:</span> {item.foundOn}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Location:</span> {item.location}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => handleFileClaim(item)}
                      className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-md"
                    >
                      File Claim
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Claim Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-purple-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">File Claim</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-white hover:text-gray-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {selectedItem && (
                <p className="mt-2 text-purple-100">Item: {selectedItem.name}</p>
              )}
            </div>

            {/* Modal Form */}
            <form onSubmit={handleClaimSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="your.email@college.edu"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Proof of Ownership</label>
                <textarea
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="Describe unique features or provide details to verify ownership..."
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg"
                >
                  Submit Claim
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default FoundItemPage