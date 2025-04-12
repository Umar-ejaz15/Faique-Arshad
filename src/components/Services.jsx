import React from 'react'

const Services = () => {
  const services = [
    {
      title: "The Prospect Whisperer",
      icon: "👁️‍🗨️",
      description: "I hunt down your dream clients like a heat-seeking missile (but way less creepy).",
      tools: ["Apollo.io", "Lusha", "LinkedIn Sales Nav"]
    },
    {
      title: "Inbox Houdini",
      icon: "🎩",
      description: "Making your emails magically appear in replies instead of spam folders. Cold emails that act like a sniper – precise, data-backed, and designed to hit the inbox bullseye.",
      tools: ["Instantly.ai", "Mailchimp", "Lemlist", "SmartWriter"]
    },
    {
      title: "LinkedIn Wingman",
      icon: "🤝",
      description: "DMs that feel like a handshake, not a spammy billboard. Build connections, not just contacts.",
      tools: ["Expandi", "Taplio", "Dripify"]
    },
    {
      title: "CRM Zen Master",
      icon: "🧘",
      description: "Transforming your CRM chaos into organized nirvana (namaste, messy pipelines).",
      tools: ["Salesforce", "HubSpot", "Notion"]
    },
    {
      title: "Bot Butler",
      icon: "🤖",
      description: "Your 24/7 digital assistant who never calls in sick (or asks for coffee breaks). Your digital assistant – handling follow-ups, data entry, and alerts while you focus on closing.",
      tools: ["Zapier", "Make.com", "Notion"]
    },
    {
      title: "Client Conductor",
      icon: "🎻",
      description: "Orchestrating your client relationships like a symphony (no off-key notes allowed).",
      tools: ["Notion", "Trello", "Slack", "Calendly"]
    },
    {
      title: "Upwork Alchemist",
      icon: "⚗️",
      description: "Turning your proposals into lead gold (RIP, generic proposals).",
      tools: ["Upwork Pro", "Grammarly", "Canva"]
    },
    {
      title: "Analytics Expert",
      icon: "📊",
      description: "Turning raw data into actionable insights. Making numbers tell compelling stories that drive decisions.",
      tools: ["Google Analytics", "Mixpanel", "Tableau", "Power BI"]
    }
  ]

  return (
    <div className="mx-auto px-4 py-16 bg-black flex justify-center">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-500">Stuff I'm Really Good At</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {services.map((service, index) => (
            <div className="relative group w-80 h-80 bg-purple-100 rounded-full shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-500 hover:scale-105" key={index}>
              <div className="absolute inset-0">
                <div className="absolute inset-0 flex flex-col items-center justify-center  transform transition-transform duration-500 group-hover:-translate-x-full">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-center text-black">{service.title}</h3>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-purple-800 text-white transform transition-transform duration-500 translate-x-full group-hover:translate-x-0">
                  <p className="text-sm text-center mb-4">{service.description}</p>
                  <div className="w-full">
                    <h4 className="font-semibold mb-2">Tools:</h4>
                    <ul className="flex flex-wrap justify-center gap-2">
                      {service.tools.map((tool, idx) => (
                        <li key={idx} className="text-xs bg-purple-950 px-2 py-1 rounded-xl">{tool}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services