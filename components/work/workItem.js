import React from "react";

export default function WorkItem({ project, id }) {
  const { name, imgSrc, technologies, description } = project;
  const isEven = id % 2;

  return (
    <>
      {isEven ? (
        <div className="flex flex-wrap items-center bg-theme-dark-blue p-8 rounded mb-8">
          <div className="w-full sm:w-1/2  z-10">
            <div className="text-left">
              <p className="text-theme-light-blue text-sm font-poppins">
                Featured Project
              </p>
              <p className="text-theme-light-gray text-2xl font-poppins font-extrabold mb-2">
                {name}
              </p>
            </div>
            <div className="bg-gray-900 rounded p-6 shadow-xl ml-0 sm:-mr-16 mb-6">
              <p className="text-theme-light-gray leading-relaxed text-sm">
                {description}
              </p>
            </div>
            <div className="text-right">
              <ul className="flex space-x-5 justify-start text-theme-dark-gray">
                {technologies.map((tech, i) => (
                  <li key={i} className="text-md walterTurncoat">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full sm:w-1/2">
            <img
              src={imgSrc}
              alt="rightProjectImage"
              className="rounded shadow opacity-50 hover:opacity-100"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap items-center bg-theme-dark-blue p-8 rounded mb-8">
          <div className="w-full sm:w-1/2">
            <img
              src={imgSrc}
              alt="leftProjectImage"
              className="rounded shadow opacity-50 hover:opacity-100"
            />
          </div>

          <div className="w-full sm:w-1/2 z-10">
            <div className="text-right">
              <p className="text-theme-light-blue text-sm font-poppins">
                Featured Project
              </p>
              <p className="text-theme-light-gray text-2xl font-poppins font-extrabold mb-2">
                {name}
              </p>
            </div>
            <div className="bg-gray-900 rounded p-6 shadow-xl ml-0 sm:-ml-16 mb-6">
              <p className="text-theme-light-gray leading-relaxed text-sm">
                {description}
              </p>
            </div>
            <div className="text-right">
              <ul className="flex space-x-5 justify-end text-theme-dark-gray">
                {technologies.map((tech, i) => (
                  <li key={i} className="text-md walterTurncoat">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
