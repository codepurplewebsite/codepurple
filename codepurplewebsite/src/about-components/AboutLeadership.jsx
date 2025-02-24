import Marquee from "react-fast-marquee";
import P24D7 from "../assets/galleryPhotos/districts-2024/P24D7.jpg";

function AboutLeadership() {
  const scrollText = () => {
    document.querySelector(".leadershipscroll").classList.add("hidden");
    document.querySelector(".leadershipmarquee").classList.remove("hidden");
  };

  const stopScrollText = () => {
    document.querySelector(".leadershipscroll").classList.remove("hidden");
    document.querySelector(".leadershipmarquee").classList.add("hidden");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full p-4 space-y-4 md:space-y-0">
      <div className="mx-5 flex flex-col justify-center items-center text-xl relative w-full md:w-1/2 space-y-4">
        <h1 className="font-kode font-bold text-5xl text-codePurple text-center">
          Leaders and Mentors
        </h1>
        <div className="text-lg border-codePurple border-2 rounded-lg flex flex-col justify-center items-center w-full">
          <p className="px-10 py-2 text-left">
            Building a cohesive team and robot would not be possible without the
            Student Leaders and Mentors who are part of our team.
          </p>
          <p className="px-10 py-2 text-left">
            Student Leads are selected by a panel of past leads and mentors in
            order to bring together all the individual subteams into one larger
            team.
          </p>
          <p className="px-10 py-2 text-left">
            Additionally, we have many mentors (volunteers, parents, etc.) who
            are as equally interested in Robotics as the students and are
            integral to the coordination and structure of our team.
          </p>

          <div className="w-full h-auto flex justify-center">
            <a
              onMouseEnter={scrollText}
              onMouseLeave={stopScrollText}
              className="w-96 py-4 my-6 mx-2 font-bold text-xl border-codePurple border-4 rounded-full text-codePurple hover:bg-codePurple hover:text-white hover:border-white transition-all duration-300 flex justify-center items-center"
              href="/leadership"
            >
              <p className="leadershipscroll visible">
                Learn more about our leadership!
              </p>
              <div className="leadershipmarquee hidden w-full">
                <Marquee velocity={50} autoFill direction="left">
                  <p className="mx-2">Leadership</p>
                </Marquee>
              </div>
            </a>
          </div>
        </div>
        
      </div>
      <div className="m-5 flex-shrink-0 w-full md:w-1/2 max-w-full h-auto rounded-lg flex justify-center items-center relative">
          <img
            src={P24D7}
            alt="background"
            className="object-cover rounded-lg border-codePurple border-4 w-full h-auto"
          />
        </div>
    </div>
  );
}

export default AboutLeadership;
