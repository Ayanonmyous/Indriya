import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate;
  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto flex justify-between  flex-wrap gap-8">
          {/* About section  */}
          <div className="max-w-md">
            <h1 className="text-1g font-extrabold mb-2"> Indriya</h1>
            <p className="text-sm text-gray-300 ">
              Indriya is your digital companion for better mental health. From
              expert-led therapies to mindful games and wellness blogs, we’re
              here to support your journey — every step of the way.
            </p>
          </div>

          {/* Socials*/}
          <div>
            <h2 className="text-1g font-semibold mb-2">Follow Us</h2>
            <p className="text-sm text-gray-300 mb-2">
              Stay connected with us on :
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/yourhandle "
                className="hover:text-pink-400"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/ayanpal00/"
                className="hover:text-blue-400"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* {Bottom Line} */}
          </div>
        </div>
        <div className="text-center text-md text-gray-500 mt-10 border-t border-gray-700 pt-4">
          © 2025 Indriya. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
