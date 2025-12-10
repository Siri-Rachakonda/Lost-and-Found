import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LostItemsPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    itemType: '',
    location: '',
    date: ''
  })

  // Sample lost items data
  const lostItems = [
    {
      id: 1,
      name: 'Blue Wallet',
      color: 'Blue',
      dateLost: '12 Dec 2024',
      location: 'Library - 2nd Floor',
      image: '🎒',
      description: 'Leather wallet with ID cards'
    },
    {
      id: 2,
      name: 'AirPods Pro',
      color: 'White',
      dateLost: '15 Dec 2024',
      location: 'Cafeteria',
      image: '🎧',
      description: 'White AirPods with charging case'
    },
    {
      id: 3,
      name: 'Notebook',
      color: 'Red',
      dateLost: '10 Dec 2024',
      location: 'Main Building - Room 301',
      image: '📓',
      description: 'Red spiral notebook with lecture notes'
    },
    {
      id: 4,
      name: 'Water Bottle',
      color: 'Black',
      dateLost: '18 Dec 2024',
      location: 'Gym',
      image: '💧',
      description: 'Insulated black water bottle'
    },
    {
      id: 5,
      name: 'Keys',
      color: 'Silver',
      dateLost: '14 Dec 2024',
      location: 'Parking Lot B',
      image: '🔑',
      description: 'Set of keys with blue keychain'
    },
    {
      id: 6,
      name: 'Umbrella',
      color: 'Blue',
      dateLost: '11 Dec 2024',
      location: 'Student Center',
      image: '☂️',
      description: 'Compact blue umbrella'
    }
  ]

  const handleReportAsMine = (item) => {
    setSelectedItem(item)
    setIsDrawerOpen(true)
  }

  const handleClaimSubmit = (e) => {
    e.preventDefault()
    console.log('Claim submitted for:', selectedItem)
    setIsDrawerOpen(false)
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
              <Link to="/lost-items" className="text-indigo-600 font-medium">Lost Items</Link>
              <Link to="/found-items" className="text-gray-700 hover:text-indigo-600 font-medium">Found Items</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Lost Items</h1>
          <p className="text-gray-600">Browse items that students have reported as lost</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search lost items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none shadow-sm"
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <select
            value={filters.itemType}
            onChange={(e) => setFilters({ ...filters, itemType: e.target.value })}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="">All Item Types</option>
            <option value="electronics">Electronics</option>
            <option value="accessories">Accessories</option>
            <option value="books">Books & Stationery</option>
            <option value="clothing">Clothing</option>
          </select>

          <select
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="">All Locations</option>
            <option value="library">Library</option>
            <option value="cafeteria">Cafeteria</option>
            <option value="gym">Gym</option>
            <option value="main-building">Main Building</option>
          </select>

          <select
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="">All Dates</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lostItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden">
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 h-48 flex items-center justify-center text-6xl">
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
                    <span className="font-semibold">Lost on:</span> {item.dateLost}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Location:</span> {item.location}
                  </p>
                </div>
                
                <button
                  onClick={() => handleReportAsMine(item)}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-md"
                >
                  Report This as Mine
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Drawer for Claim Form */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsDrawerOpen(false)}></div>
          
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform">
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="bg-indigo-600 text-white p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Claim Item</h2>
                  <button onClick={() => setIsDrawerOpen(false)} className="text-white hover:text-gray-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                {selectedItem && (
                  <p className="mt-2 text-indigo-100">Claiming: {selectedItem.name}</p>
                )}
              </div>

              {/* Form */}
              <div className="flex-1 overflow-y-auto p-6">
                <form onSubmit={handleClaimSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                      placeholder="your.email@college.edu"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                    <textarea
                      rows="4"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                      placeholder="Provide details to verify ownership..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
                  >
                    Submit Claim
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LostItemsPage