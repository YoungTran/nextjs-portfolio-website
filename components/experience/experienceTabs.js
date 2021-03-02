export default function ExperienceTabs({
  currentExperience,
  handleSetExperience,
}) {
  return (
    <div className="flex flex-row sm:flex-col walterTurncoat sm:space-y-3">
      <a
        href="#ynldesigns"
        className={`${
          currentExperience === "ynldesigns"
            ? "border-theme-light-blue text-theme-light-blue"
            : "border-none text-theme-dark-blue"
        } px-4 py-4 hover:bg-theme-light-gray hover:bg-opacity-25 text-theme-dark-blue text-lg border-b-2`}
        onClick={() => {
          handleSetExperience("ynldesigns");
        }}
      >
        Ynldesigns
      </a>
      <a
        href="#infiswift"
        className={`${
          currentExperience === "infiswift"
            ? "border-theme-light-blue text-theme-light-blue"
            : "border-none text-theme-dark-blue"
        } px-4 py-4 hover:bg-theme-light-gray hover:bg-opacity-25 text-lg border-b-2`}
        onClick={() => {
          handleSetExperience("infiswift");
        }}
      >
        Infiswift
      </a>
      <a
        href="#proterra"
        className={`${
          currentExperience === "proterra"
            ? "border-theme-light-blue text-theme-light-blue"
            : "border-none text-theme-dark-blue"
        } px-4 py-4  hover:bg-theme-light-gray hover:bg-opacity-25 text-theme-dark-blue text-lg border-b-2`}
        onClick={() => {
          handleSetExperience("proterra");
        }}
      >
        Proterra
      </a>
    </div>
  );
}
