import NavBox from "./NavBox";
import React, { useState } from "react";
import RoboticsLocation from "../assets/RoboticsLocation.png";
import image1 from "../assets/galleryPhotos/kickoff/IMG_4880.JPG";
import image2 from "../assets/galleryPhotos/kickoff/IMG_4764.JPG";
import image3 from "../assets/galleryPhotos/kickoff/IMG_4811.JPG";

function WhoWeAre() {
  const [navBoxStuff, setNavBoxStuff] = useState(null);

  return (
    <div className="w-screen bg-codePurple z-100 mt-[-1px] flex flex-col md:flex-row items-center z-20 p-6 md:h-[50vh]">
      <div className="hidden md:flex mx-44 mb-12 w-1/3 h-full flex-col">
        <h1 className="font-kode font-extrabold text-5xl z-10 text-white">
          Who We Are
        </h1>
        <div className="border-4 border-white w-2 rounded h-3/4 ml-12 mt-2 flex flex-col justify-around">
          <div
            className="flex items-center grow"
            onMouseEnter={() =>
              setNavBoxStuff(
                <div className="relative w-full h-full flex justify-center items-center">
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-25"
                    style={{ backgroundImage: `url(${image3})` }}
                  ></div>
                  <div className="relative z-10 p-4 text-white">
                    <p className="rounded-lg mx-4">
                      Team 5827 strives to provide equal opportunities in STEM
                      to students of all ages. By introducing FIRST to students,
                      we empower them to become future leaders and productive
                      adults using the core values of Gracious Professionalism.
                      <br />
                      <br />
                      Click to learn more about our team!
                    </p>
                  </div>
                </div>
              )
            }
            onMouseLeave={() => setNavBoxStuff(null)}
          >
            <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
            <span className="ml-4 font-kode text-gray-300 text-4xl hover:text-white transition-all duration-300 h-full">
              <a className = "h-full flex items-center" href="/about#mission">Mission</a>
            </span>
          </div>
          <div
            className="flex items-center grow"
            onMouseEnter={() =>
              setNavBoxStuff(
                <div className="relative w-full h-full flex justify-center items-center">
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
                    style={{ backgroundImage: `url(${image2})` }}
                  ></div>
                  <div className="relative z-10 p-4 text-white">
                    <p className="rounded-lg mx-4">
                      Ever since our founding in 2016, team 5827 has been a
                      tight-knit group of High School robotics enjoyers working
                      together to produce the best robots we can.
                      <br />
                      <br />
                      Click to learn more about our team's history!
                    </p>
                  </div>
                </div>
              )
            }
            onMouseLeave={() => setNavBoxStuff(null)}
          >
            <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
            <span className="ml-4 font-kode text-gray-300 text-4xl hover:text-white transition-all duration-300 h-full">
              <a className = "h-full flex items-center" href="/about#history">History</a>
            </span>
          </div>
          <div
            className="flex items-center grow"
            onMouseEnter={() =>
              setNavBoxStuff(
                <div className="relative w-full h-full flex justify-center items-center">
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${image1})` }}
                  ></div>
                  <div className="relative z-10 p-4 text-white">
                    <p className="rounded-lg">
                      In our team, we have many different sub-teams for each
                      component of the robot. Our subteams include:
                      <ul className="list-disc list-inside">
                        <li>Computer Assisted Design</li>
                        <li>Build</li>
                        <li>Electronics</li>
                        <li>Finance</li>
                        <li>Programming</li>
                        <li>And more!</li>
                      </ul>
                      <br />
                      Click to learn more about each of our unique subteams!
                    </p>
                  </div>
                </div>
              )
            }
            onMouseLeave={() => setNavBoxStuff(null)}
          >
            <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
            <span className="ml-4 font-kode text-gray-300 text-4xl hover:text-white transition-all duration-300 h-full">
              <a className = "h-full flex items-center" href="/subteams">Subteams</a>
            </span>
          </div>
          <div
            className="flex items-center grow"
            onMouseEnter={() =>
              setNavBoxStuff(
                <div className="relative w-full h-full flex justify-center items-center">
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${RoboticsLocation})` }}
                  ></div>
                </div>
              )
            }
            onMouseLeave={() => setNavBoxStuff(null)}
          >
            <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
            <span className="ml-4 font-kode text-gray-300 text-4xl hover:text-white transition-all duration-300 h-full">
              <a className = "h-full flex items-center" href="/about#history">Location</a>
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col space-y-6 md:hidden">
        <h1 className="font-kode font-extrabold text-4xl text-white text-center">
          Who We Are
        </h1>
        <div className="bg-black bg-opacity-30 p-6 rounded-lg text-white">
          <img className="w-full h-40 object-cover rounded-md mb-4" src={image3} alt="Mission" />
          <p>
            Team 5827 strives to provide equal opportunities in STEM to students
            of all ages. By introducing FIRST to students, we empower them to
            become future leaders and productive adults using the core values of
            Gracious Professionalism.
          </p>
          <a href="/about#mission" className="text-codeYellow underline mt-2 block">Learn more</a>
        </div>

        <div className="bg-black bg-opacity-30 p-6 rounded-lg text-white">
          <img className="w-full h-40 object-cover rounded-md mb-4" src={image2} alt="History" />
          <p>
            Ever since our founding in 2016, team 5827 has been a tight-knit
            group of High School robotics enjoyers working together to produce
            the best robots we can.
          </p>
          <a href="/about#history" className="text-codeYellow underline mt-2 block">Learn more</a>
        </div>

        <div className="bg-black bg-opacity-30 p-6 rounded-lg text-white">
          <img className="w-full h-40 object-cover rounded-md mb-4" src={image1} alt="Subteams" />
          <p>
            In our team, we have many different sub-teams for each component of
            the robot. Our subteams include:
          </p>
          <ul className="list-disc list-inside">
            <li>Computer Assisted Design</li>
            <li>Build</li>
            <li>Electronics</li>
            <li>Finance</li>
            <li>Programming</li>
            <li>And more!</li>
          </ul>
          <a href="/subteams" className="text-codeYellow underline mt-2 block">Learn more</a>
        </div>

        <div className="bg-black bg-opacity-30 p-6 rounded-lg text-white">
          <img className="w-full h-40 object-cover rounded-md mb-4" src={RoboticsLocation} alt="Subteams" />
          <p>
            Our team is located at Lake Washington High School! We operate out of our Robotics room in the north wing.
          </p>
          <a href="/subteams" className="text-codeYellow underline mt-2 block">Learn more</a>
        </div>
      </div>

      <div className="hidden md:block absolute right-0 mx-32">
        <NavBox stuff={navBoxStuff} />
      </div>
    </div>
  );
}

export default WhoWeAre;
