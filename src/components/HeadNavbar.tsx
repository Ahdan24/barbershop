import { FaGlobe, FaInstagram } from "react-icons/fa";

const HeadNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-2 px-4 md:px-10 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
      <div className="flex flex-col md:flex-row md:space-x-8 items-center">
        <div className="text-center md:text-left text-sm">
          <span className="font-semibold block">8:00 - 21:00</span>
          <span>Opening Hour Mon - Fri</span>
        </div>
        <div className="text-center md:text-left text-sm mt-2 md:mt-0">
          <span className="font-semibold block">+62 1234 5667</span>
          <span>Call For Appointment</span>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 py-4 px-4">
        <div className="flex items-center space-x-2">
          <FaInstagram className="text-yellow-500 text-lg" />
          <span className="text-white text-sm">B-BarberShop</span>
        </div>

        <div className="w-px h-6 bg-yellow-500"></div>

        <div className="flex items-center space-x-2">
          <FaGlobe className="text-yellow-500 text-lg" />
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm hover:underline"
          >
            www.B-BarberShop.com
          </a>
        </div>
      </div>
    </nav>
  );
};

export default HeadNavbar;
