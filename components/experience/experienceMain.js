export default function ExperienceMain({ currentExperience }) {
  return (
    <>
      {/* Ynldesigns Start Experience */}
      <div
        style={{
          display: currentExperience === "ynldesigns" ? "block" : "none",
        }}
      >
        <header>
          <h3 className="text-xl font-poppins text-theme-light-gray font-bold mb-1">
            Co-Founder
            <span className="text-theme-light-blue mx-3">@</span>
            <a
              href="#"
              className="font-bold hover:underline text-theme-light-blue"
            >
              Ynldesigns
            </a>
          </h3>
          <p className="text-theme-dark-gray mb-3 text-xs">
            January 2019 - Present
          </p>
        </header>
        <div>
          <p className="text-theme-dark-gray leading-relaxed mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            obcaecati tempora ex id suscipit quidem!
          </p>
          <p className="text-theme-dark-gray leading-relaxed mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            obcaecati tempora ex id suscipit quidem!
          </p>
          <p className="text-theme-dark-gray leading-relaxed mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            obcaecati tempora ex id suscipit quidem!
          </p>
        </div>
      </div>

      {/* Ynldesigns End Experience */}

      {/* Infiswift Start Experience */}
      <div
        style={{
          display: currentExperience === "infiswift" ? "block" : "none",
        }}
      >
        <header>
          <h3 className="text-xl font-poppins text-theme-light-gray font-bold mb-1">
            Software Engineer
            <span className="text-theme-light-blue mx-3">@</span>
            <a
              href="#"
              className="font-bold hover:underline text-theme-light-blue"
            >
              Infiswift
            </a>
          </h3>
          <p className="text-theme-dark-gray mb-3 text-xs">
            March 2019 - August 2020
          </p>
        </header>
        <div>
          <p className="text-theme-dark-gray leading-relaxed mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            obcaecati tempora ex id suscipit quidem!
          </p>
          <p className="text-theme-dark-gray leading-relaxed mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            obcaecati tempora ex id suscipit quidem!
          </p>
          <p className="text-theme-dark-gray leading-relaxed mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            obcaecati tempora ex id suscipit quidem!
          </p>
        </div>
      </div>
      {/* Ynldesigns End Experience */}

      {/* Proterra Start Experience */}
      <div
        style={{
          display: currentExperience === "proterra" ? "block" : "none",
        }}
      >
        <header>
          <h3 className="text-xl font-poppins text-theme-light-gray font-bold mb-1">
            Software Engineer
            <span className="text-theme-light-blue mx-3">@</span>
            <a
              href="#"
              className="font-bold hover:underline text-theme-light-blue"
            >
              Proterra
            </a>
          </h3>
          <p className="text-theme-dark-gray mb-3 text-xs">
            August 2020 - Current
          </p>
        </header>
        <div>
          <p className="text-theme-dark-gray leading-relaxed mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            obcaecati tempora ex id suscipit quidem!
          </p>
          <p className="text-theme-dark-gray leading-relaxed mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            obcaecati tempora ex id suscipit quidem!
          </p>
          <p className="text-theme-dark-gray leading-relaxed mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            obcaecati tempora ex id suscipit quidem!
          </p>
        </div>
      </div>
      {/* Proterra End Experience */}
    </>
  );
}
