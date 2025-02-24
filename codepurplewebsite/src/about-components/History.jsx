import P24D5 from "../assets/galleryPhotos/districts-2024/P24D5.jpg";

function History() {
  return (
    <div
      className="flex flex-col sm:flex-row items-center sm:items-start justify-center w-full bg-codePurple px-4 sm:px-8 py-6"
      id="history"
    >

      {/* Text section */}
      <div className="w-full sm:w-[47vw] min-h-[40vh] sm:h-[50vh] flex flex-col justify-center items-center text-lg sm:text-xl text-white p-4 sm:p-6 order-2 sm:order-none">
        <p className="py-2 text-left">
          Our team was founded in 2016 and began as a small group of students
          working out of a 3rd-floor shop space and classroom combination.
        </p>
        <p className="py-2 text-left">
          Today, Code Purple has rapidly grown into a team of{" "}
          <span className="font-bold text-2xl">90+</span> students from several
          schools in the Lake Washington School District.
        </p>
        <p className="py-2 text-left">
          We now work in three rooms: a metal lab, a wood lab, and a classroom -
          all thanks to the support and passing of local levies.
        </p>
        <p className="py-2 text-left">
          We operate in these facilities with enthusiastic support from the
          school and district administration!
        </p>
      </div>

      <div className="relative w-full sm:w-[47vw] min-h-[40vh] sm:h-[50vh] flex items-center justify-center rounded-lg overflow-hidden order-1 sm:order-none">
        <img
          src={P24D5}
          alt="background"
          className="absolute top-0 left-0 h-full w-full object-cover opacity-50 rounded-lg border-white border-4"
        />
        <h1 className="font-kode font-bold text-white text-5xl sm:text-9xl text-center z-10">
          Our History
        </h1>
      </div>
    </div>
  );
}

export default History;
