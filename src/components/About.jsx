import React from "react";

const About = () => {
  return (
    <>
      <section className="mt-7 bg-white px-6 py-16 md:px-20 lg:px-32 text-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col  md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/images/aboutus.jpg"
              alt="Person finding peace"
              className=" mt-10 w-96 rounded-xl shadow-lg"
            />
          </div>

          <div className="md:w-1/2 ">
            <h2 className="text-4xl font-bold text-indigo-600 mb-6 flex gap-3">
              About Indriya
              <img
                src="../src/images/image.png"
                alt="logo"
                className="w-10 h-10 "
              />
            </h2>
            <p className="text-1g text-gray-900 font-semibold  mb-6 leading-relaxed">
              <span className="font-bold text-indigo-500 ">Indriya </span>
              is your personal mental wellness companion-built to help you
              reflect, recharge and reconnect with yourself.In today's
              fast-paced world, it's easy to get lost in chaos. Indriya offers
              you a gentle pause: with mindful games, mental check-ins, mood
              tracking, and a space to vent — we help you make sense of what you
              feel, without judgment or noise.
            </p>
            <p className="text-1g text-gray-900 font-semibold  leading-relaxed">
              Inspired by the ancient Sanskrit word for “senses,” Indriya is
              designed to be intuitive and deeply human. We believe emotional
              fitness should be as regular as physical fitness — and just as
              supported. Whether you're feeling overwhelmed or just need a safe
              space, Indriya is here — calm, quiet, and always listening.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
