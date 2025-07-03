import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import heroimage from "../images/heroimage.png";
import Logo from "../images/image.png";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 bg-[url('../src/images/background.jpg')] object-cover gap-3 mt-20 ">
        <div className="w-full md:w-1/2">
          {/* left text section */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-7">
            Indriya
          </h1>
          <h3 className="text-gray-800 font-semibold text-xl md-text-3xl mb-9 leading-relaxed ">
            A one stop solution to all your mental issues ! We analyze the
            psychological and mental health conditions and provide effective
            solutions
          </h3>
          <div className="flex items-center gap-4 ">
            <button
              className="px-5 py-5 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition "
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
            <button
              onClick={() => {
                window.open("https://youtu.be/2UE-Bb4Ml7E", "_blank");
              }}
              className="flex items-center gap-2 text-gray-900 hover:text-gray-900 transition cursor-pointer"
            >
              <span className="w-10 h-10 border-2 border-gray-900 rounded-full flex items-center justify-center">
                ▶
              </span>
              Watch Demo
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 mb-12 md:mb-0 ">
          <img src={heroimage} alt="Mental Health Illustration" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
