import React from "react";

const About = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="w-full h-[80vh] justify-center items-center flex flex-col mx-auto container">
        <div>
          <h1 className="text-7xl w-2/3 font-bold mb-4 bg-gradient-to-r from-purple-300 to-white text-transparent bg-clip-text">
            Turning <span className="font-extrabold">Prospects</span> Into{" "}
            <span className="font-extrabold">Hot Leads</span> (Just Like Your
            Latte ☕)
          </h1>
          <h2 className="text-2xl mb-8 text-purple-300">
            <span className="font-bold">Email Campaigns</span> &{" "}
            <span className="font-bold">Lead Generation</span> That Deliver{" "}
            <span className="font-bold">Results</span> — Not Empty Promises.
          </h2>
        </div>
        <div className="w-full ">
          <button className="bg-purple-500 text-white px-6 py-3 rounded-lg mb-12 hover:bg-purple-600 transition-colors font-bold">
            Let's Make Your Inbox Famous →
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;