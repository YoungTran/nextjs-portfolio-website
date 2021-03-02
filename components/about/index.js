import AboutBody from "./aboutBody";
import AboutPic from "./aboutPic";
import SkillList from "./skillList";

export default function About() {
  return (
    <section id="about" className="py-20 my-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-0">
        <header className="mb-16">
          <h3 className="text-2xl font-poppins text-theme-light-gray font-bold">
            <span className="roman-numeral">&#8544;.</span>
            Who am I
          </h3>
        </header>
        <div className="flex flex-wrap items-center">
          <div className="w-full sm:w-1/2 order-last sm:order-first">
            <AboutBody />
            <SkillList />
          </div>
          <AboutPic />
        </div>
      </div>
    </section>
  );
}
