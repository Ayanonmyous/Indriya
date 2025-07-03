import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 border-b border-gray-600 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a className="flex flex-shrink-0 items-center mr-5" href="/">
              <img
                className="h-16 w-auto scroll-p-8"
                src="/images/image.png"
                alt="Company Logo "
              />
              <span className="hidden md:block text-white font-sembold  text-2xl  ml-2  font-extrabold">
                Indriya
              </span>
            </a>

            <div
              className="flex flex1  items-center justify-center md:items-stretch md
                  :justify-start"
            >
              <div className="md:ml-auto">
                <div className="flex space-x-1">
                  <button
                    onClick={() => navigate("/")}
                    className="text-gray-200 font-semibold   hover:text-blue-300  transition duration-300 px-6 py-2"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => navigate("/aboutus")}
                    className="text-gray-200 font-semibold  hover:text-blue-300  transition duration-300 px-6 py-2"
                  >
                    About
                  </button>
                  <button
                    className="text-gray-200 font-semibold   hover:text-blue-300  transition duration-300 px-6 py-2"
                    onClick={() => {
                      navigate("/");
                      setTimeout(() => {
                        const section = document.getElementById("services");
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 100);
                    }}
                  >
                    Services
                  </button>
                  <button
                    className="text-gray-200 font-semibold   hover:text-blue-300   transition duration-300 px-6 py-2"
                    onClick={() => navigate("/blogs")}
                  >
                    Blogs
                  </button>
                  <a
                    className="text-gray-200 font-semibold   hover:text-blue-300  transition duration-300 px-6 py-2"
                    href="https://www.thelivelovelaughfoundation.org/find-help/helplines"
                  >
                    Call to Action
                  </a>

                  {!user ? (
                    <>
                      <button
                        onClick={() => navigate("/signup")}
                        className="relative text-blue-400 px-4 py-2 font-extrabold hover:text-blue-600 transition duration-200"
                      >
                        Sign Up
                      </button>
                      <button
                        onClick={() => navigate("/login")}
                        className="relative text-blue-400  px-4 py-2 font-extrabold hover:text-blue-600 transition duration-200"
                      >
                        Login
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="text-gray-300 px-4 py-2">
                        {user.email}
                      </span>
                      <button
                        onClick={handleLogout}
                        className="text-red-400 font-semibold px-4 py-2 transition duration-300 hover:text-red-500"
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
