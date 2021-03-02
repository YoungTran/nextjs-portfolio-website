export default function AboutPic() {
  return (
    <div className="flex w-full sm:w-1/2 items-center justify-center mb-6 sm:mb-0">
      <div className="w-2/3 flex justify-center">
        <div className="border-2 border-theme-dark-blue rounded-3xl opacity-50 hover:opacity-100">
          <img
            src="/about-image.png"
            alt="profile-pic"
            className="-mt-6 -ml-6 mb-6 w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
