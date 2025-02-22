import SponsorMarquee from './SponsorMarquee';

function Sponsors() {
  return (
    <div className="h-auto w-full bg-codePurple">
      <div className="mx-6 md:mx-24 my-10 md:my-16">
        <div className="relative flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 md:gap-10 text-center md:text-left">
          
          <div className="border-white border-8 rounded-full w-full h-0 absolute right-[-30%] hidden md:block"></div>

          <h1 className="font-kode font-extrabold text-5xl md:text-7xl z-10 text-white">
            <a href="/sponsors">Sponsors</a>
          </h1>
        </div>

        <div className="mt-4 md:mt-10 overflow-hidden">
          <SponsorMarquee className="h-8 md:h-24" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
