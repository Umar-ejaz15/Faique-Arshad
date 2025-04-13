import React from "react";

const About = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="w-full min-h-screen justify-center items-center flex flex-col md:container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl w-full  font-bold mb-4 bg-gradient-to-r from-purple-300 to-white text-transparent bg-clip-text">
            Turning <span className="font-extrabold">Prospects</span> Into{" "}
            <span className="font-extrabold">Hot Leads</span> 
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl w-full  font-bold mb-4 bg-gradient-to-r from-purple-300 to-white text-transparent bg-clip-text">
            (Just Like Your Latte ☕)
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-2xl mb-8 text-purple-300 px-2 sm:px-4 max-w-3xl">
            <span className="font-bold">Email Campaigns</span> &{" "}
            <span className="font-bold">Lead Generation</span> That Deliver{" "}
            <span className="font-bold">Results</span> — Not Empty Promises.
          </h2>
        </div>
        <div className="w-full flex justify-center px-2 sm:px-4">
          <button className="bg-purple-500 text-white text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-lg mb-12 hover:bg-purple-600 transition-colors font-bold transform hover:scale-105 duration-200">
            Let's Make Your Inbox Famous →
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;