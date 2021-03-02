import React from "react";

export default function ContactBody({ setHidden, setHideContact }) {
  const handleClick = (e) => {
    e.preventDefault();
    setHidden("");
    setHideContact("hidden");
  };
  return (
    <>
      <header className="mb-3 walterTurncoat text-theme-light-blue">
        <h3 className="sm:text-md font-poppins font-bold">
          <span className="roman-numeral">&#8547;.</span>
          What's next?
        </h3>
      </header>
      <h3 className="sm:text-3xl font-poppins text-theme-regular-white mb-5">
        Get In Touch
      </h3>
      <hr className="opacity-40 mb-5" />
      <p className="text-md text-theme-light-gray max-w-md mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda amet
        sint tempore enim hic nam dicta aspernatur magnam at dolores?
      </p>
      <button
        onClick={handleClick}
        className="text-lg text-theme-regular-white bg-theme-light-blue hover:border-theme-light-gray hover:bg-theme-light-gray px-6 py-2 border border-theme-light-blue rounded"
      >
        Say Hello
      </button>
    </>
  );
}
