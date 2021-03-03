import { Fade } from "@material-ui/core";
import useFadeIn from "../../hooks/useFadeIn";

export default function Hero() {
  const { isMounted } = useFadeIn();
  return (
    <section id="hero">
      <Fade in={true} timeout={{ enter: 4000 }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-0 text-center flex-col items-center pt-80 pb-40 space-y-7 walterTurncoat">
          <h1 className="text-theme-regular-white  text-4xl sm:text-7xl font-bold leading-relaxed">
            Young Tran
          </h1>

          <div className="w-full py-6">
            <h2 className="sm:text-3xl text-theme-regular-white  leading-relaxed">
              Software engineer based in the Bay Area
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-block text-theme-regular-white hover:border-theme-azure-blue hover:bg-theme-azure-blue  px-4 py-2 border border-theme-dark-blue rounded bg-theme-light-blue text-2xl"
          >
            Get In Touch
          </a>
        </div>
      </Fade>
    </section>
  );
}
