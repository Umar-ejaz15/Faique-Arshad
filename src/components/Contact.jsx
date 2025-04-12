import React from 'react'

const Contact = () => {
  return (
    <div className="bg-black w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make Spam Folders Jealous?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's analyze your current strategy and identify gaps — no jargon, just actionable insights.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-black bg-purple-500 hover:bg-purple-400 rounded-full transition-colors duration-300"
          >
            Schedule a Free 30-Minute Audit →
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact