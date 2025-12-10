import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-700">CampusConnect</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
              <Link to="/lost-items" className="text-gray-700 hover:text-indigo-600 font-medium">Lost Items</Link>
              <Link to="/found-items" className="text-gray-700 hover:text-indigo-600 font-medium">Found Items</Link>
            </div>
            <div className="flex space-x-4">
              <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">Login</Link>
              <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Smart Lost & Found for Your Campus
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Never lose track of your belongings again. CampusConnect helps students find lost items faster with AI-powered matching and instant notifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Report Lost Item
              </button>
              <button className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition shadow-md">
                Report Found Item
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-200 rounded-3xl p-12 shadow-2xl">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg transform rotate-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl">🎒</div>
                    <div>
                      <p className="font-semibold text-gray-900">Blue Backpack</p>
                      <p className="text-sm text-gray-500">Found 2 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg transform -rotate-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center text-white text-2xl">🎧</div>
                    <div>
                      <p className="font-semibold text-gray-900">AirPods Pro</p>
                      <p className="text-sm text-gray-500">Matched & Returned!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose CampusConnect?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
              🤖
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">AI-Matching</h4>
            <p className="text-gray-600">
              Our intelligent algorithm automatically matches lost and found items based on descriptions, categories, and location.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
              📍
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Location-Based Tagging</h4>
            <p className="text-gray-600">
              Tag where you lost or found items. Search by building, floor, or specific campus locations for faster recovery.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
              📱
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Instant Telegram Alerts</h4>
            <p className="text-gray-600">
              Get notified immediately when someone finds your lost item or when there's a potential match via Telegram.
            </p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-indigo-100 text-lg mb-8">Join thousands of students reuniting with their belongings every day.</p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg">
            Create Free Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home