import React from "react";
import WorkItem from "./workItem";
import WorkSlider from "./workSlider";

const projectShowcases = [
  {
    name: "Fractol",
    imgSrc: "/fractol.png",
    description:
      "Discover 2D programming and the psychedelic universe of fractals, this project involved implementing the mandelbrot, julia, and burningship equations to visualize beautiful fractals.",
    technologies: ["C", "OpenGL", "Linux"],
  },
  {
    name: "Wolf3d",
    imgSrc: "/wolf3d.gif",
    description:
      "Worked closely with another engineer to break down steps for this project which included raycasting, player movement, collision detection, and fundamental understanding of the game loop using the C Language, and miniLibx, a subset of OpenGL resulting in perfect score",
    technologies: ["C", "OpenGL", "Raycasting"],
  },
  {
    name: "Fyyur",
    imgSrc: "/fyyur.png",
    description:
      "Fyyur is a musical venue and artist booking site that facilitates the discovery and bookings of shows between local performing artists and venues. This site lets you list new artists and venues, discover them, and list shows with artists as a venue owner.",
    technologies: ["Python", "HTML", "CSS"],
  },
];

export default function Work({ repos }) {
  return (
    <section id="work" className="py-10 my-10 walterTurncoat">
      <div className="max-w-5xl mx-auto px-6 sm:px-0 ">
        <header className="mb-16">
          <h3 className="text-2xl font-poppins text-theme-light-gray font-extrabold">
            <span className="roman-numeral">&#8546;.</span>Software I've Created
          </h3>
        </header>
        {projectShowcases.map((project, i) => {
          return <WorkItem project={project} key={i} id={i} />;
        })}
      </div>
      <div className="max-w-5xl mx-auto px-6 sm:px-0 py-16 walterTurncoat">
        <header className="mb-16">
          <h3 className="text-2xl font-poppins text-theme-light-gray font-extrabold text-center">
            Other Noteworthy Projects
          </h3>
        </header>
        <WorkSlider repos={repos} />
      </div>
    </section>
  );
}
