import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 border-2">
        <div className="m-2">
          <h3 className="text-lg font-semibold text-blue-500 mb-4">
            Salon Address
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span>📍</span>
              <span className="ml-2">Dieng, Wonosobo - Central Java</span>
            </li>
            <li className="flex items-center">
              <span>📞</span>
              <span className="ml-2">+62 1234 5667</span>
            </li>
            <li className="flex items-center">
              <span>📧</span>
              <span className="ml-2">B-BarberShop@example.com</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4 text-blue-500">
            <FaTwitter />
            <FaFacebook />
            <FaYoutube />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Terms of use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cookies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">
            Newsletter
          </h3>
          <p className="mb-4">
            Want to know more about the progress of B-Barbershop, please
            subscribe to the latest news about us.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your E-mail"
              className="w-full p-2 rounded-l-md bg-white text-gray-900 focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center text-white">
        <p>&copy; B-BarberShop, All Rights Reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://www.instagram.com/auvailable"
            className="text-blue-500 hover:underline"
          >
            Auvailable
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
