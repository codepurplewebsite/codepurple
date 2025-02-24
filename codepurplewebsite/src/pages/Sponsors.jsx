import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 10, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

import Boeing from "../assets/sponsors/Boeing-logo.png";
import FIRSTWA from "../assets/sponsors/FIRSTWA-logo.png";
import ChinnConstructions from "../assets/sponsors/chinn-constructions-logo.png"; 
import LWHS from "../assets/sponsors/LWHS-logo.png";
import Microsoft from "../assets/sponsors/Microsoft-logo.png";
import Mod from "../assets/sponsors/Mod-logo.png";
import OSPI from "../assets/sponsors/OSPI-logo.png";
import MotherDuck from "../assets/sponsors/MotherDuck-logo.png";
import Qualcomm from "../assets/sponsors/Qualcomm-logo.png";
import UW from "../assets/sponsors/uw-logo.png";
import Nvidia from "../assets/sponsors/nvidia-logo.png";
import TamSkylights from "../assets/sponsors/tam-skylights-logo.png";
import Panera from "../assets/sponsors/Panera-logo.png";
import Panda from "../assets/sponsors/panda-logo.jpeg";


// First define the sponsors array at the top
const sponsors = [
  { name: "Microsoft", logo: Microsoft, url: "https://microsoft.com" },
  { name: "Nvidia", logo: Nvidia, url: "https://www.nvidia.com" },
  { name: "OSPI", logo: OSPI, url: "https://ospi.k12.wa.us/" },
  { name: "Boeing", logo: Boeing, url: "https://boeing.com" },
  { name: "FIRST Washington", logo: FIRSTWA, url: "https://firstwa.org/" },
  { name: "Qualcomm", logo: Qualcomm, url: "https://qualcomm.com" },
  { name: "University of Washington", logo: UW, url: "https://www.washington.edu/" },
  { name: "MotherDuck", logo: MotherDuck, url: "https://motherduck.com/" },
  { name: "MOD Pizza", logo: Mod, url: "https://modpizza.com" },
  { name: "Chinn Construction", logo: ChinnConstructions, url: "https://chinnconstruction.com/" },
  { name: "Tam Skylights", logo: TamSkylights, url: "https://tamskylights.com/" },
  { name: "Panera Bread", logo: Panera, url: "https://www.panerabread.com/en-us/home.html" },
  { name: "Panda Express", logo: Panda, url: "https://www.pandaexpress.com/" },
  { name: "Lake Washington High School", logo: LWHS, url: "https://lwhs.lwsd.org" }
];

function Sponsors() {
  return (
    <div className="w-screen h-auto overflow-x-hidden flex flex-col">
      <div className="w-full h-80 bg-codePurple items-center justify-center pt-16 flex flex-col">
        <h1 className="text-9xl font-kode text-center text-white font-bold">
          Sponsors
        </h1>
      </div>
      <div className="h-auto w-full flex justify-center text-left bg-codePurple">
        <div className="w-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid px-8 pb-8 gap-8 max-w-[5000px]">
          {sponsors.map((sponsor) => (
            <Tilt options={defaultOptions} key={sponsor.name}>
              <div
                onClick={() => window.open(sponsor.url)}
                className="cursor-pointer w-64 h-96 bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl transition-all p-6"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-auto object-contain"
                />
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;