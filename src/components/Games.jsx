import React from "react";

const gamesData = [
  {
    title: "Stress Me Less",
    image: "/images/games/game1.png",
    link: "https://mindyourmind.ca/apps/StressMeLess/index.html",
  },
  {
    title: "Monstressity",
    image: "/images/games/game2.png",
    link: "https://mindyourmind.ca/apps/Monstressity/",
  },
  {
    title: "Quote Bloom",
    image: "/images/games/game3.png",
    link: "https://mindyourmind.ca/apps/QuoteBloom/en/story_html5.html",
  },
  {
    title: "Anatomy of a Panic Attack",
    image: "/images/games/game4.png",
    link: "https://mindyourmind.ca/apps/QuoteBloom/en/story_html5.html",
  },
];

const Games = () => {
  return (
    <>
      <div className="mt-5 min-h screen bg-gray-100 px-6 py-16">
        <h1 className="text-4xl mt-10 font-extrabold text-center text-blue-400 mb-12">
          Play and Relax
        </h1>
        <div className="flex justify-center gap-10 mb-10 ">
          {gamesData.slice(2, 4).map((game, index) => (
            <div
              key={index}
              className="w-80 bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover rounded-t-xl "
              />
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-1g font-semibold text-gray-800 mb-3">
                  {game.title}
                </h2>
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-500 text-white py-4 px-2 rounded-xl hover:bg-indigo-600 transition"
                >
                  Play Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-10 mb-10 ">
          {gamesData.slice(0, 2).map((game, index) => (
            <div
              key={index}
              className="w-80 bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover rounded-t-xl "
              />
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-1g font-semibold text-gray-800 mb-3">
                  {game.title}
                </h2>
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-500 text-white py-4 px-2 rounded-xl hover:bg-indigo-600 transition"
                >
                  Play Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Games;
