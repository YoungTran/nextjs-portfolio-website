import React, { useState } from "react";
import ExperienceSlider from "./ExperienceSlider";

export default function Experience() {
  const [currentExperience, setCurrentExperience] = useState("ynldesigns");
  const handleSetExperience = (value) => setCurrentExperience(value);

  return (
    <section id="experience" className="py-20 my-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-0">
        <div className="flex justify-center">
          <div className="w-full sm:w-2/3">
            <header className="mb-16">
              <h3 className="text-2xl font-poppins text-theme-light-gray font-bold">
                <span className="roman-numeral">&#8545;.</span>
                Where I've worked
              </h3>
            </header>
            <div className="flex flex-wrap">
              <ExperienceSlider />
              {/* <div className="w-full sm:w-1/6 mb-4 sm:mb-0">
                <ExperienceTabs
                  currentExperience={currentExperience}
                  handleSetExperience={handleSetExperience}
                />
              </div>

              <div className="w-full sm:w-5/6">
                <div className="px-0 sm:px-6">
                  <ExperienceMain currentExperience={currentExperience} />
                </div>
              </div>
             */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
