import React from 'react'

const Contact = () => {
  return (
    <div className="bg-black w-full py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Make Spam Folders Jealous?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Let's analyze your current strategy and identify gaps — no jargon, just actionable insights.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium text-black bg-purple-500 hover:bg-purple-400 rounded-full transition-colors duration-300"
          >
            Schedule a Free 30-Minute Audit →
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact