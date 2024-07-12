import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8 px-10">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 grid-cols-1 ">
          <div className="basis-1/4">
            <div className="mb-6 md:mb-0 w-full md:w-auto">
              <h4 className="text-xl font-bold">Contact Us</h4>
              <p>Email: info@sporting.com</p>
              <p>Phone: +123 456 7890</p>
              <p>Address: 123 sporting St, Cumilla City, FIT 13254</p>
            </div>
          </div>
          <div className="basis-1/2">
          <h4 className="text-xl font-bold">Quick Links</h4>
              <div className="flex flex-row gap-4 my-8 ">
              <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            
            
                
          </div>
          <div className="basis-1/2">
          <h4 className="text-xl font-bold">Quick Links</h4>
            <p>Home</p>
            <p>Products</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>
          <div className="basis-1/2">
          <h4 className="text-xl font-bold">Help center </h4>
            <p>bayazidoffical@gmail.com</p>
            <p>Phone: +88014-0025-9020</p>
            <p>Laksham, Monohorgonj,Cumiila</p>
         
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="lg:text-xl text-base">
            develop by shipon ©{new Date().getFullYear()}All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
