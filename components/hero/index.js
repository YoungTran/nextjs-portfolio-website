import { Fade } from "@material-ui/core";
import useFadeIn from "../../hooks/useFadeIn";

export default function Hero() {
  const { isMounted } = useFadeIn();
  return (
    <section id="hero" className="h-auto">
      <Fade in={true} timeout={{ enter: 4000 }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-0 text-center flex-col items-center pt-80 pb-32">
          <h1 className="text-theme-regular-white mb-10 text-4xl sm:text-7xl font-bold leading-relaxed">
            Young Tran
          </h1>

          <div className="w-full">
            <p className="sm:text-3xl text-theme-regular-white  leading-relaxed">
              I’m a software engineer based in the Bay Area.
            </p>
            <p className="sm:text-3xl text-theme-regular-white mb-10 leading-relaxed">
              Developing software that helps people is my speciality.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-block text-theme-regular-white hover:border-theme-light-blue hover:bg-theme-light-gray  px-6 py-4 border border-theme-dark-blue rounded bg-theme-light-blue text-xl"
          >
            Get In Touch
          </a>
        </div>
      </Fade>
    </section>
  );
}
