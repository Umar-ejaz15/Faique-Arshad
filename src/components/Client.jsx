import React from 'react'

const clientData = [
  {
    quote: "Faique's emails got us replies from CEOs who never answer cold outreach. Witchcraft? Maybe. Worth it? Absolutely.",
    client: "Client 1",
    role: "Tech Startup CEO"
  },
  {
    quote: "He turned our cringe-worthy drafts into pure gold. 10/10 would recommend (unless he's booked—then back off).",
    client: "Client 2",
    role: "Marketing Director"
  },
  {
    quote: "Faique's campaigns helped us secure meetings with 3 enterprise clients we'd been chasing for months. His process is systematic and transparent.",
    client: "Client A",
    role: "SaaS Founder"
  },
  {
    quote: "He transformed our outreach from 'spray and pray' to a targeted strategy. Our lead quality improved dramatically.",
    client: "Client B",
    role: "Marketing Agency Owner"
  }
]

const Client = () => {
  return (
    <div className="bg-black py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-purple-500 text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">What Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {clientData.map((item, index) => (
            <div key={index} className="bg-black h-auto sm:h-[40vh] md:h-[50vh] p-4 sm:p-6 md:p-8 shadow-lg border-2 border-gray-800 hover:border-gray-600 transition-all duration-300">
              <div className="h-full flex flex-col justify-between">
                <p className="text-white text-lg sm:text-xl md:text-2xl italic leading-relaxed">"{item.quote}"</p>
                <div>
                  <p className="text-white font-semibold text-base sm:text-lg">{item.client}</p>
                  <p className="text-gray-400 text-sm sm:text-base">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Client