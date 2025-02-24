import P24D6 from '../assets/galleryPhotos/districts-2024/P24D6.jpg';

function Mission() {
    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center w-full px-4 sm:px-8 py-6">
            <div className="mb-0 sm:mb-0 sm:m-5 w-full sm:w-[47vw] min-h-[40vh] sm:h-[50vh] flex-shrink-0 rounded-lg relative overflow-hidden order-2 sm:order-none">
                <img src={P24D6} alt="background" className="h-full w-full object-cover rounded-lg border-codePurple border-4" />
            </div>

            <div className="m-3 sm:m-5 w-full sm:w-[47vw] min-h-[40vh] sm:h-[50vh] flex-shrink-0 rounded-lg flex flex-col justify-center items-center text-lg sm:text-xl text-codePurple order-1 sm:order-none">
                <h1 className="font-kode font-bold text-4xl sm:text-6xl text-center">
                    Our Mission
                </h1>
                <div className="text-base sm:text-lg border-codePurple border-2 rounded-lg mt-3 p-4 sm:p-6 bg-white shadow-md">
                    <p className="py-2">Team 5827 strives to provide equitable opportunities in STEM to students of all ages.</p>
                    <p className="py-2">By introducing FIRST to students, we raise their experience and caliber in STEM subjects.</p>
                    <p className="py-2">Using the skills they learn on our team, we hope students pursue their passions in STEM beyond high school.</p>
                    <p className="py-2">This is all done through the FIRST principles of Gracious Professionalism and by providing a safe, welcoming environment for all.</p>
                </div>
            </div>
        </div>
    );
}

export default Mission;
