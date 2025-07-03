import React from "react";
import cardsData from "../HomeCards.json"; // Adjust path if needed
import { Navigate, useNavigate } from "react-router-dom";

const HomeCards = () => {
  const navigate = useNavigate();
  return (
    <div
      id="services"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 p-4  bg-gray-200 "
    >
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition-shadow duration-300"
        >
          <div className="flex justify-center items-center bg-white h-40">
            <img src={card.image} alt={card.title} className="h-40" />
          </div>
          <h3 className="text-xl font-bold text-center text-gray-800 mb-2 mt-10">
            {card.title}
          </h3>

          <p className="text-gray-600 text-center mb-4">{card.description}</p>
          <div className="flex justify-center">
            <button
              className="px-4 py-3 bg-indigo-500 text-white rounded-3xl hover:bg-indigo-600 transition cursor-pointer"
              onClick={() => {
                if (card.title === "Mental Fitness Check") {
                  navigate("/assessment");
                } else if (card.title === "Relaxing Games") {
                  navigate("/games");
                } else if (card.title === "Wellness Blogs") {
                  navigate("/blogs");
                } else if (card.title === "Medication Tracker") {
                  navigate("/trackmedication");
                } else if (card.title === "Digital Therapies") {
                  window.open(
                    "https://blahtherapy.com/#google_vignette",
                    "_blank"
                  );
                } else {
                  alert("Feature coming soon!");
                }
              }}
            >
              {card.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCards;
