import { useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function WorkSlider({ repos }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: matches ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    // prevArrow: <img src="/left-arrow.svg" />,
    // nextArrow: <img src="/right-arrow.svg" />,
    arrows: false,
  };
  return (
    <Slider {...settings} className="w-full px-10">
      {repos.map((repo, i) => {
        return (
          <div className="bg-theme-dark-blue p-5" key={i}>
            <h1 className="text-theme-light-gray text-lg py-2 flex items-center justify-between">
              {repo.name
                .split("-")
                .map((str) => str.charAt(0).toUpperCase() + str.slice(1) + " ")}
              <a href={repo.html_url}>
                <i className="fa fa-github text-5xl hover:text-theme-light-blue"></i>
              </a>
            </h1>

            <p className="py-6 text-theme-dark-gray text-sm">
              {repo.description}
            </p>
            <hr className="py-2 opacity-30" />
            <div className="text-left py-3">
              <ul className="flex space-x-5 justify-start text-theme-dark-gray">
                <li>{repo.language}</li>
              </ul>
            </div>
          </div>
        );
      })}

      {/* <div className="bg-theme-dark-blue p-5">
        <h1 className="text-theme-regular-white text-lg py-2">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="py-6 text-theme-dark-gray text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta cumque
          quos maiores inventore similique quidem omnis iure reiciendis nostrum
          eligendi.
        </p>
        <hr className="py-2 opacity-30" />
        <div className="text-left py-3">
          <ul className="flex space-x-5 justify-start text-theme-dark-gray">
            <li>C</li>
            <li>Linux</li>
            <li>React</li>
          </ul>
        </div>
      </div>
      <div className="bg-theme-dark-blue p-5">
        <h1 className="text-theme-regular-white text-lg py-2">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="py-6 text-theme-dark-gray text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta cumque
          quos maiores inventore similique quidem omnis iure reiciendis nostrum
          eligendi.
        </p>
        <hr className="py-2 opacity-30" />
        <div className="text-left py-3">
          <ul className="flex space-x-5 justify-start text-theme-dark-gray">
            <li>C</li>
            <li>Linux</li>
            <li>React</li>
          </ul>
        </div>
      </div>
     */}
    </Slider>
  );
}
