import React from "react";

const About2 = () => {
  const cards = [
    {
      title: "99%",
      subtitle: "Growth",
      description: "Elevated engagement through strategic outreach"
    },
    {
      title: "40%+",
      subtitle: "Opens",
      description: "Industry-leading email open rates"
    },
    {
      title: "100%",
      subtitle: "Results",
      description: "Guaranteed performance improvement"
    }
  ];

  return (
    <div className="bg-black py-8 sm:py-12 md:py-16">
         <h2 className="text-4xl font-bold text-center mb-12 text-purple-500">
        About Me
      </h2>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8 sm:mb-12 md:mb-16 space-y-4 sm:space-y-6 md:space-y-8">
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-gray-200 hover:text-purple-300 transition-colors">
            Hi, I'm <span className="font-bold text-purple-400">Muhammad Faique Arshad</span>. Your Lead Gen & Email Whisperer
            <span className="animate-pulse">✨</span>
          </p>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-200 hover:text-purple-300 transition-colors">
            I help businesses turn icy-cold leads into loyal clients through powerful automation and compelling communication. 
            My secret? Crafting messages that resonate on a human level while leveraging cutting-edge tech 
            <span className="animate-bounce inline-block">🚀</span>
          </p>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-200 hover:text-purple-300 transition-colors">
            With 3+ years mastering B2B sales and lead generation, I've revolutionized pipelines for tech startups, 
            agencies, and freelancers. My approach combines data-driven strategies with authentic storytelling to deliver 
            exceptional results <span className="animate-pulse">💫</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {cards.map((card, index) => (
            <div key={index} className="transform hover:scale-105 transition-transform duration-300 border-2 border-purple-500 p-4 sm:p-5 md:p-6 rounded-3xl bg-purple-900/30 backdrop-blur-lg shadow-lg hover:shadow-purple-500/50">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-purple-400 flex items-center gap-2">
                {card.title} <span className="text-xs sm:text-sm">{card.subtitle}</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-200">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="w-full sm:w-auto bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-lg hover:bg-purple-700 hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 mb-6 sm:mb-8">
            Schedule Your Free Strategy Session →
          </button>

          <p className="text-base sm:text-lg text-purple-300 font-light italic">
            Let's craft your success story together ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;