import Marquee from "react-fast-marquee";

function WhatWeDo() {
  const scrollText = () => {
    document.querySelector(".subteamscroll").classList.add("hidden");
    document.querySelector(".subteammarquee").classList.remove("hidden");
  };

  const stopScrollText = () => {
    document.querySelector(".subteamscroll").classList.remove("hidden");
    document.querySelector(".subteammarquee").classList.add("hidden");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center w-full bg-codePurple px-4 sm:px-8 py-6">
      <div className="mb-6 sm:mb-0 sm:m-5 h-auto sm:h-[50vh] w-full sm:w-[47vw] flex-shrink-0 rounded-lg flex justify-center items-center text-white text-center">
        <h1 className="font-kode font-bold text-white text-5xl sm:text-7xl md:text-9xl">
          Our Subteams
        </h1>
      </div>

      <div className="m-3 sm:m-5 bg-codePurple w-full sm:w-[47vw] min-h-[40vh] sm:h-[50vh] flex-shrink-0 rounded-lg border-white border-2 flex flex-col justify-center items-center text-white text-lg sm:text-xl p-4 sm:p-6">
        <p className="text-center sm:text-left">
          5827 is split into many different subteams, all playing an equal part
          in our success.
          <br />
          <br />
          Some of these subteams are:
        </p>
        <ul className="mt-3 text-left">
          <li><strong>Computer Assisted Design</strong> - Designing our robot</li>
          <li><strong>Electronics</strong> - Wiring the robot</li>
          <li><strong>Programming</strong> - Coding the robot</li>
          <li>And more!</li>
        </ul>

        <div className="w-full h-auto flex justify-center">
            <a
              onMouseEnter={scrollText}
              onMouseLeave={stopScrollText}
              className="w-96 py-4 my-6 mx-2 font-bold text-xl border-white border-4 rounded-full text-white hover:bg-white hover:text-codePurple hover:border-codePurple transition-all duration-300 flex justify-center items-center text-center"
              href="/subteam"
            >
              <p className="subteamscroll visible">
                Learn more about our subteams!
              </p>
              <div className="subteammarquee hidden w-full">
                <Marquee velocity={50} autoFill direction="left">
                  <p className="mx-2">Subteams</p>
                </Marquee>
              </div>
            </a>
          </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
