import P24GG3 from "../assets/galleryPhotos/girlsgen-2024/P24GG3.JPG";

function WhoWeAre() {
  const waveText = "101 101 1000011!".split("").map((char, index) => (
    <span
      key={index}
      style={{ animationDelay: `${index * 0.2}s` }}
      className="wave2"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <div className="w-full px-4 sm:px-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center w-full z-10">
        
        <div className="m-3 sm:m-5 w-full sm:w-[47vw] min-h-[40vh] sm:h-[50vh] flex-shrink-0 rounded-lg border-codePurple border-8 border-dashed overflow-hidden">
          <img
            src={P24GG3}
            alt="P24GG3"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="m-3 sm:m-5 bg-codePurple w-full sm:w-[47vw] min-h-[40vh] sm:h-[50vh] flex-shrink-0 rounded-lg border-8 border-rgb(164, 66, 221) border-dashed flex flex-col justify-center items-center text-white p-4 sm:p-6">
          <p className="text-left text-sm sm:text-base">
            Team 5827{" "}
            <span className="underline underline-offset-2 font-bold text-lg sm:text-xl hover:bg-white hover:p-1 hover:text-codePurple transition-all duration-500">
              <a href="/home">Code Purple</a>
            </span>{" "}
            is a high school robotics team from Kirkland, Washington. We compete
            in a robotics league under an organization called{" "}
            <span className="italic underline underline-offset-2 font-bold text-lg sm:text-xl hover:bg-white hover:p-1 hover:text-codePurple duration-500 transition-all">
              <a
                href="https://www.firstinspires.org/robotics/frc"
                target="_blank"
                rel="noopener noreferrer"
              >
                FIRST®
              </a>
            </span>
            {" "}(For Inspiration and Recognition of Science and Technology)
            robotics.
          </p>
          <p className="mt-3 text-left text-sm sm:text-base">
            Our team is not only made up of students from {" "}
            <span className="underline underline-offset-2 font-bold text-lg sm:text-xl hover:bg-white hover:p-1 hover:text-codePurple duration-500 transition-all">
              <a
                href="http://lwhs.lwsd.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lake Washington High School
              </a>
            </span>
            , but includes many eager parents, mentors, and volunteers
            equally as interested in robotics.
          </p>
          <p className="mt-3 text-left text-sm sm:text-base">
            Distinguishable features of our team include our purple color, our
            Kangaroo mascot, and our famous team chant of our number in binary:
          </p>
          <p className="mt-3 text-center text-lg sm:text-2xl font-kode">
            {waveText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
