import React from "react";

const projectData = [
  {
    id: 1,
    title: "Spam Folder to Spotlight",
    client: "SaaS Startup",
    result: "42%+ open rate on cold emails",
    tagline: "Proved that 'Hey Stranger' works… if you do it right.",
    image: "/bg2.webp"
  },
  {
    id: 2,
    title: "Scaling a Recruitment Startup's Pipeline",
    client: "B2B HR Company (Technical Recruiting)",
    challenge: "Low reply rates (<5%) on cold outreach",
    solution: "Revamped messaging to focus on pain points + multi-channel follow-ups",
    result: "20% reply rate, 16 hirings/month",
    image: "/bg2.webp"
  },
  {
    id: 3,
    title: "Revitalizing a Freelancer's Outreach",
    client: "UX Design Freelancer",
    challenge: "Inconsistent lead flow",
    solution: "Built a targeted prospect list + automated LinkedIn/email sequences",
    result: "10% upwork responses",
    image: "/bg2.webp"
  }
];

const Project = () => {
  return (
    <div className="w-full min-h-screen bg-black py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-500">
        PROJECTS
      </h2>

      <div className="container mx-auto px-4 space-y-12">
        {projectData.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundImage: `url('${project.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 rounded-xl overflow-hidden"
          >
            {project.id % 2 === 0 ? (
              <>
                <div className="flex h-full px-10 py-10 flex-col justify-between space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-purple-600">(0{project.id})</h2>
                    <h1 className="text-4xl font-bold text-white">{project.title}</h1>
                    <p className="text-gray-400">Client: {project.client}</p>
                    {project.challenge && <p className="text-gray-400">Challenge: {project.challenge}</p>}
                    {project.solution && <p className="text-gray-400">Solution: {project.solution}</p>}
                    <p className="text-gray-400">Result: {project.result}</p>
                    {project.tagline && <p className="text-gray-400">{project.tagline}</p>}
                  </div>
                  <div>
                    <a
                      href="#hire"
                      className="inline-block bg-purple-500 hover:bg-transparent text-black hover:text-white px-6 py-2 rounded-md transition-all duration-500 border-2 border-purple-500 font-medium"
                    >
                      View Project
                      <span className="ml-1 inline-block transform hover:translate-x-1 transition-transform duration-500">
                        →
                      </span>
                    </a>
                  </div>
                </div>
                <div className="h-[400px] md:h-[600px] transition-all duration-3000 ease-in-out p-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl hover:rounded-full transition-all duration-3000 ease-in-out"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="h-[400px] md:h-[600px] transition-all duration-3000 ease-in-out p-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl hover:rounded-full transition-all duration-3000 ease-in-out"
                  />
                </div>
                <div className="flex h-full px-10 py-10 flex-col justify-between space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-purple-600">(0{project.id})</h2>
                    <h1 className="text-4xl font-bold text-white">{project.title}</h1>
                    <p className="text-gray-400">Client: {project.client}</p>
                    {project.challenge && <p className="text-gray-400">Challenge: {project.challenge}</p>}
                    {project.solution && <p className="text-gray-400">Solution: {project.solution}</p>}
                    <p className="text-gray-400">Result: {project.result}</p>
                    {project.tagline && <p className="text-gray-400">{project.tagline}</p>}
                  </div>
                  <div>
                    <a
                      href="#hire"
                      className="inline-block bg-purple-500 hover:bg-transparent text-black hover:text-white px-6 py-2 rounded-md transition-all duration-500 border-2 border-purple-500 font-medium"
                    >
                      View Project
                      <span className="ml-1 inline-block transform hover:translate-x-1 transition-transform duration-500">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;