import React from "react";

const CallToAction = () => {
  return (
    <>
      <div className="p-15">
        <h1 className="text-4xl font-semibold  text-center font-sans">
          Call To Action
        </h1>
        <div className="">
          <p className="text-2xl text-gray-400 py-6 px-16 text-center font-sans">
            Visit this site to get all the helpline numbers of all the doctors
            and contact them in case of any emergencey
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.thelivelovelaughfoundation.org/find-help/helplines"
              className="text-lg border border-gray-800  bg-white px-6 py-2 inline-block mx-auto text-gray-800 hover:bg-black hover:text-white transition duration-300"
            >
              Call To Action
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
