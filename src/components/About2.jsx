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
    <div className="bg-black py-16">
      <div className="container mx-auto ">
        <div className="mb-16 space-y-8">
          <p className="text-3xl leading-relaxed text-gray-200 hover:text-purple-300 transition-colors">
            Hi, I'm <span className="font-bold text-purple-400">Muhammad Faique Arshad</span>. Your Lead Gen & Email Whisperer
            <span className="animate-pulse">✨</span>
          </p>
          <p className="text-3xl leading-relaxed text-gray-200 hover:text-purple-300 transition-colors">
            I help businesses turn icy-cold leads into loyal clients through powerful automation and compelling communication. 
            My secret? Crafting messages that resonate on a human level while leveraging cutting-edge tech 
            <span className="animate-bounce inline-block">🚀</span>
          </p>
          <p className="text-3xl leading-relaxed text-gray-200 hover:text-purple-300 transition-colors">
            With 3+ years mastering B2B sales and lead generation, I've revolutionized pipelines for tech startups, 
            agencies, and freelancers. My approach combines data-driven strategies with authentic storytelling to deliver 
            exceptional results <span className="animate-pulse">💫</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div key={index} className="transform hover:scale-105 transition-transform duration-300 border-2 border-purple-500 p-6 rounded-3xl bg-purple-900/30 backdrop-blur-lg shadow-lg hover:shadow-purple-500/50">
              <h3 className="text-23xl font-bold mb-3 text-purple-400 flex items-center gap-2">
                {card.title} <span className="text-sm">{card.subtitle}</span>
              </h3>
              <p className="text-gray-200">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-purple-700 hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 mb-8">
            Schedule Your Free Strategy Session →
          </button>

          <p className="text-lg text-purple-300 font-light italic">
            Let's craft your success story together ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;