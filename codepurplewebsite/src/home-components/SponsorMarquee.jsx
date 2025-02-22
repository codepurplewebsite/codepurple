import Marquee from "react-fast-marquee";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

import Boeing from "../assets/sponsors/Boeing-logo.png";
import Chipotle from "../assets/sponsors/Chipotle-logo.png";
import FIRSTWA from "../assets/sponsors/FIRSTWA-logo.png";
import Lego from "../assets/sponsors/Lego-logo.png";
import LWHS from "../assets/sponsors/LWHS-logo.png";
import Microsoft from "../assets/sponsors/Microsoft-logo.png";
import Mod from "../assets/sponsors/Mod-logo.png";
import OSPI from "../assets/sponsors/OSPI-logo.png";
import PACCAR from "../assets/sponsors/Paccar-logo.png";
import Qualcomm from "../assets/sponsors/Qualcomm-logo.png";
import TresHermanos from "../assets/sponsors/TresHermanos-logo.png";

function SponsorMarquee() {
  return (
    <div className="flex space-y-2 flex-col text-center mb-14">
      <Marquee pauseOnHover autoFill direction="left">
        {[
          { src: Microsoft, alt: "Microsoft", link: "https://microsoft.com" },
          { src: OSPI, alt: "OSPI", link: "https://ospi.k12.wa.us/" },
          { src: Boeing, alt: "Boeing", link: "https://boeing.com" },
          { src: FIRSTWA, alt: "First Robotics Washington", link: "https://firstwa.org/" },
          { src: Mod, alt: "MOD Pizza", link: "https://modpizza.com" },
        ].map((sponsor, index) => (
          <Tilt key={index} options={defaultOptions}>
            <div
              onClick={() => window.open(sponsor.link)}
              className="bg-white h-32 w-32 md:h-64 md:w-64 m-1 rounded-xl flex justify-center p-4 cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <img src={sponsor.src} alt={sponsor.alt} className="object-contain max-h-full max-w-full" />
            </div>
          </Tilt>
        ))}
      </Marquee>

      <Marquee pauseOnHover autoFill direction="right">
        {[
          { src: PACCAR, alt: "Paccar", link: "https://www.paccar.com/" },
          { src: Qualcomm, alt: "Qualcomm", link: "https://qualcomm.com" },
          { src: Lego, alt: "The Lego Foundation", link: "https://learningthroughplay.com/about-us/the-lego-foundation" },
          { src: Chipotle, alt: "Chipotle Mexican Grill", link: "https://chipotle.com" },
          { src: TresHermanos, alt: "Tres Hermanos Mexican Restaurant", link: "https://thetreshermanos.com/index.html" },
          { src: LWHS, alt: "Lake Washington High School", link: "https://lwhs.lwsd.org" },
        ].map((sponsor, index) => (
          <Tilt key={index} options={defaultOptions}>
            <div
              onClick={() => window.open(sponsor.link)}
              className="bg-white h-32 w-32 md:h-64 md:w-64 m-1 rounded-xl flex justify-center p-4 cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <img src={sponsor.src} alt={sponsor.alt} className="object-contain max-h-full max-w-full" />
            </div>
          </Tilt>
        ))}
      </Marquee>
    </div>
  );
}

export default SponsorMarquee;
